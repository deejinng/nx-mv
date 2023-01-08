import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next MV App...</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-[600px] bg-red-600">{children}</main>
    </>
  );
}
