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
              <p className="quote">
                "Helped me hone in on my homework with clear time blocks, I got
                my stuff done and stopped procrastinating!"
              </p>
              <p className="quote">
                "Sage helped me spend more time working on what I actually
                needed to do, instead of wasting time on trying to figure out
                how I need to do it."
              </p>
              <p className="quote">
                "Sage's time blocks helped me a ton with increasing my
                productivity! I feel less stressed when I have a lot of work to
                do knowing that Sage will help me ensure I spend my time
                wisely."
              </p>
              <p className="quote">
                "It amazes me how accurate Sage's generated time blocks are,
                they've helped me break out of my procrastinating habits and get
                me started on effective homework and studying."
              </p>
              <p className="quote">
                "Sage is awesome for when life gets too hectic and you need a
                second mind to handle what matters less."
              </p>
              <p className="quote">
                "I would recommend Sage to any of my fellow students, especially
                ones struggling with managing their time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
