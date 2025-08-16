import { Alert, Button, Card, Space, Spin } from "antd";
import { FormattedRelativeTime, FormattedTime } from "react-intl";
import selectUnit from "../lib/selectUnit";
import useSWR from "swr";
import useUser from "../lib/useUser";
import { useEffect, useState } from "react";
import MapLink from "./MapLink";
import TelLink from "./TelLink";

const HostCard = ({ host, dish, now, timestamp, ...props }) => {
  const { user, mutateUser } = useUser();
  const [confirming, setConfirming] = useState(false);
  const { data } = useSWR(confirming && "/api/confirmDish");
  const isSelf = user.name === host?.name;

  let actions = [];

  let content;

  const onConfirmDish = () => {
    setConfirming(true);
  };

  useEffect(() => {
    if (data?.ok) {
      mutateUser();
    }
  }, [data]);

  const { unit, value } = selectUnit(timestamp);

  if (host) {
    actions = [<MapLink address={host.address} />];
    if (host.phone1 && host.phone1 != "-") {
      actions.push(<TelLink number={host.phone1}>Tel 1</TelLink>);
    }
    if (host.phone2 && host.phone2 != "-") {
      actions.push(<TelLink number={host.phone2}>Tel 2</TelLink>);
    }

    if (isSelf) {
      content = (
        <>
          <div>
            Ni bjuder <b>{user.guests * 2} personer</b> (inklusive er själva) på
            en {dish === "förrätt" && <>välkomstdrink och </>} {dish}.
          </div>
          {host.note ? (
            <Alert
              message="Allergier och specialkost"
              description={host.note}
              type="info"
              showIcon
            />
          ) : (
            <em>Inga allergier.</em>
          )}
          {host.confirmed !== "Ja" && (
            <Button
              block
              type="primary"
              onClick={onConfirmDish}
              loading={confirming}
            >
              Jag har tagit del av informationen
            </Button>
          )}
        </>
      );
    } else {
      content = (
        <>
          Ni äter {dish} hos {host.name} på {host.address}.
        </>
      );
    }
  } else if (host === undefined) {
    content = <Spin />;
  } else {
    content = (
      <>
        Var ni ska äta {dish} visas {" "}
        {unit === "minute" || unit === 'second' ? (
          <FormattedRelativeTime unit={unit} value={value} />
        ) : (
          <>kl <FormattedTime value={timestamp} /></>
        )}
      </>
    );
  }

  return (
    <Card title={dish} actions={actions} {...props}>
      {content}
    </Card>
  );
};

export default HostCard;
