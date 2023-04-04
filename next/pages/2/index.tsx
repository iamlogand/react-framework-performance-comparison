import Link from "next/link";

const Menu = () => {
  return (
    <main>
      <h2>Group 2</h2>
      <Link href="/">Go Back Home</Link>
      <ol>
        <li><Link href="/2/a">Page 2A</Link></li>
        <li><Link href="/2/b">Page 2B</Link></li>
        <li><Link href="/2/c">Page 2C</Link></li>
        <li><Link href="/2/d">Page 2D</Link></li>
        <li><Link href="/2/e">Page 2E</Link></li>
        <li><Link href="/2/f">Page 2F</Link></li>
        <li><Link href="/2/g">Page 2G</Link></li>
        <li><Link href="/2/h">Page 2H</Link></li>
        <li><Link href="/2/i">Page 2I</Link></li>
        <li><Link href="/2/j">Page 2J</Link></li>
      </ol>
    </main>
  )
}

export default Menu;


