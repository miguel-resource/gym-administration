import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head
        title="Next.js + TypeScript Example"
      />
      <body>
        <Main />
        <NextScript />

        <Script
          src="/public/assets/plugins/chartjs.min.js"
          // strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
