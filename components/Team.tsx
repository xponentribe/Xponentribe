import React from "react";
import Footer from "./Footer";
import { team } from "@/data";
import "./Team.css";
import Image from "next/image";
import linkedin from "../public/linkedin.svg";
import twitter from "../public/twitter.svg";
import Navbar from "./ui/Floating-navbar";

const Team = () => {
  return (
    <>
      <Navbar />

      <main id="main-content" role="main" className="pt-24 bg-white">
        <div>
          <h1 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-5xl lg:text-6xl">
            Founding <span className="text-teal-600">Team</span>
          </h1>
        </div>
        <div className="cards pt-24 pb-24 grid place-items-center sm:grid-cols-1">
          {team.map((item) => (
            <div className="card lg:mx-8 my-8 bg-zinc-800" key={item.id}>
              <Image
                width={200}
                height={200}
                src={item.img}
                alt={`${item.name} - ${item.position}`}
                className="img h-auto w-screen object-cover "
              />
              <div
                className="content h-screen"
                style={{ backgroundColor: "#0000006b" }}
              >
                <h2 className="font-bold text-2xl text-white">
                  {item.name}
                  <span className="text-sm text-gray-400 float-right">
                    more{" "}
                  </span>
                </h2>
                <p className="text-xl font-bold text-teal-400 mt-1">
                  {item.position}
                </p>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                <span className="flex">
                  <a href={item.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${item.name}'s LinkedIn profile (opens in a new window)`}>
                    <Image
                      src={linkedin}
                      alt=""
                      width={25}
                      height={25}
                      className="bg-white mx-2"
                    />
                  </a>
                  <a href={item.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${item.name}'s Twitter profile (opens in a new window)`}>
                    <Image
                      src={twitter}
                      alt=""
                      width={25}
                      height={25}
                      className="bg-white mx-2"
                    />
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Team;
