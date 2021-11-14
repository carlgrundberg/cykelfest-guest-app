import { Form, Input, Button, Row, Col, message } from "antd";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
}

const SignUp = () => {
  const formName = `signup`;
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    if (values[`bot-field`] === undefined) {
      delete values[`bot-field`];
    }

    fetch(`/`, {
      method: `POST`,
      headers: { "Content-Type": `application/x-www-form-urlencoded` },
      body: encode({
        "form-name": formName,
        ...values,
      }),
    })
      .then(() => showSuccess())
      .catch((error) => showError(error));
  };

  const showSuccess = () => {
    // TODO: Show a success message or navigate to a success page.
    message.success(`Din intresseanmälan har registrerats!`);
    form.resetFields();
  };

  const showError = (error) => {
    // TODO: Show an error message to the user
    message.error("Något gick fel, försök igen senare!");
    console.log(error);
  };

  return (
    <>
      <h2>Anmäl intresse</h2>
      <p>
        Fyll i formuläret nedan om du är intresserad av att vara med på nästa
        cykelfest hösten 2023, så kontaktar vi dig när det är dags.
      </p>
      <form
        name={formName}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="phone" />
      </form>

      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        style={{ width: "100%" }}
      >
        <Form.Item
          label="Don't fill this out"
          className={`hidden`}
          style={{ display: `none` }}
          name="bot-field"
        >
          <Input type="hidden" />
        </Form.Item>

        <Form.Item label="Namn" name="name">
          <Input autoComplete="name" />
        </Form.Item>
        <Form.Item label="E-Post" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Telefon" name="phone">
          <Input type="tel" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Skicka
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;
