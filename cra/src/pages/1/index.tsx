import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <main>
      <h2>Group 1</h2>
      <Link to="/">Go Back Home</Link>
      <ol>
        <li><Link to="/1/a">Page 1A - Text: Lily</Link></li>
        <li><Link to="/1/b">Page 1B - Text: Essay</Link></li>
        <li><Link to="/1/c">Page 1C - Text: Gumbo</Link></li>
        <li><Link to="/1/d">Page 1D - Interactive component: 5s timer</Link></li>
        <li><Link to="/1/e">Page 1E - Interactive component: 60s timer</Link></li>
        <li><Link to="/1/f">Page 1F - Interactive component: Calculator</Link></li>
        <li><Link to="/1/g">Page 1G - API fetch list</Link></li>
        <li><Link to="/1/h">Page 1H - API fetch table 1</Link></li>
        <li><Link to="/1/i">Page 1I - API fetch table 2</Link></li>
        <li><Link to="/1/j">Page 1J - API fetch table 3</Link></li>
      </ol>
    </main>
  )
}

export default Menu;
