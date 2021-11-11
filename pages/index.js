import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark">
      <Head>
        <title>Defy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-7 md:mx-14">
        <Header sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
}
