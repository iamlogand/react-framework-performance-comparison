import Link from "next/link";
import UserRepositoriesTable from "../../components/UserRepositoriesTable";

const Page = () => {
  return (
    <main>
      <h2>Page 1H</h2>
      <Link href="/1">Go Back</Link>
    
      <h3>API Fetch Table 1</h3>
      <p>Here we use the GitHub API to fetch a list of repositories belonging to <a href="https://github.com/yyx990803">Evan You</a>. This list then gets rendered in a table.</p>
      <UserRepositoriesTable username={"yyx990803"} />
    </main>
  )
}

export default Page;