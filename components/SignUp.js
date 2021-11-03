import { Form, Input, Button, Row, Col } from "antd";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + `=` + encodeURIComponent(data[key]))
    .join(`&`);
}

const SignUp = () => {
  const formName = `signup`;

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
    console.log(`form submitted successfully`);
  };

  const showError = (error) => {
    // TODO: Show an error message to the user
    console.log(`There was an error submitting the form`);
    console.log(error);
  };

  return (
    <Row justify="space-around">
      <Col xs={22} sm={12} md={12} lg={12}>
        <h1>Anmäl intresse</h1>
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

        <Form layout="vertical" name="signup" netlify="true">
          <Form.Item label="Namn">
            <Input autoComplete="name" />
          </Form.Item>
          <Form.Item label="E-Post">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Telefon">
            <Input type="tel" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Skicka
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;
