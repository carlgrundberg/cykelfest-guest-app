import { Alert, Button, Card, Spin } from "antd";
import { FormattedRelativeTime } from "react-intl";
import selectUnit from "../lib/selectUnit";

const HostCard = ({ user, host, dish, now, timestamp, ...props }) => {
  const isSelf = user.name === host?.name;

  let actions = [];

  let content;

  if (host) {
    actions = [
      <Button
        type="link"
        href={`https://www.google.com/maps/dir/?api=1&destination=${host.address}&travelmode=bicycling`}
        target="_blank"
      >
        Hitta dit
      </Button>,
    ];
    if (host.phone1 && host.phone1 != "-") {
      actions.push(
        <Button type="link" href={`tel:${host.phone1}`}>
          Tel 1
        </Button>
      );
    }
    if (host.phone2 && host.phone2 != "-") {
      actions.push(
        <Button type="link" href={`tel:${host.phone2}`}>
          Tel 2
        </Button>
      );
    }

    if (isSelf) {
      content = (
        <>
          <p>
            Ni bjuder <b>{user.guests * 2} personer</b> (inklusive er själva) på
            en <b>{dish}</b>.
          </p>
          {user.note && (
            <Alert
              message="Obs! Några av era gäster har allergier."
              description={user.note}
              type="info"
              showIcon
            />
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
        Var ni ska äta {dish} visas{" "}
        <FormattedRelativeTime {...selectUnit(timestamp)} />.
      </>
    );
  }

  return (
    <Card
      title={dish}
      style={{ marginBottom: 16 }}
      actions={actions}
      {...props}
    >
      {content}
    </Card>
  );
};

export default HostCard;
