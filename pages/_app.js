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
      <style jsx global>
        {`
          .ant-layout {
            min-height: 100vh;
          }
          .ant-layout-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
          }
          .ant-layout-content {
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 600px;
            margin: 64px auto 46px;
          }
          .ant-layout-footer {
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0.5em;
            background: #001529;
            color: white;
          }
          .ant-card-head-title {
            text-transform: capitalize;
          }
          .ant-card-body {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 1em;
          }

          .ant-card-body::before,
          .ant-card-body::after {
            display: none;
          }

          p {
            text-align: left;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
