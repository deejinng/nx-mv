import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Movie App</title>
        <meta name="description" content="Movie App with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-red-600 font-[500] underline text-5xl">Hello world!</h1>

    </>
  );
}