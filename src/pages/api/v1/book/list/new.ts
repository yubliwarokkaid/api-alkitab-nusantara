import { NextApiRequest, NextApiResponse } from "next";

const books = [
  { id: 40, short: "Mat", name: "Matius", chapter: 28 },
  { id: 41, short: "Mar", name: "Markus", chapter: 16 },
  { id: 42, short: "Luk", name: "Lukas", chapter: 24 },
  { id: 43, short: "Yoh", name: "Yohanes", chapter: 21 },
  { id: 44, short: "Kis", name: "Kisah Para Rasul", chapter: 28 },
  { id: 45, short: "Rom", name: "Roma", chapter: 16 },
  { id: 46, short: "1Kor", name: "1 Korintus", chapter: 16 },
  { id: 47, short: "2Kor", name: "2 Korintus", chapter: 13 },
  { id: 48, short: "Gal", name: "Galatia", chapter: 6 },
  { id: 49, short: "Efe", name: "Efesus", chapter: 6 },
  { id: 50, short: "Flp", name: "Filipi", chapter: 4 },
  { id: 51, short: "Kol", name: "Kolose", chapter: 4 },
  { id: 52, short: "1Tes", name: "1 Tesalonika", chapter: 5 },
  { id: 53, short: "2Tes", name: "2 Tesalonika", chapter: 3 },
  { id: 54, short: "1Tim", name: "1 Timotius", chapter: 6 },
  { id: 55, short: "2Tim", name: "2 Timotius", chapter: 4 },
  { id: 56, short: "Tit", name: "Titus", chapter: 3 },
  { id: 57, short: "Flm", name: "Filemon", chapter: 1 },
  { id: 58, short: "Ibr", name: "Ibrani", chapter: 13 },
  { id: 59, short: "Yak", name: "Yakobus", chapter: 5 },
  { id: 60, short: "1Pet", name: "1 Petrus", chapter: 5 },
  { id: 61, short: "2Pet", name: "2 Petrus", chapter: 3 },
  { id: 62, short: "1Yoh", name: "1 Yohanes", chapter: 5 },
  { id: 63, short: "2Yoh", name: "2 Yohanes", chapter: 1 },
  { id: 64, short: "3Yoh", name: "3 Yohanes", chapter: 1 },
  { id: 65, short: "Yud", name: "Yudas", chapter: 1 },
  { id: 66, short: "Wah", name: "Wahyu", chapter: 22 },
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
