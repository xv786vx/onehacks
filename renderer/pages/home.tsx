import React from "react";
import Head from "next/head";
import { ipcRenderer } from "electron";

export default function Home() {
  const handlePlanner = async () => await ipcRenderer.invoke("test-algorithm");

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <button onClick={handlePlanner}>Test algorithm</button>
    </React.Fragment>
  );
}
