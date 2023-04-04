import Link from "next/link";
import Timer from "../../components/Timer";

const Page = () => {
  return (
    <main>
      <h2>Page 1D</h2>
      <Link href="/1">Go Back</Link>

      <h3>5 second timer</h3>
      <Timer initialTime={5} />
    </main>
  )
}

export default Page;

