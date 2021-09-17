import React from "react";
import Head from "next/head";
import { Layout, Button, Spin } from "antd";
import { IntlProvider } from "react-intl";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children, isLogin }) => {
  const { user, mutateUser } = useUser();

  return (
    <IntlProvider locale="sv-SE">
      <Head>
        <title>🚲 Vittsjö cykelfest 2021</title>
      </Head>

      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <h1 style={{ color: "white", textAlign: "center", marginBottom: 0 }}>
            🚲 Vittsjö Cykelfest 2021 🚲
          </h1>
        </Header>
        <Content
          style={{
            padding: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {user ? children : <Spin />}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {user?.isLoggedIn && (
            <Button
              onClick={async (e) => {
                e.preventDefault();
                mutateUser(
                  await fetchJson("/api/logout", { method: "POST" }),
                  false
                );
              }}
            >
              Logga ut
            </Button>
          )}
        </Footer>
      </Layout>
    </IntlProvider>
  );
};

export default AppLayout;
