import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <ul>
        <li><Link to="/"><h1>Home</h1></Link></li>
        <li><Link to="/1">Group 1</Link></li>
        <li><Link to="/2">Group 2</Link></li>
        <li><Link to="/3">Group 3</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;
