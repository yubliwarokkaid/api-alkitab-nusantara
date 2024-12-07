# Dokumentasi API

REST API Alkitab Nusantara adalah sebuah layanan yang dirancang untuk memberikan akses cepat dan mudah ke teks Alkitab dalam berbagai versi terjemahan. Dengan API ini, pengembang dapat mengintegrasikan teks Alkitab ke dalam aplikasi atau situs web mereka, sehingga memungkinkan pengguna untuk membaca, mencari, atau menampilkan ayat dan pasal tertentu sesuai kebutuhan. API ini menggunakan format data JSON, yang mempermudah pengolahan dan penyajian data Alkitab dalam aplikasi modern.

Sumber data REST API Alkitab Nusantara berasal dari [SABDA Labs](https://labs.sabda.org/API), sebuah platform penelitian digital yang menyediakan sumber daya Alkitab dan literatur Kristen untuk kebutuhan pengembang dan pengguna teknologi. Dengan API ini, Anda dapat mengakses teks Alkitab berdasarkan buku, pasal, ayat, dan versi terjemahan, termasuk Terjemahan Baru (TB), King James Version (KJV), dan lainnya.

### Base URL
[https://api-alkitab-nusantara.vercel.app](https://api-alkitab-nusantara.vercel.app)

### API Endpoints

| METHOD | ENDPOINT                   | DESCRIPTION                                                                 |
|--------|----------------------------|-----------------------------------------------------------------------------|
| GET    | `/api/v1/book/list`         | Pada Endpoint ini mengambil semua isi Kitab dari (Kejadian - Wahyu).        |
| GET    | `/api/v1/book/list/old`     | Pada Endpoint ini mengambil semua isi Kitab Perjanjian Lama dari (Kejadian - Maleakhi). |
| GET    | `/api/v1/book/list/new`     | Pada Endpoint ini mengambil semua isi Kitab Perjanjian Baru dari (Matius - Wahyu). |

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
