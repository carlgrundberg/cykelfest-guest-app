import Layout from "../components/Layout";
import SignUp from "../components/SignUp";
import { Row, Col } from "antd";

export default function Home() {
  return (
    <Layout>
      <h2>Välkommen!</h2>
      <p>
        Vittsjö cykelfest är till för alla som bor i Vittsjö. Festen anordnas
        varannat år på hösten, och går ut på att man som par får i uppgift att
        laga en rätt (förrätt, huvudrätt eller efterrätt). Vilka som äter rätten
        ihop slumpas fram och ni kommer både få besök och besöka okända och
        kända Vittsjöbor.
      </p>
      <SignUp />
    </Layout>
  );
}
