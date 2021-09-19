import React, { useState } from "react";
import Head from "next/head";
import { Layout, Button, Spin } from "antd";
import { IntlProvider } from "react-intl";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children, isLogin }) => {
  const { user, mutateUser } = useUser();
  const [loading, setLoading] = useState();

  return (
    <IntlProvider locale="sv-SE">
      <Head>
        <title>Vittsjö cykelfest 2021</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.RelativeTimeFormat,Intl.RelativeTimeFormat.~locale.sv"></script>
      </Head>

      <Layout>
        <Content>{user ? children : <Spin />}</Content>
        <Header>
          <h1 style={{ color: "white", textAlign: "center", marginBottom: 0 }}>
            Vittsjö Cykelfest 2021
          </h1>
        </Header>
        <Footer>
          {user?.isLoggedIn && (
            <Button
              onClick={async (e) => {
                setLoading(true);
                e.preventDefault();
                await mutateUser(
                  await fetchJson("/api/logout", { method: "POST" }),
                  false
                );
                setLoading(false);
              }}
              loading={loading}
            >
              Logga ut
            </Button>
          )}
        </Footer>
      </Layout>
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
          }
          .ant-layout-content {
            margin-top: 64px;
            margin-bottom: 80px;
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .ant-layout-footer {
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
          }
        `}
      </style>
    </IntlProvider>
  );
};

export default AppLayout;
