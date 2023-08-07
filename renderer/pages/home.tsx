import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link"
import { ipcRenderer } from "electron";

export default function Home() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  const handleTestNotification = async () =>
    await ipcRenderer.invoke("test-notification", inputTitle, inputBody);

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <span>Title</span>
      <input
        className="text-black"
        value={inputTitle}
        onChange={(e) => setInputTitle(e.target.value)}
      />
      <span>Body</span>
      <input
        className="text-black"
        value={inputBody}
        onChange={(e) => setInputBody(e.target.value)}
      />
      <button onClick={handleTestNotification}>Send Notification</button>
      <Link href='/next'>
          <a className='btn-blue'>Go to next page</a>
        </Link>
    </React.Fragment>
  );
}