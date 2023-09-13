import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import Center from "@/components/Center";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const handle = () => {
    setMounted(true);
  };

  console.log(mounted);

  return (
    <div className="bg-black h-full overflow-hidden flex flex-col  overflow-clip">
      <Head>
        <title>AI-Service</title>
        <link rel="icon" href="" type="image/x-icon" />
      </Head>
      <main className="flex">
        <Center tittle={"Home"} />
      </main>
      <div className="flex-1 bg-red-500 rounded-b-md">hi</div>
    </div>
  );
}
