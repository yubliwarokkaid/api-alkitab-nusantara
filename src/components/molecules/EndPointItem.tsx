import Link from "next/link";
import { useState } from "react";
import { GoCheck, GoCopy } from "react-icons/go";
import TableBook from "../atoms/TableBook";
import TablePassage from "../atoms/TablePassage";

export default function EndPointItem() {
  const jsonDataBook = [
    {
      id: 1,
      short: "Kej",
      name: "Kejadian",
      chapter: 50,
    },
    {
      id: 2,
      short: "Kel",
      name: "Keluaran",
      chapter: 40,
    },
  ];

  const jsonDataPassage = {
    book_id: "1",
    book_name: "Kejadian",
    book_title: "Kejadian 1:1-31",
    verses: [
      {
        verse: "1",
        text: "Pada mulanya Allah menciptakan langit dan bumi.",
        title: "Allah menciptakan langit dan bumi serta isinya",
      },
      {
        verse: "2",
        text: "Bumi belum berbentuk dan kosong; gelap gulita menutupi samudera raya, dan Roh Allah melayang-layang di atas permukaan air.",
      },
    ],
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(jsonDataBook, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto bg-white p-10">
      <div className="font-poppins">
        <h2 className="mb-4 text-3xl font-semibold text-slate-700">
          Dokumentasi API
        </h2>
        <p className="mb-6 text-justify text-sm tracking-wide text-slate-600">
          REST API Alkitab Nusantara adalah sebuah layanan yang dirancang untuk
          memberikan akses cepat dan mudah ke teks Alkitab dalam berbagai versi
          terjemahan. Dengan API ini, pengembang dapat mengintegrasikan teks
          Alkitab ke dalam aplikasi atau situs web mereka, sehingga memungkinkan
          pengguna untuk membaca, mencari, atau menampilkan ayat dan pasal
          tertentu sesuai kebutuhan. API ini menggunakan format data JSON, yang
          mempermudah pengolahan dan penyajian data Alkitab dalam aplikasi
          modern.
        </p>
        <p className="mb-6 text-justify text-sm tracking-wide text-slate-600">
          Sumber data REST API Alkitab Nusantara berasal dari
          <Link
            href="https://labs.sabda.org/API"
            className="px-1 font-bold text-sky-500 underline transition-all duration-300 ease-out hover:text-sky-600"
            target="_blank"
          >
            SABDA Labs
          </Link>
          , sebuah platform penelitian digital yang menyediakan sumber daya
          Alkitab dan literatur Kristen untuk kebutuhan pengembang dan pengguna
          teknologi. Dengan API ini, Anda dapat mengakses teks Alkitab
          berdasarkan buku, pasal, ayat, dan versi terjemahan, termasuk{" "}
          Terjemahan Baru (TB), King James Version (KJV), dan lainnya.
        </p>
        <p className="mb-6 text-justify text-sm tracking-wide text-slate-600">
          REST API Alkitab Nusantara juga sangat bermanfaat untuk pengembang
          aplikasi rohani, seperti pembaca Alkitab digital, renungan harian,
          atau alat studi teologi. API ini memungkinkan aplikasi untuk
          menyajikan data Alkitab yang relevan, seperti teks lengkap pasal, ayat
          tertentu, atau hasil pencarian terkait tema spesifik. Dengan respons
          yang cepat dan format data yang mudah diolah, API ini menjadi alat
          yang sangat membantu dalam mengembangkan solusi digital berbasis
          Alkitab.
        </p>
        <p className="mb-6 text-justify text-sm tracking-wide text-slate-600">
          Kesederhanaan dan fleksibilitas REST API Alkitab Nusantara
          menjadikannya pilihan ideal untuk berbagai kasus penggunaan. Dari
          aplikasi mobile hingga situs web gereja, API ini memberikan solusi
          yang handal untuk menyediakan akses ke Firman Tuhan dengan cara yang
          modern dan terstruktur. Baik Anda seorang pengembang yang membuat alat
          belajar Alkitab, atau organisasi yang ingin menyediakan akses digital
          ke teks suci, REST API Alkitab Nusantara menawarkan kemampuan yang
          dapat disesuaikan dengan kebutuhan Anda.
        </p>
      </div>

      <div className="my-20 font-poppins">
        <h2 className="mb-4 text-2xl font-semibold text-slate-700">
          1. Endpoint List Alkitab
        </h2>

        <div className="my-8">
          <h4 className="font-bold uppercase text-slate-700">Base URL</h4>
          <Link
            href="https://api-alkitab-nusantara.vercel.app"
            className="font-serif text-slate-600 underline underline-offset-4 hover:text-sky-600"
            target="_blank"
          >
            https://api-alkitab-nusantara.vercel.app
          </Link>
        </div>

        <TableBook />

        <div className="rounded bg-gray-900 text-white shadow-md">
          <div className="flex items-center justify-between bg-slate-800 py-2 pl-4 pr-2 text-sm font-semibold text-slate-400">
            <p>Response Example</p>
            <button
              onClick={handleCopy}
              className="text-xs text-white focus:outline-none"
            >
              {copied ? (
                <div className="flex items-center">
                  <p className="rounded bg-slate-700 px-2 py-1 font-mono text-xs font-normal text-slate-300">
                    Salin!
                  </p>
                  <div className="p-2">
                    <GoCheck className="text-base text-green-600" />
                  </div>
                </div>
              ) : (
                <div className="p-2">
                  <GoCopy className="text-base" />
                </div>
              )}
            </button>
          </div>

          <div className="p-4">
            <pre className="overflow-auto font-mono text-sm">
              <code>{JSON.stringify(jsonDataBook, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
      <div className="mt-10 font-poppins">
        <h2 className="mb-4 text-2xl font-semibold text-slate-700">
          2. Endpoint Isi Konten Alkitab
        </h2>

        <div className="my-8">
          <h4 className="font-bold uppercase text-slate-700">Base URL</h4>
          <Link
            href="https://api-alkitab-nusantara.vercel.app"
            className="font-serif text-slate-600 underline underline-offset-4 hover:text-sky-600"
            target="_blank"
          >
            https://api-alkitab-nusantara.vercel.app
          </Link>
        </div>

        <TablePassage />

        <div className="rounded bg-gray-900 text-white shadow-md">
          <div className="flex items-center justify-between bg-slate-800 py-2 pl-4 pr-2 text-sm font-semibold text-slate-400">
            <p>Response Example</p>
            <button
              onClick={handleCopy}
              className="text-xs text-white focus:outline-none"
            >
              {copied ? (
                <div className="flex items-center">
                  <p className="rounded bg-slate-700 px-2 py-1 font-mono text-xs font-normal text-slate-300">
                    Salin!
                  </p>
                  <div className="p-2">
                    <GoCheck className="text-base text-green-600" />
                  </div>
                </div>
              ) : (
                <div className="p-2">
                  <GoCopy className="text-base" />
                </div>
              )}
            </button>
          </div>

          <div className="p-4">
            <pre className="overflow-auto font-mono text-sm">
              <code>{JSON.stringify(jsonDataPassage, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
