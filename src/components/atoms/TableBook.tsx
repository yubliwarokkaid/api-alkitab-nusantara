import { Roboto_Serif } from "next/font/google";
import Link from "next/link";

const roboto = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function TableBook() {
  return (
    <table className="mb-10 min-w-full table-auto border border-slate-200 text-sm text-gray-100">
      <thead className="bg-slate-100 font-serif text-slate-700">
        <tr>
          <th className="border border-slate-200 px-4 py-2 text-left">
            METHOD
          </th>
          <th className="border border-slate-200 px-4 py-2 text-left">
            ENDPOINT
          </th>
          <th className="border border-slate-200 px-4 py-2 text-left">
            KETERANGAN
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white font-mono text-slate-600">
          <td className="border border-slate-200 px-4 py-2 font-serif font-bold">
            GET
          </td>
          <td className="border border-slate-200 px-4 py-2">
            <Link
              href="https://api-alkitab-nusantara.vercel.app/api/v1/book/list"
              className="rounded bg-slate-100 p-1 hover:text-sky-600"
              target="_blank"
            >
              /api/v1/book/list
            </Link>
          </td>
          <td
            className={`border border-slate-200 px-4 py-2 ${roboto.className} font-medium`}
          >
            Pada Enpoint ini mengambil semua isi Kitab dari (Kejadian - Wahyu)
          </td>
        </tr>
        <tr className="bg-white font-mono text-slate-600">
          <td className="border border-slate-200 px-4 py-2 font-serif font-bold">
            GET
          </td>
          <td className="border border-slate-200 px-4 py-2">
            <Link
              href="https://api-alkitab-nusantara.vercel.app/api/v1/book/list/old"
              className="rounded bg-slate-100 p-1 hover:text-sky-600"
              target="_blank"
            >
              /api/v1/book/list/old
            </Link>
          </td>
          <td
            className={`border border-slate-200 px-4 py-2 ${roboto.className} font-medium`}
          >
            Pada Enpoint ini mengambil semua isi Kitab Perjanjian Lama dari
            (Kejadian - Maleakhi)
          </td>
        </tr>
        <tr className="bg-white font-mono text-slate-600">
          <td className="border border-slate-200 px-4 py-2 font-serif font-bold">
            GET
          </td>
          <td className="border border-slate-200 px-4 py-2">
            <Link
              href="https://api-alkitab-nusantara.vercel.app/api/v1/book/list/new"
              className="rounded bg-slate-100 p-1 hover:text-sky-600"
              target="_blank"
            >
              /api/v1/book/list/new
            </Link>
          </td>
          <td
            className={`border border-slate-200 px-4 py-2 ${roboto.className} font-medium`}
          >
            Pada Enpoint ini mengambil semua isi Kitab Perjanjian Baru dari
            (Matius - Wahyu)
          </td>
        </tr>
      </tbody>
    </table>
  );
}
