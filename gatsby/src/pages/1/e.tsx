import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";
import Timer from "../../components/Timer";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1E</h2>
      <Link to="/1">Go Back</Link>

      <h3>60 second timer</h3>
      <Timer initialTime={60} />
    </main>
    </Layout>
  )
}

export default Page;

export const Head = () => (
  <>
    <title>Sample App - Gatsby</title>
    <link rel="icon" href="/lion.ico" />
  </>
)