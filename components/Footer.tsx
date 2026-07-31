import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-white dark:bg-gray-900 shadow-gray-300"
      style={{ boxShadow: "0px 7px 38px 46px #D1D5DB" }}
    >
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center w-fit" aria-label="Xponent Tribe Home">
              <Image
                src="/XT-02.svg"
                className="h-16 w-24 relative lg:top-10"
                alt="Xponent Tribe logo"
                width={80}
                height={80}
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Navigation</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:text-teal-600 transition-colors">Home</a>
                </li>
                <li className="mb-4">
                  <a href="/team" className="hover:text-teal-600 transition-colors">Team</a>
                </li>
                <li className="mb-4">
                  <a href="/philosophy" className="hover:text-teal-600 transition-colors">Philosophy</a>
                </li>
                <li className="mb-4">
                  <a href="/letter" className="hover:text-teal-600 transition-colors">Letters</a>
                </li>
                <li className="mb-4">
                  <a href="/contact" className="hover:text-teal-600 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <li className="mb-4">
                  <a
                    href="https://drive.google.com/file/d/1kaq7-dA_vMXkBhjAGPSGRN_SfGrWoaiE/view?usp=drive_link"
                    className="hover:text-teal-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Disclosure document (PDF, opens in a new window)"
                  >
                    Disclosure document
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://smartodr.in/register"
                    className="hover:text-teal-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ODR (opens in a new window)"
                  >
                    ODR
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://drive.google.com/file/d/1KTwxBZ0Bj9rdUIu5JlRDc4jwq41FzTBF/view?usp=drive_link"
                    className="hover:text-teal-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Investor Charter (PDF, opens in a new window)"
                  >
                    Investor Charter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Grievance</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://bit.ly/xponent-complaints-status"
                    className="hover:text-teal-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Status of complaints (opens in a new window)"
                  >
                    Status of complaints
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://drive.google.com/file/d/1-472xUmiqrB5DFMn5axIsuVm6no5A6eO/view?usp=drive_link"
                    className="hover:text-teal-600 transition-colors"
                    aria-label="Investor Grievance (Send Email)"
                    target="_blank"
                  >
                    Investor Grievance
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://scores.sebi.gov.in/"
                    className="hover:text-teal-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SEBI Scores (opens in a new window)"
                  >
                    SEBI Scores
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://drive.google.com/file/d/1tDxvh_vujwtIgucxwJTFMxUlgVHv7AeX/view?usp=drive_link"
                    className="hover:text-teal-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Annexure D (PDF, opens in a new window)"
                  >
                    Annexure D
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.linkedin.com/company/xponent-tribe/"
                    className="hover:text-teal-600 transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our LinkedIn profile (opens in a new window)"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                      ></path>
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="mailto:contact@xponentribe.com"
                    className="hover:text-teal-600 transition-colors flex items-center"
                    aria-label="Email us at contact@xponentribe.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="w-5 h-5 mr-2"
                      aria-hidden="true"
                    >
                      <path
                        fill="#4caf50"
                        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                      ></path>
                      <path
                        fill="#1e88e5"
                        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                      ></path>
                      <polygon
                        fill="#e53935"
                        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                      ></polygon>
                      <path
                        fill="#c62828"
                        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                      ></path>
                      <path
                        fill="#fbc02d"
                        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                      ></path>
                    </svg>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" aria-hidden="true" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:text-teal-600 transition-colors">
              Xponent Tribe .
            </a>
            SEBI Registration No. INP000008516 . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



