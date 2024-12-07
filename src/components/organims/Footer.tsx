import Link from "next/link";

export default function Footer() {
  const year = new Date().toLocaleDateString("id-ID", {
    year: "numeric",
  });

  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center font-poppins text-sm text-slate-200">
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
