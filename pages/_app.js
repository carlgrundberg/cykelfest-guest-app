import { SWRConfig } from "swr";
import Script from "next/script";
import fetch from "../lib/fetchJson";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://polyfill.io/v3/polyfill.min.js?features=Intl.getCanonicalLocales,Intl.Locale,Intl.PluralRules,Intl.RelativeTimeFormat,Intl.PluralRules.~locale.sv,Intl.RelativeTimeFormat.~locale.sv"
        strategy="beforeInteractive"
      />
      <SWRConfig
        value={{
          fetcher: fetch,
          onError: (err) => {
            console.error(err);
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;
