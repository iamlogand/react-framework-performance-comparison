import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";
import UserRepositoriesList from "../../components/UserRepositoriesList";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1G</h2>
      <Link to="/1">Go Back</Link>
      
      <h3>API Fetch List</h3>
      <p>Here we use the GitHub API to fetch a list of 100 repositories belonging to <a href="https://github.com/yyx990803">Evan You</a>.</p>
      <UserRepositoriesList username={"yyx990803"} />
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