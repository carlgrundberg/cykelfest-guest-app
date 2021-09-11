import useUser from "../lib/useUser";
import Layout from "../components/Layout";

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return <Layout>Hej {user.name}!</Layout>;
}

// export async function getStaticProps(context) {
//   const data = await getData();

//   return {
//     props: {
//       data,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every second
//     revalidate: 1, // In seconds
//   };
// }
