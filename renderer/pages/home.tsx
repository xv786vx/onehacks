import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import logo from '../assets/onehacks-logo.png'

export default function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>Sage.</title>
      </Head>
    <div className="bg-black1 h-screen">

      <div className="logo">
        <Image src={logo} />
      </div>

      <div className="font-custom bg-black1 pl-24 sm:pl-36 md:pl-48 pt-16">
        <h1 className="pb-4 text-6xl font-bold">Sage.</h1>
        <p className="text-2xl">Focus on what really matters.</p>
      </div>

      <Link href="/next">
        <div className="bg-black1 pl-24 sm:pl-36 md:pl-48 py-24">
          <button className="homepage-btn">
            <a className="font-custom">Create Tasks</a>
          </button>
        </div>
      </Link>
    </div>

    </React.Fragment>
  );
}
