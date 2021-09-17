import { useState } from "react";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";
import { Form, Input, Button, Radio, Alert } from "antd";

const Login = () => {
  const { mutateUser } = useUser();

  const [errorMsg, setErrorMsg] = useState("");

  const onFinish = async (values) => {
    try {
      mutateUser(
        await fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
      );
    } catch (error) {
      setErrorMsg(error.data.error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h2>Hej!</h2>
      <p>
        Fyll i ditt mobilnummer för att logga in och se var du ska cykla under
        kvällen.
      </p>
      {errorMsg && <Alert message={errorMsg} type="error" showIcon />}
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Mobilnummer"
          name="phone"
          rules={[
            { required: true, message: "Mobilnummer saknas" },
            { len: 10, message: "Fyll i minst 10 siffror" },
          ]}
        >
          <Input type="tel" autoComplete="tel-national" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Logga in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
