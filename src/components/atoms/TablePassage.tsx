import Link from "next/link";

export default function TablePassage() {
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
              href="https://api-alkitab-nusantara.vercel.app/api/v1/passage/Kej/1"
              className="rounded bg-slate-100 p-1 hover:text-sky-600"
              target="_blank"
            >
              {`/api/v1/passage/{short}/{chapter}`}
            </Link>
          </td>
          <td className="border border-slate-200 px-4 py-2 font-serif font-medium">
            Pada Enpoint ini mengambil semua Nama Buku, Title Buku, isi Ayat dan
            Nomor Pasal.
            <ul className="ml-4 list-disc">
              <li>
                contoh:
                <Link
                  href="https://api-alkitab-nusantara.vercel.app/api/v1/passage/Kej/1"
                  className="ml-1 text-sky-600 underline underline-offset-4 hover:text-sky-600"
                >
                  https://api-alkitab-nusantara.vercel.app/api/v1/passage/Kej/1
                </Link>
              </li>
            </ul>
          </td>
        </tr>
        <tr className="bg-white font-mono text-slate-600">
          <td className="border border-slate-200 px-4 py-2 font-serif font-bold">
            GET
          </td>
          <td className="border border-slate-200 px-4 py-2">
            <Link
              href="https://api-alkitab-nusantara.vercel.app/api/v1/passage/Kej/1?version=tb"
              className="rounded bg-slate-100 p-1 hover:text-sky-600"
              target="_blank"
            >
              {`/api/v1/passage/{short}/{chapter}?version={version}`}
            </Link>
          </td>
          <td className="border border-slate-200 px-4 py-2 font-serif font-medium">
            Pada Enpoint ini mengambil semua Nama Buku, Title Buku, isi Ayat dan
            Nomor Pasal, dengan menambahkan versi Terjemahan Alkitab seperti TB,
            TL, AV, dan lainnya.
            <ul className="ml-4 list-disc">
              <li>
                contoh:
                <Link
                  href="https://api-alkitab-nusantara.vercel.app/api/v1/passage/Kej/1?version=tb"
                  className="ml-1 text-sky-600 underline underline-offset-4 hover:text-sky-600"
                >
                  https://api-alkitab-nusantara.vercel.app/api/v1/passage/Kej/1?version=tb
                </Link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
