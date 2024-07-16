'use client'

import { useState } from 'react';

const HeroView = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
 
  return (
    <div>
      <div className="bg-teal-900 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-lg xl:max-w-xl mx-auto lg:mx-0 py-24">
            <div className="flex mb-6 items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="12" height="12" rx="2" fill="#BEF264"></rect>
              </svg>
              <span className="ml-2 text-sm font-medium text-white">Powering Tomorrow</span>
            </div>
            <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight text-white mb-8">
              Search the web, plant trees.
            </h1>
            <p className="max-w-md xl:max-w-none text-lg text-white mb-10">
              EcoSearch is launching soon, and we can’t wait for you to join us. Sign up now to be the first to know when we go live and start making a difference with every search.
            </p>
            <div className="flex flex-col sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-black border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center absolute top-0 right-0 h-full max-w-lg xl:max-w-none xl:w-2/5 p-3 ml-auto">
          <img
            className="absolute bottom-0 left-0 -ml-16"
            src="https://file-hosting.dashnexpages.net/blog-webready/../..//flow-assets/headers/card-small.png"
            alt=""
          />
          <img
            className="block xl:h-full mx-auto"
            src="https://file-hosting.dashnexpages.net/blog-webready/images/undraw-together-re-a8x4-1.svg"
            alt=""
          />
        </div>
      </div>
      <div className={`fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
        <div
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="fixed inset-0 bg-violet-900 opacity-20"
        ></div>
        <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex items-center justify-between">
            <img
              className="h-12"
              src="https://ecosearch.oasisofchange.org/images/ecosearch-2.svg"
              alt=""
            />
            <div className="flex items-center">
              <button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2 8.79999L8.80005 23.2M8.80005 8.79999L23.2 23.2"
                    stroke="#1D1F1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="custom-shape-divider-top-1719589226">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};

export default HeroView;
