import Link from "next/link";

const Menu = () => {
  return (
    <main>
      <h2>Group 3</h2>
      <Link href="/">Go Back Home</Link>
      <ol>
        <li><Link href="/3/a">Page 3A</Link></li>
        <li><Link href="/3/b">Page 3B</Link></li>
        <li><Link href="/3/c">Page 3C</Link></li>
        <li><Link href="/3/d">Page 3D</Link></li>
        <li><Link href="/3/e">Page 3E</Link></li>
        <li><Link href="/3/f">Page 3F</Link></li>
        <li><Link href="/3/g">Page 3G</Link></li>
        <li><Link href="/3/h">Page 3H</Link></li>
        <li><Link href="/3/i">Page 3I</Link></li>
        <li><Link href="/3/j">Page 3J</Link></li>
      </ol>
    </main>
  )
}

export default Menu;


