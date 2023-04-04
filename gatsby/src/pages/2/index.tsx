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
        <Link to="/2/a"><li>Page 2A</li></Link>
        <Link to="/2/b"><li>Page 2B</li></Link>
        <Link to="/2/c"><li>Page 2C</li></Link>
        <Link to="/2/d"><li>Page 2D</li></Link>
        <Link to="/2/e"><li>Page 2E</li></Link>
        <Link to="/2/f"><li>Page 2F</li></Link>
        <Link to="/2/g"><li>Page 2G</li></Link>
        <Link to="/2/h"><li>Page 2H</li></Link>
        <Link to="/2/i"><li>Page 2I</li></Link>
        <Link to="/2/j"><li>Page 2J</li></Link>
      </ol>
    </main>
    </Layout>
  )
}

export default Menu;
