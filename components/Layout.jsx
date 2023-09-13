// components/Layout.js

import Head from "next/head";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex-1 flex h-screen w-screen p-2">
      <Sidebar />
      <main className="flex-1 h-full w-full">{children}</main>
    </div>
  );
};

export default Layout;
