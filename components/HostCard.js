import { Alert, Button, Card, Space, Spin } from "antd";
import { FormattedRelativeTime } from "react-intl";
import selectUnit from "../lib/selectUnit";
import useSWR from "swr";
import useUser from "../lib/useUser";
import { useEffect, useState } from "react";

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
          <div>
            Ni bjuder <b>{user.guests * 2} personer</b> (inklusive er själva) på
            en {dish === "förrätt" && <>välkomstdrink och </>} {dish}.
          </div>
          {host.note && (
            <Alert
              message="Allergier och specialkost"
              description={host.note}
              type="info"
              showIcon
            />
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
