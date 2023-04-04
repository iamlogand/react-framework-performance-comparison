import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 2C</h2>
      <Link to="/2">Go Back</Link>
          
      <p>Nothing here yet.</p>
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