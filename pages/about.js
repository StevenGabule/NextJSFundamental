// import Link from "next/link";

// export default function About() {
//   return (
//     <div>
//       <Link href="/index">
//         <a>Home</a>
//       </Link>{" "}
//       &nbsp;
//       <Link href="/about">
//         <a>About Page</a>
//       </Link>{" "}
//       &nbsp;
//       <Link href="/admin/index">
//         <a>Dashboard</a>
//       </Link>{" "}
//       &nbsp;
//       <p>This is about the page</p>
//     </div>
//   );
// }


// import Layout from '../components/MyLayout'

// export default function About() {
//     return (
//         <Layout>
//             <p>This is a about paae</p>
//         </Layout>
//     )
// }

import withLayout from '../components/MyLayout';

const Page = () => <p>This is the about page</p>;

export default withLayout(Page);