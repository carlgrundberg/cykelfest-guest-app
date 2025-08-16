import AuthenticatedLayout from "../components/AuthenticatedLayout";
import EventActive from "../components/EventActive";
// import Invitation from "../components/Invitation";
// import Layout from "../components/PublicLayout";
// import SaveTheDate from "../components/SaveTheDate";
// import SignUp from "../components/SignUp";

export default function Home() {
  return (
    // <Layout>
    // {/* <Invitation /> */ }
    // {/* <SignUp /> */ }
    // {/* <SaveTheDate /> */ }
    // </Layout>
    <AuthenticatedLayout>
      <EventActive />
    </AuthenticatedLayout>
  );
}
