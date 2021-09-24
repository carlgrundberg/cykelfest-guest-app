import { Card } from "antd";
import { FormattedRelativeTime } from "react-intl";
import selectUnit from "../lib/selectUnit";

const HostCard = ({ user, host, dish, now, timestamp, ...props }) => {
  const isSelf = user.name === host?.name;

  let actions = [];

  let content;

  if (isSelf) {
    content = (
      <>
        Ni bjuder på {dish} på {user.address}.
      </>
    );
  } else {
    if (host) {
      content = (
        <>
          Ni äter {dish} hos {host.name} på {host.address}.
        </>
      );
      actions = [
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${host.address}&travelmode=bicycling`}
          target="_blank"
        >
          Hitta dit
        </a>,
      ];
      if (host.phone1) {
        actions.push(<a href={`tel:${host.phone1}`}>Tel 1</a>);
      }
      if (host.phone2) {
        actions.push(<a href={`tel:${host.phone2}`}>Tel 2</a>);
      }
    } else {
      content = (
        <>
          Var ni ska äta förätt visas{" "}
          <FormattedRelativeTime {...selectUnit(timestamp)} />.
        </>
      );
    }
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
