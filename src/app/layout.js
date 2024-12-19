import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <meta
          name="keywords"
          content="영화, 영화제, 프로덕션, 한예종, film, movie"
        />
        <meta name="description" content="안녕하세요. 탄뎀프로젝트입니다." />

        {/* Favicon 링크 */}
        {/* <link rel="shortcut icon" href="asset/pavicon.svg" /> */}

        {/* Open Graph meta tags */}
        <meta property="og:title" content="탄뎀프로젝트" />
        {/* <meta property="og:image" content="img/noise.png" /> */}
        <meta
          property="og:description"
          content="안녕하세요. 탄뎀프로젝트입니다."
        />
      </Head>

      <body>
        <header>
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="로고"
              layout="intrinsic"
              width={200}
              height={50}
            />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
