import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";
import UserRepositoriesTable from "../../components/UserRepositoriesTable";

const Page = () => {
  return (
    <Layout>
    <main>
      <h2>Page 1J</h2>
      <Link to="/1">Go Back</Link>
    
      <h3>API Fetch Table 3</h3>
      <p>Here we use the GitHub API to fetch a list of repositories belonging to <a href="https://github.com/ruanyf">Ruan YiFeng</a>. This list then gets rendered in a table.</p>
      <UserRepositoriesTable username={"ruanyf"} />
    </main>
    </Layout>
  )
}

export default Page;