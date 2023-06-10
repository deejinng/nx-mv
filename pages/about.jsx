import Head from "next/head";
import Layout from "/components/Layout";


export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Movie App with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-red-600 font-[500] underline text-5xl">Hello About!</h1>

    </Layout>
  );
}