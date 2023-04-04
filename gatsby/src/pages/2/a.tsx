import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 2A</h2>
      <Link to="/2">Go Back</Link>
      
      <p>Nothing here yet.</p>
    </main>
    </Layout>
  )
}

export default Page;