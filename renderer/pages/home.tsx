import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/onehacks-logo.png";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Sage</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-black1 h-screen flex flex-row">

        <div className="w-1/2">
          <div className="logo">
            <Image src={logo} />
          </div>

          <div>
            <h1 className="sage-title">Sage.</h1>
            <p className="sage-slogan">Focus on what really matters.</p>
          </div>

          <Link href="/next">
            <div className="bg-black1 pl-24 sm:pl-36 md:pl-48 py-24">
              <button className="homepage-btn">
                <a className="scp">Create Tasks</a>
              </button>
            </div>
          </Link>
        </div>
        
        <div className="w-1/2 pl-16">
          <div>
            <h1 className="testimonial-title">Testimonials</h1>
            <div className="custom-scrollbar overflow-y-scroll max-h-[560px]">
              <p className="quote">"Helped me zero in on my homework with clear time blocks, I got my stuff done and stopped procrastinating!"</p>
              <p className="quote">"Helped me zero in on my homework with clear time blocks, I got my stuff done and stopped procrastinating!"</p>
              <p className="quote">"Helped me zero in on my homework with clear time blocks, I got my stuff done and stopped procrastinating!"</p>
              <p className="quote">"Helped me zero in on my homework with clear time blocks, I got my stuff done and stopped procrastinating!"</p>
              <p className="quote">"Helped me zero in on my homework with clear time blocks, I got my stuff done and stopped procrastinating!"</p>
              <p className="quote">"Helped me zero in on my homework with clear time blocks, I got my stuff done and stopped procrastinating!"</p>
            </div>
          </div>

        </div>

      </div>

    </React.Fragment>
  );
}
