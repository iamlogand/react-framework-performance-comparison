import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";
import Calculator from "../../components/Calculator";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1F</h2>
      <Link to="/1">Go Back</Link>
    
      <h3>Calculator</h3>
      <Calculator />
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