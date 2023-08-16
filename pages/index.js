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
      <style jsx global>
        {`
          .ant-layout {
            min-height: 100vh;
          }
          .ant-layout-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
          }
          .ant-layout-content {
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            max-width: 600px;
            margin: 64px auto 46px;
          }
          .ant-layout-footer {
            text-align: center;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0.5em;
            background: #001529;
          }
          .ant-card-head-title {
            text-transform: capitalize;
          }
          .ant-card-body {
            text-align: center;
          }
        `}
      </style>
    </AuthenticatedLayout>
  );
}
