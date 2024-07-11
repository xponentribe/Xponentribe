"use client";
import React from "react";
import Navbar from "./ui/Floating-navbar";
import Footer from "./Footer";
import Lottie from "lottie-react";
import animationData from "../public/underconstruction.json";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white pt-36">
        <div>
          <h1 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-5xl lg:text-6xl">
            Our <span className="text-teal-400">Blogs</span>
          </h1>
        </div>
        <div className="grid place-items-center">
          <Lottie animationData={animationData} className="h-96" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
