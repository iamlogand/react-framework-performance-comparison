import Link from "next/link";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <ul>
        <li><Link href="/"><h1>Home</h1></Link></li>
        <li><Link href="/1">Group 1</Link></li>
        <li><Link href="/2">Group 2</Link></li>
        <li><Link href="/3">Group 3</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;
