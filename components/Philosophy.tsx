import React from "react";
import { philosophy } from "@/data";
import Image from "next/image";
import "./Philosophy.css";
import Navbar from "./ui/Floating-navbar";
import Footer from "./Footer";

const Philosophy = () => {
  return (
    <>
      <Navbar />
      <div className="projcard-container ">
        <div>
          <h1 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-5xl lg:text-6xl">
            Our <span className="text-teal-400">Philosophy</span>
          </h1>
        </div>
        <div className="projcard projcard-blue">
          <div className="projcard-innerbox">
            <Image
              width={200}
              height={200}
              className="projcard-img"
              src="/gorilla.svg"
              alt={""}
            />
            <div className="projcard-textbox">
              <div className="projcard-title">
                Sustainably maximize spread over cost of capital
              </div>
              <div className="projcard-subtitle">
                Resilient business reflecting in high (ROCE - WACC)
              </div>
              <div className="projcard-description py-6">
                Sustained high spreads over long-term emanate from some hard to
                replicate factors such as Brand perception, Network effects,
                High switching costs, Economies of scale, Intellectual property
                / R&D etc.
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-red">
          <div className="projcard-innerbox">
            <Image
              width={200}
              height={200}
              className="projcard-img"
              src="/graph.svg"
              alt={""}
            />
            <div className="projcard-textbox">
              <div className="projcard-title">
                Maximise time horizon for reinvestment
              </div>
              <div className="projcard-subtitle">
                Maximise period for which economics profits generated can by
                reinvested for growth – i.e. ^n{" "}
              </div>
              <div className="projcard-description py-6">
                Reinvestment at high spreads for long periods come from
                structural demand drivers, consistent new product developments
                leading to increasing TAM, and low industry rate of change.
              </div>
            </div>
          </div>
        </div>

        <div className="projcard projcard-green">
          <div className="projcard-innerbox">
            <Image
              width={200}
              height={200}
              className="projcard-img"
              src="/hands.svg"
              alt={""}
            />
            <div className="projcard-textbox">
              <div className="projcard-title">And a Third Card</div>
              <div className="projcard-subtitle">
                Management team taking decisions to optimize spread and time
                horizon
              </div>
              <div className="projcard-description py-6">
                Managements that have demonstrated ability to adapt, capital
                allocation, Dispassionate decision-making, Good corporate
                governance.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white pt-36 lg:hidden md:hidden">
        <div>
          <h1 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-5xl lg:text-6xl">
            Our <span className="text-teal-400">Philosophy</span>
          </h1>
        </div>
        <div className="place-items-center grid lg:grid-cols-3 sm:grid-cols-1 pt-16 pb-16">
          {philosophy.map((item) => (
            <div
              className="grid place-items-center pt-8 p-5 mt-8 rounded-3xl hover:cursor-pointer"
              style={{ border: "1px solid #16bdca" }}
              key={item.id}
            >
              <Image
                width={200}
                height={200}
                src={item.phiimg}
                className="h-60 w-80 object-cover"
                alt=""
              />
              <div className="text-center w-80 ">
                <h3 className="text-black text-2xl font-bold my-4 text-center">
                  {" "}
                  {item.head}
                </h3>
                <h5 className="text-black text-lg my-3 text-center">
                  {item.sub}
                </h5>
                <div>
                  <p className="text-black text-base  text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Philosophy;
