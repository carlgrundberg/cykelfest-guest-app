import useUser from "../lib/useUser";
import Layout from "./PublicLayout";
import Login from "./Login";
import { Card, Col, Row } from "antd";
import { FormattedRelativeTime } from "react-intl";
import selectUnit from "../lib/selectUnit";
import { useState, useEffect } from "react";
import timestamps from "../lib/timestamps";
import HostCard from "./HostCard";
import MapLink from "./MapLink";
import TelLink from "./TelLink";

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
          <p>
            Välkommen på cykelfest den 13 september 2025.
            <br />
            Här ser du hela programmet och information om var ni ska äta kommer
            dyka upp eftersom.
          </p>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card
                title="Samling"
                extra={"Kl 15:30"}
                actions={[<MapLink address={"Medborgarhuset,Vittsjö"} />]}
              >
                Samling på Medborgarhusets parkering, där vi hälsar välkommen.
              </Card>
            </Col>
            <Col span={24}>
              <HostCard
                host={user.host1}
                dish="förrätt"
                now={now}
                timestamp={timestamps[0]}
                extra={"Äts kl 16:00"}
              />
            </Col>
            <Col span={24}>
              <HostCard
                host={user.host2}
                dish="huvudrätt"
                now={now}
                timestamp={timestamps[1]}
                extra={"Äts kl 17:45"}
              />
            </Col>
            <Col span={24}>
              <HostCard
                host={user.host3}
                dish="efterrätt"
                now={now}
                timestamp={timestamps[2]}
                extra={"Äts kl 20:00"}
              />
            </Col>
            <Col span={24}>
              <Card
                title="Efterfest"
                extra={"Kl 22:00 - 01:00"}
                actions={[<MapLink address={"Hårsjövägen 9, Vittsjö"} />]}
              // cover={<img src="/sticksparet.jpg" />}
              >

                Efterfest i Medborgarhuset. Bandet “Något för alla” spelar, och
                det kommer att finnas öl, vin, läsk och vatten till självkostnadspris.
              </Card>
            </Col>
            <Col span={24}>
              <p>
                Vid frågor eller funderingar så skicka ett mail till <a href="mailto:info@cykelfest.com">info@cykelfest.com</a>.
                <br />
                Vid problem under cykelfesten så ring någon i festkommitén.
              </p>
              <TelLink number="0701443670" block>
                Carl Grundberg
              </TelLink>
              <TelLink number="0761997557" block>
                Gustav Gullstrand
              </TelLink>
              <TelLink number="0735149279" block>
                Maria Vilhelmsson
              </TelLink>
              <TelLink number="0761194113" block>
                Ingela Lundqvist
              </TelLink>
              <TelLink number="0730299882" block>
                Niclas Lundqvist
              </TelLink>
            </Col>
          </Row>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
