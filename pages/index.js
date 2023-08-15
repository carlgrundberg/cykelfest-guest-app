import AssignedDish from "../components/AssignedDish";
import AuthenticatedLayout from "../components/AuthenticatedLayout";
// import EventActive from "../components/EventActive";
// import Invitation from "../components/Invitation";
// import Layout from "../components/Layout";

export default function Home() {
  return (
    // <Layout>
    //   <Invitation />
    // </Layout>
    <AuthenticatedLayout>
      <AssignedDish />
      {/* <EventActive /> */}
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
            margin-top: 64px;
            margin-bottom: 46px;
            padding: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
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
