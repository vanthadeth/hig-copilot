import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="description" content="HIG Copilot - A mobile-first PWA" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <body className="bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
