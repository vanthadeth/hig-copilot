import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>HIG Copilot</title>
        <meta name="description" content="Welcome to HIG Copilot" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div className="min-h-screen w-screen bg-gray-800" />
    </>
  );
}
