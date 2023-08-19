import { Button } from "antd";

const MapLink = ({ address }) => (
  <Button
    type="link"
    href={`https://www.google.com/maps/dir/?api=1&destination=${address},Vittsjö&travelmode=bicycling`}
    target="_blank"
  >
    Hitta dit
  </Button>
);

export default MapLink;
