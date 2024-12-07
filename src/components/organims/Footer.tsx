import { Roboto_Serif } from "next/font/google";
import Link from "next/link";

const roboto = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function Footer() {
  const year = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
  });

  return (
    <footer className="bg-gray-800 py-4">
      <div
        className={`container mx-auto text-center ${roboto.className} text-xs font-medium text-slate-300`}
      >
        &copy; {year} Design with&nbsp;
        <Link
          href="https://github.com/yubliwarokkaid/api-alkitab-nusantara"
          className="hover:text-red-600"
          target="_blank"
        >
          <span className="text-red-600">❤</span>
          &nbsp;by Yubli Audy Warokka™ | Tuhan Yesus Memberkati
        </Link>
      </div>
    </footer>
  );
}
