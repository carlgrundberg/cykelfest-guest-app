import React, { useState } from "react";
import Head from "next/head";
import { Layout, Button, Spin, Space } from "antd";
import { IntlProvider } from "react-intl";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";

const { Header, Content, Footer } = Layout;

const AuthenticatedLayout = ({ children }) => {
  const { user, mutateUser } = useUser();
  const [loading, setLoading] = useState();

  return (
    <IntlProvider locale="sv-SE">
      <Head>
        <title>Vittsjö cykelfest</title>
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
      </Head>

      <Layout>
        <Header>
          <h1 style={{ color: "white", textAlign: "center", marginBottom: 0 }}>
            Vittsjö Cykelfest
          </h1>
        </Header>
        <Content>{user ? children : <Spin />}</Content>
        <Footer>
          <Space>
            <a href="mailto:info@cykelfest.com">info@cykelfest.com</a>
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
          </Space>
        </Footer>
      </Layout>
    </IntlProvider>
  );
};

export default AuthenticatedLayout;
