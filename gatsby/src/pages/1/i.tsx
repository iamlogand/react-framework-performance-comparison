import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";
import UserRepositoriesTable from "../../components/UserRepositoriesTable";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1I</h2>
      <Link to="/1">Go Back</Link>
    
      <h3>API Fetch Table 2</h3>
      <p>Here we use the GitHub API to fetch a list of repositories belonging to <a href="https://github.com/JakeWharton">Jake Wharton</a>. This list then gets rendered in a table.</p>
      <UserRepositoriesTable username={"JakeWharton"} />
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