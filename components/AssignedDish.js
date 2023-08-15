import useUser from "../lib/useUser";
import Layout from "./PublicLayout";
import Login from "./Login";
import { Alert, Button, Card, Col, Row, Space } from "antd";
import { FormattedRelativeTime } from "react-intl";
import selectUnit from "../lib/selectUnit";
import { useState, useEffect } from "react";
import timestamps from "../lib/timestamps";
import HostCard from "./HostCard";

export default function AssignedDish() {
  const { user, mutateUser } = useUser();

  if (!user) {
    return null;
  }

  return (
    <>
      {user.isLoggedIn ? (
        <>
          <h1>Hej {user.name}!</h1>
          {user.dish === "-" ? (
            <p>Ni har inte fått någon rätt ännu.</p>
          ) : (
            <Space direction="vertical">
              <p>
                Ni ska laga en <b>{user.dish}</b> för upp till 8 personer.
              </p>
              <Alert
                message="Obs! Några av era gäster har allergier."
                description="Gluten"
                type="info"
                showIcon
              />
              <p>
                Bekräfta att du tagit del av informationen genom att klicka på
                knappen.
              </p>
              <Button type="primary" onClick={() => mutateUser()}>
                Jag vet vilken rätt vi ska laga
              </Button>
            </Space>
          )}
        </>
      ) : (
        <Login />
      )}
    </>
  );
}
