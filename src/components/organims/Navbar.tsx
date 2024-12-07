import Link from "next/link";
import { TbCodeDots } from "react-icons/tb";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-sky-500 via-rose-500 to-red-500 py-6 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4">
        <h1 className="flex items-center text-3xl font-extrabold">
          <TbCodeDots className="mr-2" />
          Alkitab Nusanatar API
        </h1>
        <nav className="space-x-6">
          <Link href="#endpoints" className="text-white hover:underline">
            Documentation
          </Link>
          <a href="#examples" className="text-white hover:underline">
            Examples
          </a>
        </nav>
      </div>
    </header>
  );
}
