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

      <div className="pt-24 bg-white">
        <div>
          <h1 className="text-center text-black leading-snug font-bold tracking-wide text-[40px] md:text-5xl lg:text-6xl">
            Leadership <span className="text-teal-400">Team</span>
          </h1>
        </div>
        <div className="cards pt-24 pb-24 grid place-items-center sm:grid-cols-1">
          {team.map((item) => (
            <div className="card lg:mx-8 my-8 bg-zinc-800" key={item.id}>
              <Image
                width={200}
                height={200}
                src={item.img}
                alt=""
                className="img h-auto w-screen object-cover "
              />
              <div
                className="content h-screen"
                style={{ backgroundColor: "#0000006b" }}
              >
                <h1 className="font-bold text-2xl text-white">{item.name}</h1>
                <h4 className="text-xl font-bold text-teal-400 mt-1">
                  {item.position}
                </h4>
                <p>{item.desc1}</p>
                <p>{item.desc2}</p>
                <span className="flex">
                  <a href={item.linkedin} target="_blank">
                    <Image
                      src={linkedin}
                      alt={""}
                      width={25}
                      height={25}
                      className="bg-white mx-2"
                    />
                  </a>
                  <a href={item.twitter} target="_blank">
                    <Image
                      src={twitter}
                      alt={""}
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
      </div>

      <Footer />
    </>
  );
};

export default Team;
