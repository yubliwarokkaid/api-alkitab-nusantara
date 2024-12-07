import Footer from "@/components/organims/Footer";
import Navbar from "@/components/organims/Navbar";
import Head from "next/head";

export interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { title, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Alkitab Nusantara, Alkitab kebutuhan untuk umat Kristiani Di Indonesia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <>{children}</>
        <Footer />
      </main>
    </>
  );
}
