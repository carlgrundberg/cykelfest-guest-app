import useUser from "../lib/useUser";
import Layout from "../components/Layout";
import Login from "../components/Login";
import { Card, Col, Row } from "antd";
import { FormattedRelativeTime } from "react-intl";
import selectUnit from "../lib/selectUnit";
import { useState, useEffect } from "react";

const timestamps = [1632576600000, 1632582000000, 1632589200000];

const hideUntil = (now, date, before, after) => {
  return now < date ? (
    <>
      {before}
      <FormattedRelativeTime {...selectUnit(date)} />.
    </>
  ) : (
    after
  );
};

export default function Home() {
  const { user } = useUser();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setNow(new Date());
    }, 1000);
    return () => clearTimeout(timer);
  });

  if (!user) {
    return null;
  }

  return (
    <Layout>
      {user.isLoggedIn ? (
        <>
          <h1>Hej {user.name}!</h1>
          <Row gutter={16}>
            <Col span={24}>
              <Card
                title="Förrätt"
                style={{ marginBottom: 16 }}
                extra={"16:00"}
              >
                {user.name === user.host1 ? (
                  <>Ni bjuder på förrätt på {user.address}.</>
                ) : (
                  hideUntil(
                    now,
                    timestamps[0],
                    <>Var ni ska äta förätt visas </>,
                    <>
                      Ni äter förrätt hos {user.host1} på {user.address1}.
                    </>
                  )
                )}
              </Card>
            </Col>
            <Col span={24}>
              <Card
                title="Huvudrätt"
                style={{ marginBottom: 16 }}
                extra={"17:45"}
              >
                {user.name === user.host2 ? (
                  <>Ni bjuder på huvudrätt på {user.address}.</>
                ) : (
                  hideUntil(
                    now,
                    timestamps[1],
                    <>Var ni ska äta huvudrätt visas </>,
                    <>
                      Ni äter huvudrätt hos {user.host2} på {user.address2}.
                    </>
                  )
                )}
              </Card>
            </Col>
            <Col span={24}>
              <Card title="Efterrätt" extra={"20:00"}>
                {user.name === user.host3 ? (
                  <>Ni bjuder på efterrätt på {user.address}.</>
                ) : (
                  hideUntil(
                    now,
                    timestamps[2],
                    <>Var ni ska äta efterrätt visas </>,
                    <>
                      Ni äter efterrätt hos {user.host3} på {user.address3}.
                    </>
                  )
                )}
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <Login />
      )}
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   const data = await getData();

//   return {
//     props: {
//       data,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every second
//     revalidate: 1, // In seconds
//   };
// }
