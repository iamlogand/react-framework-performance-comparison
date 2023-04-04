import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";
import Timer from "../../components/Timer";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1D</h2>
      <Link to="/1">Go Back</Link>

      <h3>5 second timer</h3>
      <Timer initialTime={5} />
    </main>
    </Layout>
  )
}

export default Page;