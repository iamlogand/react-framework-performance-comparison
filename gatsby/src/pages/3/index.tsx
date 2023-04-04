import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";

const Menu = () => {
  return (
    <Layout>
    <main>
      <h2>Group 3</h2>
      <Link to="/">Go Back Home</Link>
      <ol>
        <Link to="/3/a"><li>Page 3A</li></Link>
        <Link to="/3/b"><li>Page 3B</li></Link>
        <Link to="/3/c"><li>Page 3C</li></Link>
        <Link to="/3/d"><li>Page 3D</li></Link>
        <Link to="/3/e"><li>Page 3E</li></Link>
        <Link to="/3/f"><li>Page 3F</li></Link>
        <Link to="/3/g"><li>Page 3G</li></Link>
        <Link to="/3/h"><li>Page 3H</li></Link>
        <Link to="/3/i"><li>Page 3I</li></Link>
        <Link to="/3/j"><li>Page 3J</li></Link>
      </ol>
    </main>
    </Layout>
  )
}

export default Menu;
