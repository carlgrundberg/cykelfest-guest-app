import useUser from "../lib/useUser";
import Layout from "../components/Layout";
import { Card, Col, Row } from "antd";

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <Layout>
      <h1>Hej {user.name}!</h1>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Förrätt" style={{ marginBottom: 16 }} extra={"16:00"}>
            {user.name === user.host1 ? (
              <p>Ni bjuder på förrätt på {user.address}.</p>
            ) : (
              <p>
                Ni äter förrätt hos {user.host1} på {user.address1}.
              </p>
            )}
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Huvudrätt" style={{ marginBottom: 16 }} extra={"17:45"}>
            {user.name === user.host2 ? (
              <p>Ni bjuder på huvudrätt på {user.address}.</p>
            ) : (
              <p>
                Ni äter huvudrätt hos {user.host2} på {user.address2}.
              </p>
            )}
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Efterrätt" extra={"20:00"}>
            {user.name === user.host3 ? (
              <p>Ni bjuder på efterrätt på {user.address}.</p>
            ) : (
              <p>
                Ni äter efterrätt hos {user.host3} på {user.address3}.
              </p>
            )}
          </Card>
        </Col>
      </Row>
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
