import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";

const Menu = () => {
  return (
    <Layout>
    <main>
      <h2>Group 2</h2>
      <Link to="/">Go Back Home</Link>
      <ol>
        <li><Link to="/2/a">Page 2A</Link></li>
        <li><Link to="/2/b">Page 2B</Link></li>
        <li><Link to="/2/c">Page 2C</Link></li>
        <li><Link to="/2/d">Page 2D</Link></li>
        <li><Link to="/2/e">Page 2E</Link></li>
        <li><Link to="/2/f">Page 2F</Link></li>
        <li><Link to="/2/g">Page 2G</Link></li>
        <li><Link to="/2/h">Page 2H</Link></li>
        <li><Link to="/2/i">Page 2I</Link></li>
        <li><Link to="/2/j">Page 2J</Link></li>
      </ol>
    </main>
    </Layout>
  )
}

export default Menu;

export const Head = () => (
  <>
    <title>Sample App - Gatsby</title>
    <link rel="icon" href="/lion.ico" />
  </>
)
