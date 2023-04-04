import Link from "next/link";
import Timer from "../../components/Timer";

const Page = () => {
  return (
    <main>
      <h2>Page 1E</h2>
      <Link href="/1">Go Back</Link>

      <h3>60 second timer</h3>
      <Timer initialTime={60} />
    </main>
  )
}

export default Page;