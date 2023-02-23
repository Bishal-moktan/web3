import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.ico"
      ></link>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
