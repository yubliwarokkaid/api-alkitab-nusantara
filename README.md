## Dokumentasi API

REST API Alkitab Nusantara adalah sebuah layanan yang dirancang untuk memberikan akses cepat dan mudah ke teks Alkitab dalam berbagai versi terjemahan. Dengan API ini, pengembang dapat mengintegrasikan teks Alkitab ke dalam aplikasi atau situs web mereka, sehingga memungkinkan pengguna untuk membaca, mencari, atau menampilkan ayat dan pasal tertentu sesuai kebutuhan. API ini menggunakan format data JSON, yang mempermudah pengolahan dan penyajian data Alkitab dalam aplikasi modern.

Sumber data REST API Alkitab Nusantara berasal dari [https://labs.sabda.org/API](SABDA Labs), sebuah platform penelitian digital yang menyediakan sumber daya Alkitab dan literatur Kristen untuk kebutuhan pengembang dan pengguna teknologi. Dengan API ini, Anda dapat mengakses teks Alkitab berdasarkan buku, pasal, ayat, dan versi terjemahan, termasuk Terjemahan Baru (TB), King James Version (KJV), dan lainnya.

```bash
$ https://github.com/yubliwarokkaid/api-alkitab-nusantara.git
```

Install dependencies
```bash
npm install
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
