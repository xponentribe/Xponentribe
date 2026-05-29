"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isShow0, setIsShow0] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mediaMd = window.matchMedia("(min-width: 768px)");
    const mediaLg = window.matchMedia("(min-width: 1024px)");
    
    const listenerMd = () => setIsMd(mediaMd.matches);
    const listenerLg = () => setIsLg(mediaLg.matches);

    setIsMd(mediaMd.matches);
    setIsLg(mediaLg.matches);

    mediaMd.addEventListener("change", listenerMd);
    mediaLg.addEventListener("change", listenerLg);

    return () => {
      mediaMd.removeEventListener("change", listenerMd);
      mediaLg.removeEventListener("change", listenerLg);
    };
  }, []);

  const aboutRef = useRef<HTMLButtonElement>(null);
  const insightsRef = useRef<HTMLButtonElement>(null);
  const timeoutRef0 = useRef<any>(null);
  const timeoutRef1 = useRef<any>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef0.current) clearTimeout(timeoutRef0.current);
      if (timeoutRef1.current) clearTimeout(timeoutRef1.current);
    };
  }, []);

  const handleMouseOver = () => {
    if (timeoutRef0.current) clearTimeout(timeoutRef0.current);
    setIsShow0(true);
  };

  const handleMouseOut = () => {
    timeoutRef0.current = setTimeout(() => {
      setIsShow0(false);
    }, 150);
  };

  const handleMouseOver1 = () => {
    if (timeoutRef1.current) clearTimeout(timeoutRef1.current);
    setIsShow1(true);
  };

  const handleMouseOut1 = () => {
    timeoutRef1.current = setTimeout(() => {
      setIsShow1(false);
    }, 150);
  };

  const toggleAbout = () => setIsShow0(!isShow0);
  const toggleInsights = () => setIsShow1(!isShow1);

  const handleKeyDownAbout = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAbout();
    } else if (e.key === "Escape") {
      setIsShow0(false);
    }
  };

  const handleKeyDownInsights = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleInsights();
    } else if (e.key === "Escape") {
      setIsShow1(false);
    }
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

  return (
    <header role="banner" className="fixed top-0 z-40 w-screen bg-white shadow-gray-300 shadow-lg">
      <a
        href="#main-content"
        className="absolute left-0 top-0 z-50 m-3 -translate-y-16 bg-teal-400 px-4 py-2 text-white transition-transform focus:translate-y-0 sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 mx-20">
        <div className="flex items-center justify-start gap-x-16 sm:gap-x-0">
          <a
            href="/"
            aria-label={isLg ? undefined : "Xponent Tribe Home"}
            role={isLg ? "presentation" : undefined}
            aria-hidden={isLg ? "true" : undefined}
            tabIndex={isLg ? -1 : undefined}
          >
            <Image
              src="/XT-02.svg"
              width={80}
              height={80}
              alt="Xponent Tribe logo"
              className="lg:hidden relative right-8"
            />
          </a>
          <button
            type="button"
            aria-label={isMd ? undefined : "Open navigation menu"}
            aria-haspopup={isMd ? undefined : "true"}
            aria-expanded={isMd ? undefined : isHamburger}
            role={isMd ? "presentation" : undefined}
            aria-hidden={isMd ? "true" : undefined}
            tabIndex={isMd ? -1 : undefined}
            className="md:hidden relative left-24 md:left"
            onClick={() => setIsHamburger(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <nav
            aria-label="main"
            className="relative z-10 max-w-max flex-1 items-center justify-center hidden md:flex"
          >
            <div
              className="relative grid"
              style={{ gridTemplateColumns: "repeat(2,700px)" }}
            >
              <a href="/" aria-label="Xponent Tribe Home">
                <Image
                  src="/XT-02.svg"
                  width={80}
                  height={80}
                  alt="Xponent Tribe logo"
                />
              </a>
              <ul className="group flex flex-1 list-none items-center justify-center space-x-1 relative">
                <li>
                  <a
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-[#f1f5f9] focus:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="relative">
                  <button
                    ref={aboutRef}
                    id="about-trigger"
                    aria-haspopup="true"
                    aria-expanded={isShow0}
                    aria-controls="about-menu"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-[#f1f5f9] focus:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={toggleAbout}
                    onKeyDown={handleKeyDownAbout}
                  >
                    About{" "}
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
                      aria-hidden="true"
                      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${isShow0 ? "-rotate-180" : ""
                        }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {isShow0 && (
                    <div
                      id="about-menu"
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[165px] overflow-hidden rounded-md border bg-white text-popover-foreground shadow-lg z-50 before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-full before:h-1.5"
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <ul className="grid grid-cols-1 gap-1 p-3">
                        <li>
                          <a
                            className="block select-none rounded-md p-2 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-[#f1f5f9]"
                            href="/team"
                          >
                            Team
                          </a>
                        </li>
                        <li>
                          <a
                            className="block select-none rounded-md p-2 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-[#f1f5f9]"
                            href="/philosophy"
                          >
                            Philosophy
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    ref={insightsRef}
                    id="insights-trigger"
                    aria-haspopup="true"
                    aria-expanded={isShow1}
                    aria-controls="insights-menu"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-[#f1f5f9] focus:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                    onMouseOver={handleMouseOver1}
                    onMouseOut={handleMouseOut1}
                    onClick={toggleInsights}
                    onKeyDown={handleKeyDownInsights}
                  >
                    Insights{" "}
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
                      aria-hidden="true"
                      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${isShow1 ? "-rotate-180" : ""
                        }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {isShow1 && (
                    <div
                      id="insights-menu"
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[165px] overflow-hidden rounded-md border bg-white text-popover-foreground shadow-lg z-50 before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-full before:h-1.5"
                      onMouseOver={handleMouseOver1}
                      onMouseOut={handleMouseOut1}
                    >
                      <ul className="grid grid-cols-1 gap-1 p-3">
                        <li>
                          <a
                            className="block select-none rounded-md p-2 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-[#f1f5f9]"
                            href="/letter"
                          >
                            Letters
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li>
                  <a
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-[#f1f5f9] hover:text-accent-foreground focus:bg-[#f1f5f9] focus:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {isHamburger && (
          <>
            <div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsHamburger(false)}
              aria-hidden="true"
            ></div>
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
              className="fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out inset-y-0 left-0 h-full border-r sm:max-w-sm w-[70%] flex flex-col"
            >
              <div className="flex flex-col space-y-2 text-center sm:text-left">
                <h2 id="mobile-menu-title" className="text-lg font-semibold text-foreground">
                  <div className="flex items-center space-x-2">
                    <a href="/" aria-label="Xponent Tribe Home" onClick={() => setIsHamburger(false)}>
                      <Image
                        src="/XT-02.svg"
                        width={100}
                        height={100}
                        alt="Xponent Tribe logo"
                      />
                    </a>
                  </div>
                </h2>
              </div>
              <nav className="flex flex-col gap-3 ml-8" aria-label="Mobile Navigation">
                <a className="flex items-center text-md text-primary font-normal hover:text-teal-400" href="/" onClick={() => setIsHamburger(false)}>Home</a>
                <a className="flex items-center text-md text-primary font-normal hover:text-teal-400" href="/team" onClick={() => setIsHamburger(false)}>Team</a>
                <a className="flex items-center text-md text-primary font-normal hover:text-teal-400" href="/philosophy" onClick={() => setIsHamburger(false)}>Philosophy</a>
                <a className="flex items-center text-md text-primary font-normal hover:text-teal-400" href="/letter" onClick={() => setIsHamburger(false)}>Letters</a>
                <a className="flex items-center text-md text-primary font-normal hover:text-teal-400" href="/contact" onClick={() => setIsHamburger(false)}>Contact</a>
              </nav>

              <button
                type="button"
                aria-label="Close menu"
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                onClick={() => setIsHamburger(false)}
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
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
