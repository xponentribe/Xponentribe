"use client";
import React, { useState } from "react";
import Navbar from "./ui/Floating-navbar";
import Footer from "./Footer";
import "./Letter.css";
import { letter } from "@/data";
import SubscriptionForm from "./EmailPopupForm";
// import EmailPopupForm from "./EmailPopupForm";

const Letter = () => {
  // const [showPopup, setShowPopup] = useState<boolean>(false);

  // const togglePopup = () => {
  //   setShowPopup(!showPopup);
  // };

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  return (
    <>
      <Navbar />

      <main id="main-content" role="main" className="pt-28 bg-white">
        <div className="">
          <h1 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-5xl lg:text-6xl">
            Our <span className="text-teal-600">Letters</span>
          </h1>
        </div>
        <SubscriptionForm />

        <div className="grid place-items-center lg:pt-16 lg:px-48 md:pt-8 md:px-24 px-8">
          {[...letter]
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <div
                className="p-6 bg-white border sm:mx-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-12"
                key={item.id}
              >
                <h2 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white sm:text-lg md:text-lg lg:text-2xl">
                  {item.heading}
                </h2>
                <hr aria-hidden="true" />
                <p className="mb-3 pt-4 font-normal text-gray-700 dark:text-gray-400 text-justify sm:text-sms">
                  {item.desc}
                </p>
                <p className="mb-3 font-normal text-gray-900 dark:text-gray-400">
                  {item.date}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read more about ${item.heading} (PDF, opens in a new window)`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-800 transition-colors"
                >
                  Read more
                </a>
              </div>
            ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Letter;

