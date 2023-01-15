import Layout from "../components/Layout";
import SignUp from "../components/SignUp";
import { Row, Col } from "antd";

export default function Home() {
  return (
    <Layout>
      <h2>Lördagen den 16 september 2023 är det åter dags för cykelfest!</h2>
      <p>
        Vi kommer senare i vår skicka ut inbjudan men skriv gärna upp datumet
        redan nu så att ni inte bokar in något annat.
      </p>
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
