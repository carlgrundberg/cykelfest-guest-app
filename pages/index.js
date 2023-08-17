import AuthenticatedLayout from "../components/AuthenticatedLayout";
import EventActive from "../components/EventActive";
// import Invitation from "../components/Invitation";
// import Layout from "../components/Layout";

export default function Home() {
  return (
    // <Layout>
    //   <Invitation />
    // </Layout>
    <AuthenticatedLayout>
      <EventActive />
    </AuthenticatedLayout>
  );
}
