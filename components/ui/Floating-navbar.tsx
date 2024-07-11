"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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
        <div className="flex items-center justify-start gap-x-44 sm:gap-x-0  ">
          <a href="/">
            <Image
              src="/XT-02.svg"
              width={80}
              height={80}
              alt="Picture of the author"
              className="lg:hidden "
            />
          </a>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R5b6t5a:"
            data-state="closed"
            onClick={() => setIsHamburger(true)}
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
              className="md:hidden h-6 w-6 border-2 border-primary rounded-sm"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
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
                className="group flex flex-1 list-none items-center justify-center space-x-1"
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
                      className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]"
                      style={
                        {
                          "--radix-navigation-menu-viewport-width": "165px",
                          "--radix-navigation-menu-viewport-height": "125px",
                          position: "relative",
                          left: "125vh",
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
                      className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]"
                      style={
                        {
                          "--radix-navigation-menu-viewport-width": "165px",
                          "--radix-navigation-menu-viewport-height": "125px",
                          position: "relative",
                          left: "150vh",
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
                                Letter
                              </div>
                            </a>
                          </li>
                          <li>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="/blogs"
                              data-radix-collection-item=""
                            >
                              <div className="text-sm font-medium leading-none">
                                Blogs
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
                  Letter
                </a>
                <a
                  className="flex items-center text-md text-primary font-normal"
                  href="/blog"
                >
                  Blogs
                </a>
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

        {/* <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 select-none">
            
          </nav>
        </div> */}
      </div>

      {/* <div className="flex items-center gap-x-6 bg-background px-6 py-2.5 sm:px-3.5 sm:before:flex-1 border-t border-b">
        <p className="text-sm leading-6 text-primary">
          <a href="#">
            <strong className="font-semibold">Cancel bug fixed!</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            Thanks for using Zap!
          </a>
        </p>
        <div className="flex flex-1 justify-end"></div>
      </div> */}

      {/* {isLogin ? (
        <div className={`fixed inset-0 z-50 flex justify-center items-center`}>
          <div
            data-state="open"
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in"
            data-aria-hidden="true"
            aria-hidden="true"
            style={{ pointerEvents: "auto" }}
          ></div>
          <div
            role="dialog"
            id="radix-:r3:"
            aria-describedby="radix-:r5:"
            aria-labelledby="radix-:r4:"
            data-state="open"
            className={`fixed z-50 gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 h-screen w-screen sm:h-auto sm:w-auto md:mt-20 flex flex-col items-center justify-center bg-white transition-transform transform ${
              isLogin ? "scale-100" : "scale-0"
            }`}
            // tabindex="-1"
            style={{ pointerEvents: "auto" }}
          >
            <div className="flex-col space-y-1.5 text-center sm:text-left flex items-center justify-center gap-y-3">
              <img
                alt="Zap"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="rounded-full"
                src="https://t4.rbxcdn.com/30DAY-AvatarHeadshot-57748977B3F40C1CE63A075CD52FBEE4-Png"
                //style="color: transparent;"
                style={{ color: "transparent" }}
              />
              <h2
                id="radix-:r4:"
                className="font-semibold tracking-tight text-3xl mt-auto text-center"
              >
                Sign in to Zap
              </h2>
              <p
                id="radix-:r5:"
                className="text-sm text-muted-foreground text-center"
              >
                Zap uses your Roblox username, ID, and avatar to create your
                profile. We will never ask for your password.
              </p>
            </div>
            <div className="flex flex-col gap-y-6 w-full">
              <div
                data-orientation="horizontal"
                role="none"
                className="shrink-0 bg-border h-[1px] w-full !mt-4"
              ></div>
              <div className="flex flex-col justify-start space-y-2">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id="13-plus"
                  ></button>
                  <label
                    // for="13-plus"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I am 13 years of age or older
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked="false"
                    data-state="unchecked"
                    value="on"
                    className="peer h-4 w-4 shrink-0 rounded-sm border border-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                    id="tos"
                  ></button>
                  <label
                    // for="tos"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{" "}
                    <a
                      href="https://zap.gg/terms"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500"
                    >
                      Terms of Service
                    </a>
                  </label>
                </div>
              </div>
              <div className="text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-9 px-3 rounded-md flex items-center justify-center space-x-2 py-6 hover:cursor-not-allowed bg-muted text-muted-foreground hover:bg-muted bg-[#f1f5f9]">
                <span>Link Roblox Account</span>
              </div>
            </div>
            <button
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setIsLogin(false)}
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
        </div>
      ) : (
        <>
          {showButton && (
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 fixed bottom-4 right-4 z-50 border px-2 shadow-lg opacity-100  bg-white"
              onClick={moveTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          )}
        </>
      )} */}
    </div>
  );
}
