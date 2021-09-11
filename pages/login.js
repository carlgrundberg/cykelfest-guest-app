import { useState } from "react";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";
import Layout from "../components/Layout";
import { Form, Input, Button, Radio } from "antd";

const Login = () => {
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

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
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Mobilnummer"
          name="phone"
          rules={[{ required: true, message: "Mobilnummer saknas" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Logga in
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Login;
