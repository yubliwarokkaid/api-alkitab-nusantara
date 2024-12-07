import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { parseStringPromise } from "xml2js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { passage, chapter } = req.query;
  const version = req.query.version || "tb"; // Jika tidak ada versi, gunakan default "tb" (Terjemahan Baru)

  // Validasi parameter
  if (!passage || !chapter) {
    return res.status(400).json({
      error: "Passage and chapter parameters are required.",
    });
  }

  try {
    // URL API SABDA
    const apiUrl = `http://alkitab.sabda.org/api/passage.php?passage=${passage}+${chapter}&ver=${version}`;
    const response = await axios.get(apiUrl);
    const xmlData = response.data as string;

    // Konversi XML ke JSON
    const jsonResult = await parseStringPromise(xmlData, {
      explicitArray: false,
      mergeAttrs: true,
    });

    // Format data JSON
    const formattedResponse = {
      book_id: jsonResult?.bible?.book?.book_id || null,
      book_name: jsonResult?.bible?.book?.name || "Unknown Book",
      book_title: jsonResult?.bible?.book?.title || "No Title",
      verses: jsonResult?.bible?.book?.chapter?.verses?.verse
        ? Array.isArray(jsonResult.bible.book.chapter.verses.verse)
          ? jsonResult.bible.book.chapter.verses.verse.map((verse: any) => {
              const verseData: any = {
                verse: verse?.number || null,
                text: verse?.text || "No text available",
              };
              if (verse?.title) {
                verseData.title = verse.title;
              }
              return verseData;
            })
          : [
              {
                verse:
                  jsonResult.bible.book.chapter.verses.verse?.number || null,
                text:
                  jsonResult.bible.book.chapter.verses.verse?.text ||
                  "No text available",
              },
            ]
        : [],
    };

    // Jika data tidak ditemukan
    if (!formattedResponse.book_id) {
      return res.status(404).json({ error: "Book data not found." });
    }

    // Kirimkan respons
    res.status(200).json(formattedResponse);
  } catch (error: any) {
    console.error("Error fetching or parsing passage:", error.message);
    res.status(500).json({
      error: "Failed to fetch passage data.",
      details: error.message,
    });
  }
}
