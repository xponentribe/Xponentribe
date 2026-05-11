"use client";
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../public/Animation - 1720448692637.json";
import Navbar from "./ui/Floating-navbar";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/send`, {
        //${process.env.URL}
        name,
        email,
        message,
      });
      console.log("Response:", response);

      setStatus({ message: "Email sent successfully!", type: "success" });
      // Clear the form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus({ message: "Failed to send email.", type: "error" });
      console.error("Error:");
    }
  };
  return (
    <>
      <Navbar />
      <main id="main-content" role="main" className="bg-white pb-20 pt-32">
        <div>
          <h2 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-3xl lg:text-3xl sm:p-8">
            Connect with us for PMS direct onboarding or other queries
          </h2>{" "}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
          <Lottie animationData={animationData} className="h-96" />
          <form className="lg:p-16 md:p-8 p-8" onSubmit={handleSubmit}>
            <p className="text-sm text-gray-600 mb-4 italic">
              Fields marked with * are required
            </p>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email*
            </label>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name*
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-teal-600 focus:border-teal-600 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Your Name"
              />
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-6"
            >
              Your message*
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button
              type="submit"
              className="text-white mt-6 bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors"
            >
              Submit
            </button>
            <div role="status" aria-live="polite" aria-atomic="true">
              {status && (
                <p
                  className={`p-4 mb-4 text-sm rounded-lg ${status.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                    }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="relative w-full pb-[56.25%] overflow-hidden">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.967881961472!2d72.8350928!3d19.0651497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9114026a91%3A0xc53b6407e4d39f76!2sMakhija%20Arcade%2C%2035th%20Rd%2C%20Khar%20West%2C%20Mumbai%2C%20Maharashtra%20400052!5e0!3m2!1sen!2sin!4v1732940169344!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
