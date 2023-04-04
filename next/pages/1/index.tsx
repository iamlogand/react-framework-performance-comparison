import Link from "next/link";

const Menu = () => {
  return (
    <main>
      <h2>Group 1</h2>
      <Link href="/">Go Back Home</Link>
      <ol>
        <Link href="/1/a"><li>Page 1A - Text: Lily</li></Link>
        <Link href="/1/b"><li>Page 1B - Text: Essay</li></Link>
        <Link href="/1/c"><li>Page 1C - Text: Gumbo</li></Link>
        <Link href="/1/d"><li>Page 1D - Interactive component: 5s timer</li></Link>
        <Link href="/1/e"><li>Page 1E - Interactive component: 60s timer</li></Link>
        <Link href="/1/f"><li>Page 1F - Interactive component: Calculator</li></Link>
        <Link href="/1/g"><li>Page 1G - API fetch list</li></Link>
        <Link href="/1/h"><li>Page 1H - API fetch table 1</li></Link>
        <Link href="/1/i"><li>Page 1I - API fetch table 2</li></Link>
        <Link href="/1/j"><li>Page 1J - API fetch table 3</li></Link>
      </ol>
    </main>
  )
}

export default Menu;
