import { Link } from "gatsby";
import React from "react";
import Layout from "../../Layout";

const Menu = () => {
  return (
    <Layout>
    <main>
      <h2>Group 1</h2>
      <Link to="/">Go Back Home</Link>
      <ol>
        <Link to="/1/a"><li>Page 1A - Text: Lily</li></Link>
        <Link to="/1/b"><li>Page 1B - Text: Essay</li></Link>
        <Link to="/1/c"><li>Page 1C - Text: Gumbo</li></Link>
        <Link to="/1/d"><li>Page 1D - Interactive component: 5s timer</li></Link>
        <Link to="/1/e"><li>Page 1E - Interactive component: 60s timer</li></Link>
        <Link to="/1/f"><li>Page 1F - Interactive component: Calculator</li></Link>
        <Link to="/1/g"><li>Page 1G - API fetch list</li></Link>
        <Link to="/1/h"><li>Page 1H - API fetch table 1</li></Link>
        <Link to="/1/i"><li>Page 1I - API fetch table 2</li></Link>
        <Link to="/1/j"><li>Page 1J - API fetch table 3</li></Link>
      </ol>
    </main>
    </Layout>
  )
}

export default Menu;
