import useUser from "../lib/useUser";
import Layout from "./PublicLayout";
import Login from "./Login";
import { Card, Col, Row } from "antd";
import { FormattedRelativeTime } from "react-intl";
import selectUnit from "../lib/selectUnit";
import { useState, useEffect } from "react";
import timestamps from "../lib/timestamps";
import HostCard from "./HostCard";

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

const getTimestampIndex = (now) => {
  let i = 0;
  while (timestamps[i] < now) i++;
  return i;
};

export default function EventActive() {
  const { user, mutateUser } = useUser();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(async () => {
      const newNow = new Date();
      if (getTimestampIndex(now) != getTimestampIndex(newNow)) {
        await mutateUser();
      }
      setNow(newNow);
    }, 1000);
    return () => clearTimeout(timer);
  });

  if (!user) {
    return null;
  }

  return (
    <>
      {user.isLoggedIn ? (
        <>
          <h1>Hej {user.name}!</h1>
          <Row gutter={16}>
            <Col span={24}>
              <HostCard
                user={user}
                host={user.host1}
                dish="förrätt"
                now={now}
                timestamp={timestamps[0]}
                extra={"Kl 16:00"}
              />
            </Col>
            <Col span={24}>
              <HostCard
                user={user}
                host={user.host2}
                dish="huvudrätt"
                now={now}
                timestamp={timestamps[1]}
                extra={"Kl 17:45"}
              />
            </Col>
            <Col span={24}>
              <HostCard
                user={user}
                host={user.host3}
                dish="efterrätt"
                now={now}
                timestamp={timestamps[2]}
                extra={"Kl 20:00"}
              />
            </Col>
          </Row>
        </>
      ) : (
        <Login />
      )}
    </>
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
