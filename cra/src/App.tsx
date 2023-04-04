import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import NavBar from "./components/NavBar";
import Home from "./pages";
import Menu1 from "./pages/1";
import Menu2 from "./pages/2";
import Menu3 from "./pages/3";
import Page1A from "./pages/1/a";
import Page1B from "./pages/1/b";
import Page1C from "./pages/1/c";
import Page1D from "./pages/1/d";
import Page1E from "./pages/1/e";
import Page1F from "./pages/1/f";
import Page1G from "./pages/1/g";
import Page1H from "./pages/1/h";
import Page1I from "./pages/1/i";
import Page1J from "./pages/1/j";
import Page2A from "./pages/2/a";
import Page2B from "./pages/2/b";
import Page2C from "./pages/2/c";
import Page2D from "./pages/2/d";
import Page2E from "./pages/2/e";
import Page2F from "./pages/2/f";
import Page2G from "./pages/2/g";
import Page2H from "./pages/2/h";
import Page2I from "./pages/2/i";
import Page2J from "./pages/2/j";
import Page3A from "./pages/3/a";
import Page3B from "./pages/3/b";
import Page3C from "./pages/3/c";
import Page3D from "./pages/3/d";
import Page3E from "./pages/3/e";
import Page3F from "./pages/3/f";
import Page3G from "./pages/3/g";
import Page3H from "./pages/3/h";
import Page3I from "./pages/3/i";
import Page3J from "./pages/3/j";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="1">
            <Route index element={<Menu1 />} />
            <Route path="a" element={<Page1A />} />
            <Route path="b" element={<Page1B />} />
            <Route path="c" element={<Page1C />} />
            <Route path="d" element={<Page1D />} />
            <Route path="e" element={<Page1E />} />
            <Route path="f" element={<Page1F />} />
            <Route path="g" element={<Page1G />} />
            <Route path="h" element={<Page1H />} />
            <Route path="i" element={<Page1I />} />
            <Route path="j" element={<Page1J />} />
          </Route>
          <Route path="2">
            <Route index element={<Menu2 />} />
            <Route path="a" element={<Page2A />} />
            <Route path="b" element={<Page2B />} />
            <Route path="c" element={<Page2C />} />
            <Route path="d" element={<Page2D />} />
            <Route path="e" element={<Page2E />} />
            <Route path="f" element={<Page2F />} />
            <Route path="g" element={<Page2G />} />
            <Route path="h" element={<Page2H />} />
            <Route path="i" element={<Page2I />} />
            <Route path="j" element={<Page2J />} />
          </Route>
          <Route path="3">
            <Route index element={<Menu3 />} />
            <Route path="a" element={<Page3A />} />
            <Route path="b" element={<Page3B />} />
            <Route path="c" element={<Page3C />} />
            <Route path="d" element={<Page3D />} />
            <Route path="e" element={<Page3E />} />
            <Route path="f" element={<Page3F />} />
            <Route path="g" element={<Page3G />} />
            <Route path="h" element={<Page3H />} />
            <Route path="i" element={<Page3I />} />
            <Route path="j" element={<Page3J />} />
          </Route>
          <Route path="/3" element={<Menu3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
