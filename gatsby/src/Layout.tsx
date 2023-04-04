import React from "react";
import { ReactNode } from "react";
import NavBar from "./components/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layout;