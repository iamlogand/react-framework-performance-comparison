import Link from "next/link";

const Menu = () => {
  return (
    <main>
      <h2>Group 3</h2>
      <Link href="/">Go Back Home</Link>
      <ol>
        <Link href="/3/a"><li>Page 3A</li></Link>
        <Link href="/3/b"><li>Page 3B</li></Link>
        <Link href="/3/c"><li>Page 3C</li></Link>
        <Link href="/3/d"><li>Page 3D</li></Link>
        <Link href="/3/e"><li>Page 3E</li></Link>
        <Link href="/3/f"><li>Page 3F</li></Link>
        <Link href="/3/g"><li>Page 3G</li></Link>
        <Link href="/3/h"><li>Page 3H</li></Link>
        <Link href="/3/i"><li>Page 3I</li></Link>
        <Link href="/3/j"><li>Page 3J</li></Link>
      </ol>
    </main>
  )
}

export default Menu;
