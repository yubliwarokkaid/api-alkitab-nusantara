import { Roboto_Serif } from "next/font/google";
import Link from "next/link";
import { BiSolidFileJson } from "react-icons/bi";

const roboto = Roboto_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-sky-500 via-rose-500 to-red-500 py-6 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="flex items-center font-mono text-3xl font-extrabold">
          <BiSolidFileJson className="mr-2" />
          {`{Alkitab Nusanatar API}`}
        </h1>
        <nav className={`space-x-6 ${roboto.className}`}>
          <Link href="#endpoints" className="text-white hover:underline">
            Demo
          </Link>
          <Link
            href="https://github.com/yubliwarokkaid/api-alkitab-nusantara"
            className="text-white hover:underline"
            target="_blank"
          >
            Github
          </Link>
        </nav>
      </div>
    </header>
  );
}
