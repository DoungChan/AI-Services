// components/Layout.js

import Head from "next/head";
import Link from "next/link";
import Sidebar from "./Sidebar";

import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { sideBarStatus } from "@/state/atom";

const Layout = ({ children }) => {
  const isShowSideBar = useRecoilValue(sideBarStatus);

  return (
    <div className="flex h-screen w-screen p-2">
      <AnimatePresence initial={false} mode="popLayout">
        {isShowSideBar && (
          <motion.div
            key="sidebar"
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100vw",
            }}
            transition={{
              type: "easeInOut",
              duration: 0.6,
            }}
            className="w-[25rem] h-full z-[999]"
          >
            <Sidebar />
          </motion.div>
        )}
        <motion.main
          key="main"
          layout
          transition={{
            type: "easeInOut",
            duration: 0.3,
          }}
          className="flex-1 h-full w-screen origin-right"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
