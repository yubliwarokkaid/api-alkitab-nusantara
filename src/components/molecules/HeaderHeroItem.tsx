import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { LuCopy } from "react-icons/lu";
import { MdCheck, MdContentCopy } from "react-icons/md";

export default function HeaderHeroItem() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("GET /api/v1/passage/Kej/1?version=tb");
    setCopied(true);

    // Reset status setelah beberapa detik
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-poppins container mx-auto bg-white p-10">
      <h2 className="mb-4 text-2xl font-semibold text-slate-700">
        Dokumentasi API
      </h2>
      <p className="mb-6 text-justify text-slate-600">
        REST API Alkitab Nusantara adalah sebuah layanan yang dirancang untuk
        memberikan akses cepat dan mudah ke teks Alkitab dalam berbagai versi
        terjemahan. Dengan API ini, pengembang dapat mengintegrasikan teks
        Alkitab ke dalam aplikasi atau situs web mereka, sehingga memungkinkan
        pengguna untuk membaca, mencari, atau menampilkan ayat dan pasal
        tertentu sesuai kebutuhan. API ini menggunakan format data JSON, yang
        mempermudah pengolahan dan penyajian data Alkitab dalam aplikasi modern.
      </p>
      <p className="mb-6 text-justify text-slate-600">
        Salah satu fitur utama REST API Alkitab Nusantara adalah
        fleksibilitasnya dalam mendukung banyak versi terjemahan Alkitab,
        seperti Terjemahan Baru (TB), King James Version (KJV), dan lainnya.
        Pengguna dapat mengakses teks berdasarkan buku, pasal, dan versi yang
        diinginkan.
      </p>
      <p className="mb-6 text-justify text-slate-600">
        REST API Alkitab Nusantara juga sangat bermanfaat untuk pengembang
        aplikasi rohani, seperti pembaca Alkitab digital, renungan harian, atau
        alat studi teologi. API ini memungkinkan aplikasi untuk menyajikan data
        Alkitab yang relevan, seperti teks lengkap pasal, ayat tertentu, atau
        hasil pencarian terkait tema spesifik. Dengan respons yang cepat dan
        format data yang mudah diolah, API ini menjadi alat yang sangat membantu
        dalam mengembangkan solusi digital berbasis Alkitab.
      </p>
      <p className="mb-6 text-justify text-slate-600">
        Kesederhanaan dan fleksibilitas REST API Alkitab Nusantara menjadikannya
        pilihan ideal untuk berbagai kasus penggunaan. Dari aplikasi mobile
        hingga situs web gereja, API ini memberikan solusi yang handal untuk
        menyediakan akses ke Firman Tuhan dengan cara yang modern dan
        terstruktur. Baik Anda seorang pengembang yang membuat alat belajar
        Alkitab, atau organisasi yang ingin menyediakan akses digital ke teks
        suci, REST API Alkitab Nusantara menawarkan kemampuan yang dapat
        disesuaikan dengan kebutuhan Anda.
      </p>
    </div>
  );
}
