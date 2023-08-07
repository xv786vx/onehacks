import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Sage</title>
      </Head>
      <Link href="/next">
        <a className="btn-blue">Go to next page</a>
      </Link>
    </React.Fragment>
  );
}
