import { Button } from "antd";

const TelLink = ({ number, children, ...rest }) => (
  <Button type="link" href={`tel:${number}`} {...rest}>
    {children}
  </Button>
);

export default TelLink;
