import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next App</title>  
      </Head>
      <main className="container">{children}</main>
    </>
  );
}
