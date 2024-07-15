"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isShow0, setIsShow0] = useState(false);
  const [isShow1, setIsShow1] = useState(false);

  const handleMouseOver = () => {
    setIsShow0(true);
  };

  const handleMouseOut = () => {
    setIsShow0(false);
  };

  const handleMouseOver1 = () => {
    setIsShow1(true);
  };

  const handleMouseOut1 = () => {
    setIsShow1(false);
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 250;

      const isScrolled = window.scrollY > scrollThreshold;

      setShowButton(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 z-40 w-screen bg-white shadow-gray-300 shadow-lg">
      <div className=" flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-20">
        <div className="flex items-center justify-start gap-x-16 sm:gap-x-0  ">
          <a href="/">
            <Image
              src="/XT-02.svg"
              width={80}
              height={80}
              alt="Picture of the author"
              className="lg:hidden relative right-8"
            />
          </a>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R5b6t5a:"
            className="relative left-24 md:left"
            data-state="closed"
            onClick={() => setIsHamburger(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="md:hidden h-6 w-6 "
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex"
          >
            <div
              className="relative grid"
              style={{ gridTemplateColumns: "repeat(2,700px)" }}
            >
              <a href="/">
                <Image
                  src="/XT-02.svg"
                  width={80}
                  height={80}
                  alt="Picture of the author"
                />
              </a>
              <ul
                data-orientation="horizontal"
                className="group flex flex-1 list-none items-center justify-center space-x-1 relative"
                dir="ltr"
              >
                <li>
                  <a
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    href="/"
                    data-radix-collection-item=""
                  >
                    Home
                  </a>
                </li>
                {isShow0 ? (
                  <div
                    className="absolute left-0 top-10 flex justify-center"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <div
                      data-state="open"
                      data-orientation="horizontal"
                      className="about origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]"
                      style={
                        {
                          "--radix-navigation-menu-viewport-width": "165px",
                          "--radix-navigation-menu-viewport-height": "125px",
                          position: "relative",
                          left: "13rem",
                          // left: "135vh",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        id="radix-:R9b6t5a:-content-radix-:Rdpb6t5a:"
                        aria-labelledby="radix-:R9b6t5a:-trigger-radix-:Rdpb6t5a:"
                        data-orientation="horizontal"
                        className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto"
                        dir="ltr"
                      >
                        <ul className="grid grid-cols-1 gap-3 p-6 md:w-[125px] lg:w-[165px] ">
                          <li>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="/team"
                              data-radix-collection-item=""
                            >
                              <div className="text-sm font-medium leading-none">
                                Team
                              </div>
                            </a>
                          </li>

                          <li>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="/philosophy"
                              data-radix-collection-item=""
                            >
                              <div className="text-sm font-medium leading-none">
                                Philosophy
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
                <li>
                  <button
                    id="radix-:R9b6t5a:-trigger-radix-:Rdpb6t5a:"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-:R9b6t5a:-content-radix-:Rdpb6t5a:"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                    data-radix-collection-item=""
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    About{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${
                        isShow0 ? "-rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </li>
                {isShow1 ? (
                  <div
                    className="absolute left-0 top-10 flex justify-center "
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}
                  >
                    <div
                      data-state="open"
                      data-orientation="horizontal"
                      className="letter origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]"
                      style={
                        {
                          "--radix-navigation-menu-viewport-width": "165px",
                          "--radix-navigation-menu-viewport-height": "70px",
                          position: "relative",
                          left: "22rem",
                          // left: "150vh",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        id="radix-:R9b6t5a:-content-radix-:Rhpb6t5a:"
                        aria-labelledby="radix-:R9b6t5a:-trigger-radix-:Rhpb6t5a:"
                        data-orientation="horizontal"
                        className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto"
                        dir="ltr"
                      >
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[125px]  lg:w-[165px] ">
                          <li>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="/letter"
                              data-radix-collection-item=""
                            >
                              <div className="text-sm font-medium leading-none">
                                Letters
                              </div>
                            </a>
                          </li>
                          {/* <li>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="/blogs"
                              data-radix-collection-item=""
                            >
                              <div className="text-sm font-medium leading-none">
                                Blogs
                              </div>
                            </a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : null}
                <li>
                  <button
                    id="radix-:R9b6t5a:-trigger-radix-:Rhpb6t5a:"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-:R9b6t5a:-content-radix-:Rhpb6t5a:"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                    data-radix-collection-item=""
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}
                  >
                    Insights{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${
                        isShow1 ? "-rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </li>
                <li>
                  <a
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    href="/contact"
                    data-radix-collection-item=""
                  >
                    Contact{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="absolute left-0 top-full flex justify-center"></div>
          </nav>
        </div>

        {isHamburger ? (
          <>
            <div
              data-state="open"
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
              data-aria-hidden="true"
              aria-hidden="true"
            ></div>
            <div
              role="dialog"
              id="radix-:R5b6t5a:"
              aria-describedby="radix-:R5b6t5aH2:"
              aria-labelledby="radix-:R5b6t5aH1:"
              data-state="open"
              className="fixed z-50 gap-4 bg-background bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm w-[70%] flex flex-col"
            >
              <div className="flex flex-col space-y-2 text-center sm:text-left">
                <h2
                  id="radix-:R5b6t5aH1:"
                  className="text-lg font-semibold text-foreground"
                >
                  <div className="flex items-center space-x-2">
                    <a href="/">
                      <Image
                        src="/XT-02.svg"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                      />
                    </a>
                  </div>
                </h2>
                <p
                  id="radix-:R5b6t5aH2:"
                  className="text-sm text-muted-foreground"
                ></p>
              </div>
              <nav className="flex flex-col gap-3 ml-8">
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/team"
                >
                  Team
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/philosophy"
                >
                  Philosophy
                </a>

                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/letter"
                >
                  Letters
                </a>
                {/* <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/blog"
                >
                  Blogs
                </a> */}
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/contact"
                >
                  Contact
                </a>
              </nav>

              <button
                type="button"
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                onClick={() => setIsHamburger(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
