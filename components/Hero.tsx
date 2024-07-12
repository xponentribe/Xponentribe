import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import Logo from "../public/XT-02.png";
import Navbar from "./ui/Floating-navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="pt-32 bg-white">
        <div className="h-screen w-full  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center " />
        </div>
        <div className="flex justify-center relative mb-52 md:mb-96 lg:mb-20">
          <div className="max-w-[89vw] h-full md:max-w-2xl lg:max-w-[89vw] grid lg:grid-cols-2 place-items-center md:grid-cols-1">
            <Image src={Logo} alt="" width={500} height={500} />
            <div className="pt-16">
              <h1 className="text-center text-[40px] md:text-5xl lg:text-6xl text-black leading-snug tracking-wide font-bold">
                A = P*(1 + r)
                <span className="text-center text-[40px] md:text-5xl lg:text-6xl text-teal-400 leading-snug tracking-wide font-bold">
                  ^
                </span>
                n
              </h1>

              <p className="text-center md:tracking-wider text-black mb-4 text-sm md:text-lg lg:text-xl py-6">
                The key driver of returns in the compounding equation is the
                exponent &quot;^n&quot;. Time does the heavy lifting of returns,
                and therefore focusing on longevity is the secret to
                wealth creation.
              </p>
            </div>
          </div>
        </div>
        <hr />

        <Footer />
      </div>
    </>
  );
};

export default Hero;
