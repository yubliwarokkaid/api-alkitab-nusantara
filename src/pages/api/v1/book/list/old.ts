import { NextApiRequest, NextApiResponse } from "next";

const books = [
  { id: 1, short: "Kej", name: "Kejadian", chapter: 50 },
  { id: 2, short: "Kel", name: "Keluaran", chapter: 40 },
  { id: 3, short: "Ima", name: "Imamat", chapter: 27 },
  { id: 4, short: "Bil", name: "Bilangan", chapter: 36 },
  { id: 5, short: "Ula", name: "Ulangan", chapter: 34 },
  { id: 6, short: "Yos", name: "Yosua", chapter: 24 },
  { id: 7, short: "Hak", name: "Hakim-hakim", chapter: 21 },
  { id: 8, short: "Rut", name: "Rut", chapter: 4 },
  { id: 9, short: "1Sam", name: "1 Samuel", chapter: 31 },
  { id: 10, short: "2Sam", name: "2 Samuel", chapter: 24 },
  { id: 11, short: "1Raj", name: "1 Raja-Raja", chapter: 22 },
  { id: 12, short: "2Raj", name: "2 Raja-Raja", chapter: 25 },
  { id: 13, short: "1Taw", name: "1 Tawarikh", chapter: 29 },
  { id: 14, short: "2Taw", name: "2 Tawarikh", chapter: 36 },
  { id: 15, short: "Ezr", name: "Ezra", chapter: 10 },
  { id: 16, short: "Neh", name: "Nehemia", chapter: 13 },
  { id: 17, short: "Est", name: "Ester", chapter: 10 },
  { id: 18, short: "Ayb", name: "Ayub", chapter: 42 },
  { id: 19, short: "Maz", name: "Mazmur", chapter: 150 },
  { id: 20, short: "Ams", name: "Amsal", chapter: 31 },
  { id: 21, short: "Pkh", name: "Pengkhotbah", chapter: 12 },
  { id: 22, short: "Kid", name: "Kidung Agung", chapter: 8 },
  { id: 23, short: "Yes", name: "Yesaya", chapter: 66 },
  { id: 24, short: "Yer", name: "Yeremia", chapter: 52 },
  { id: 25, short: "Rat", name: "Ratapan", chapter: 5 },
  { id: 26, short: "Yeh", name: "Yehezkiel", chapter: 48 },
  { id: 27, short: "Dan", name: "Daniel", chapter: 12 },
  { id: 28, short: "Hos", name: "Hosea", chapter: 14 },
  { id: 29, short: "Yoe", name: "Yoel", chapter: 3 },
  { id: 30, short: "Amo", name: "Amos", chapter: 9 },
  { id: 31, short: "Oba", name: "Obaja", chapter: 1 },
  { id: 32, short: "Yun", name: "Yunus", chapter: 4 },
  { id: 33, short: "Mik", name: "Mikha", chapter: 7 },
  { id: 34, short: "Nah", name: "Nahum", chapter: 3 },
  { id: 35, short: "Hab", name: "Habakuk", chapter: 3 },
  { id: 36, short: "Zef", name: "Zefanya", chapter: 3 },
  { id: 37, short: "Hag", name: "Hagai", chapter: 2 },
  { id: 38, short: "Zak", name: "Zakharia", chapter: 14 },
  { id: 39, short: "Mal", name: "Maleakhi", chapter: 4 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Mengembalikan daftar buku
    res.status(200).json(books);
  } else {
    // Method tidak didukung
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
