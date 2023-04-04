import Link from "next/link";
import UserRepositoriesTable from "../../components/UserRepositoriesTable";

const Page = () => {
  return (
    <main>
      <h2>Page 1I</h2>
      <Link href="/1">Go Back</Link>
    
      <h3>API Fetch Table 2</h3>
      <p>Here we use the GitHub API to fetch a list of repositories belonging to <a href="https://github.com/JakeWharton">Jake Wharton</a>. This list then gets rendered in a table.</p>
      <UserRepositoriesTable username={"JakeWharton"} />
    </main>
  )
}

export default Page;