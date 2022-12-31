import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Movie App</title>
        <meta name="description" content="Movie App with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <h1 className="text-3xl font-700 underline">Hello world!</h1>
      </main>
    </>
  );
}
