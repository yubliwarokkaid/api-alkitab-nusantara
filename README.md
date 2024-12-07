# Dokumentasi API

REST API Alkitab Nusantara adalah sebuah layanan yang dirancang untuk memberikan akses cepat dan mudah ke teks Alkitab dalam berbagai versi terjemahan. Dengan API ini, pengembang dapat mengintegrasikan teks Alkitab ke dalam aplikasi atau situs web mereka, sehingga memungkinkan pengguna untuk membaca, mencari, atau menampilkan ayat dan pasal tertentu sesuai kebutuhan. API ini menggunakan format data JSON, yang mempermudah pengolahan dan penyajian data Alkitab dalam aplikasi modern.

Sumber data REST API Alkitab Nusantara berasal dari [SABDA Labs](https://labs.sabda.org/API), sebuah platform penelitian digital yang menyediakan sumber daya Alkitab dan literatur Kristen untuk kebutuhan pengembang dan pengguna teknologi. Dengan API ini, Anda dapat mengakses teks Alkitab berdasarkan buku, pasal, ayat, dan versi terjemahan, termasuk Terjemahan Baru (TB), King James Version (KJV), dan lainnya.

| Method | Base URL                                 | Endpoint                   | Description                               |
|--------|------------------------------------------|----------------------------|-------------------------------------------|
| GET    | `http://localhost:3000/api/v1/passage`   | `/Kej/1?version=tb`        | Mendapatkan ayat dari kitab Kejadian, bab 1 dengan versi TB |
| POST   | `http://localhost:3000/api/v1/passage`   | `/create`                  | Membuat entri baru dalam API              |
| PUT    | `http://localhost:3000/api/v1/passage`   | `/update/Kej/1`            | Memperbarui data untuk ayat Kejadian 1    |
| DELETE | `http://localhost:3000/api/v1/passage`   | `/delete/Kej/1`            | Menghapus data untuk ayat Kejadian 1      |

### Setup Installation
```bash
$ https://github.com/yubliwarokkaid/api-alkitab-nusantara.git
```

### Install dependencies
```bash
npm install
```

### Running Development
```bash
npm run dev
```
