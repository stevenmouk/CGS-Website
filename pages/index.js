import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import CustomAlert from "../components/CustomAlert";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
import StripeComp from "../components/StripeComp";
import Router from "next/router";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home(props) {
  useEffect(() => {
    Router.push("/");
  }, []);

  const [fade, setfade] = useState(false);
  function addHidden() {
    setfade(true);
  }
  function hideMenu() {
    setfade(false);
  }

  const [publishableKey, setPublishableKey] = useState("");
  const [firstClick, setFirstClick] = useState(true);
  const [secondClick, setSecondClick] = useState(true);
  const [thirdClick, setthirdClick] = useState(true);
  const [alert, setAlert] = useState(false);
  let searchBook = "";

  function search(event) {
    // event.preventDefault();
    // searchBook = document.getElementById("search").value;
    // props.setMainData(searchBook);
    // document.getElementById("search").value = "";
    Router.push("/results");
  }

  function handleFirstClick() {
    setFirstClick(!firstClick);
  }

  function handleSecondClick() {
    setSecondClick(!secondClick);
  }

  function handleThirdClick() {
    setthirdClick(!thirdClick);
  }

  function handleAlert() {
    setAlert(true);
  }

  function noScroll() {
    document.body.classList.add("noscroll");
  }

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CUNY Global Student</title>
        <link rel="stylesheet" href="dist/styles.css" />


      </Head>

      <div>
        {/* Navigation */}

        <nav className=" fixed flex justify-between pt-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
          <div className="flex items-center">
            {/* <img src="./dist/assets/Logo_black.svg" alt="Logo" className="h-4" />*/}

            {/* <Image src="/dist/assets/Logo_black.svg" alt="Logo" width="125" height="50" /> */}
            <div
              className="font-montserrat font-bold  text-4xl cursor-pointer"
              onClick={() => {
                Router.push("/");
              }}
            >
              CGS
            </div>
          </div>
          <ul className="font-montserrat items-center hidden md:flex">
            <li className="mx-3 ">
              <div
                className="growing-underline cursor-pointer"
                // href="#HowItWorks"
                onClick={() => {
                  Router.push("#HowItWorks");
                }}
              >
                How it works
              </div>
            </li>
            <li className="growing-underline mx-3 cursor-pointer">
              <div
                onClick={() => {
                  Router.push("#Features");
                }}
              >
                Features
              </div>
            </li>
            <li className="growing-underline mx-3 cursor-pointer">
              <div
                onClick={() => {
                  Router.push("#FAQ");
                }}
              >
                FAQ
              </div>
            </li>
          </ul>
          <div className="font-montserrat hidden md:block">
            {/* <button className="mr-6">Login</button> */}
            <button
              className="py-2 px-4 text-white bg-black rounded-3xl"
              onClick={() => {
                Router.push("/");
              }}
            >
              Home
            </button>

            {/* <StripeComp setAlert={setAlert} /> */}
          </div>
          <div id="showMenu" className="md:hidden" onClick={addHidden}>
            <img src="dist/assets/logos/Menu.svg" alt="Menu icon" />
          </div>
        </nav>
        <div
          id="mobileNav"
          // transition-all
          className={
            fade
              ? " px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20  animate-fade-in-down"
              : "hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20  animate-fade-in-down"
          }
        >
          {/*  */}
          <div id="hideMenu" className="flex justify-end">
            <img
              src="dist/assets/logos/Cross.svg"
              alt=""
              className="h-16 w-16 cursor-pointer"
              onClick={hideMenu}
            />
          </div>
          <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
            <li className="my-6 cursor-pointer" onClick={hideMenu}>
              <div
                onClick={() => {
                  Router.push("#HowItWorks");
                }}
              >
                How it works
              </div>
            </li>
            <li className="my-6 cursor-pointer" onClick={hideMenu}>
              <div
                onClick={() => {
                  Router.push("#Features");
                }}
              >
                Features
              </div>
            </li>
            <li className="my-6 cursor-pointer" onClick={hideMenu}>
              <div
                onClick={() => {
                  Router.push("#FAQ");
                }}
              >
                FAQ
              </div>
            </li>
          </ul>
        </div>

        {/* Alert */}
        <nav
          className={
            alert
              ? "fixed flex justify-center py-1 w-full  md:px-12 px-10 ml-70 content-center  z-10 "
              : "fixed flex justify-center py-1 w-full  md:px-12 px-10 ml-70 content-center  z-10 hidden"
          }
        >
          <CustomAlert />
        </nav>
        {/* Hero */}

        <section className=" pt-20 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
          <div className="md:flex-1 md:mr-10">
            <h1 className="font-pt-serif text-5xl font-bold mb-5">Search for any Book!</h1>
            <p className="font-pt-serif font-normal mb-7">
              With CUNY Global Student, you can search for any book in our database of over 11
              million free books. Simply type in the book title and click on the book you are
              looking for.
            </p>
            {/* 
            <form class="flex items-center mb-24">
              <label for="search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(e) => props.setMainData(e.target.value)}
                  value={props.mainData}
                  type="text"
                  id="search"
                  class=" h-12 text-black bg-gray-50 border border-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for book title, ISBN 10, or ISBN 13..."
                  required
                />
              </div>
              <button
                type="submit"
                class=" font-montserrat h-12 flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-black rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={search}
                id="submit-button"
              >
                Search
              </button>
            </form> */}
            <div className="font-montserrat">
              <button
                onClick={search}
                className="h-14 w-56 bg-black rounded-lg border-solid text-white mr-2 mb-2 "
              >
                Go to Library
              </button>
            </div>
          </div>
          <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
            <div className="relative">
              <img src="dist/assets/Highlight1.svg" alt="" className="absolute -top-16 -left-10" />
            </div>
            <img src="dist/assets/undraw_book_lover_re_rwjy.svg" alt="BookPhoto" className="" />

            <div className="relative">
              <img
                src="dist/assets/Highlight2.svg"
                alt=""
                className="absolute -bottom-11 -right-9"
                id="HowItWorks"
              />
            </div>
          </div>
        </section>
        {/* How it works */}

        <section className="bg-black text-white sectionSize">
          <div>
            <h2 className="secondaryTitle  bg-100%">How it works</h2>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mx-8 flex flex-col items-center my-4">
              <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
                1
              </div>
              <h3 className="font-montserrat font-medium text-xl mb-2">Click</h3>
              <p className="text-center font-montserrat">Go to the Library.</p>
            </div>
            <div className="flex-1 mx-8 flex flex-col items-center my-4">
              <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
                2
              </div>
              <h3 className="font-montserrat font-medium text-xl mb-2">Search</h3>
              <p className="text-center font-montserrat">
                Search for any book you would like to read.
              </p>
            </div>
            <div className="flex-1 mx-8 flex flex-col items-center my-4">
              <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
                3
              </div>
              <h3 className="font-montserrat font-medium text-xl mb-2">Enjoy</h3>
              <p className="text-center font-montserrat" id="Features">
                Click on the cover of your desired book and read the pdf or download.
              </p>
            </div>
          </div>
        </section>
        {/* Features */}
        <section className="sectionSize bg-secondary">
          <div>
            <h2 className="secondaryTitle bg-100%">Features</h2>
          </div>
          <div className="md:grid md:grid-cols-2 md:grid-rows-2">
            <div className="flex items-start font-montserrat my-6 mr-10">
              <img src="dist/assets/logos/Heart.svg" alt="" className="h-7 mr-4" />
              <div>
                <h3 className="font-semibold text-2xl">Feature #1</h3>
                <p>We offer over 11 million books to be downloaded completely for free.</p>
              </div>
            </div>
            <div className="flex items-start font-montserrat my-6 mr-10">
              <img src="dist/assets/logos/Heart.svg" alt="" className="h-7 mr-4" />
              <div>
                <h3 className="font-semibold text-2xl">Feature #2</h3>
                <p>We are a non-profit working with the Clinton Global Initiative Foundation.</p>
              </div>
            </div>
            <div className="flex items-start font-montserrat my-6 mr-10">
              <img src="dist/assets/logos/Heart.svg" alt="" className="h-7 mr-4" />
              <div>
                <h3 className="font-semibold text-2xl">Feature #3</h3>
                <p>We work to solve United Nations Goal #4: A quality education for all by 2030.</p>
              </div>
            </div>
            <div className="flex items-start font-montserrat my-6 mr-10">
              <img src="dist/assets/logos/Heart.svg" alt="" className="h-7 mr-4" />
              <div>
                <h3 id="FAQ" className="font-semibold text-2xl">
                  Feature #4
                </h3>
                <p>
                  We seek to offer all students around the world a quality education despite their
                  financial status.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing */}
        {/* <section className="sectionSize bg-secondary py-0">
          <div>
            <h2 className="secondaryTitle mb-0 bg-100%">Pricing</h2>
          </div>
          <div className="flex w-full flex-col md:flex-row">
            <div className="flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24">
              <h3 className="font-pt-serif font-normal text-2xl mb-4">The Good</h3>
              <div className="font-montserrat font-bold text-2xl mb-4">
                $25
                <span className="font-normal text-base"> / month</span>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #1</p>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #2</p>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #3</p>
              </div> */}
        {/* <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
                Choose plan
              </button> */}
        {/* </div>
            <div className="flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-12">
              <h3 className="font-pt-serif font-normal text-2xl mb-4">The Bad</h3>
              <div className="font-montserrat font-bold text-2xl mb-4">
                $40
                <span className="font-normal text-base"> / month</span>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #1</p>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #2</p>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #3</p>
              </div>
              <button
                className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4"
                onClick={handleAlert}
              >
                Choose plan
              </button>
            </div>
            <div className="flex-1 flex flex-col mx-6 shadow-2xl relative bg-secondary rounded-2xl py-5 px-8 my-8 md:top-24">
              <h3 className="font-pt-serif font-normal text-2xl mb-4">The Ugly</h3>
              <div className="font-montserrat font-bold text-2xl mb-4">
                $50
                <span className="font-normal text-base"> / month</span>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #1</p>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #2</p>
              </div>
              <div className="flex">
                <img src="dist/assets/logos/CheckedBox.svg" alt="" className="mr-1" />
                <p>Benefit #3</p>
              </div>
              <button className=" border-2 border-solid border-black rounded-xl text-lg py-3 mt-4">
                Choose plan
              </button>
            </div>
          </div>
        </section> */}
        {/* FAQ  */}
        <section className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
          <div>
            <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">FAQ</h2>
          </div>
          <div toggleelement="" className="w-full py-4 ">
            <div className="flex justify-between items-center ">
              <div question="" className="font-montserrat font-medium mr-auto ">
                Why did I create this Website?
              </div>
              <img
                src="dist/assets/logos/CaretRight.svg"
                alt=""
                className={
                  firstClick
                    ? "transform transition-transform cursor-pointer ease-in duration-200"
                    : "transform transition-transform cursor-pointer ease-in duration-200 rotate-90"
                }
                onClick={handleFirstClick}
              />
            </div>
            <div
              answer=""
              className={
                firstClick
                  ? " font-montserrat text-sm font-extralight pb-8 hidden ease-in duration-200"
                  : " font-montserrat text-sm font-extralight pb-8 ease-in duration-200"
              }
            >
              I stuggled getting affordable textbooks and didn't want other students to have to go
              though the same stuggle. So I made this website and partnered with the Clinton
              Foundation to make it possible.
            </div>
          </div>
          <hr className="w-full bg-white" />
          <div toggleelement="" className="w-full py-4">
            <div className="flex justify-between items-center">
              <div question="" className="font-montserrat font-medium mr-auto">
                How do you access the books.
              </div>
              <img
                src="dist/assets/logos/CaretRight.svg"
                alt=""
                className={
                  secondClick
                    ? "transform transition-transform cursor-pointer ease-in duration-200"
                    : "transform transition-transform cursor-pointer ease-in duration-200 rotate-90"
                }
                onClick={handleSecondClick}
              />
            </div>
            <div
              answer=""
              className={
                secondClick
                  ? " font-montserrat text-sm font-extralight pb-8 hidden ease-in duration-200"
                  : " font-montserrat text-sm font-extralight pb-8 ease-in duration-200"
              }
            >
              We use a combination of databases with free books and search the web for pdf downloads
              of the books you are looking for.
            </div>
          </div>
          <hr className="w-full bg-white" />
          <div toggleelement="" className="w-full py-4">
            <div className="flex justify-between items-center">
              <div question="" className="font-montserrat font-medium mr-auto">
                What is you mission
              </div>
              <img
                src="dist/assets/logos/CaretRight.svg"
                alt=""
                className={
                  thirdClick
                    ? "transform transition-transform cursor-pointer ease-in duration-200"
                    : "transform transition-transform cursor-pointer ease-in duration-200 rotate-90"
                }
                onClick={handleThirdClick}
              />
            </div>
            <div
              answer=""
              className={
                thirdClick
                  ? " font-montserrat text-sm font-extralight pb-8 hidden ease-in duration-200"
                  : " font-montserrat text-sm font-extralight pb-8 ease-in duration-200"
              }
            >
              We hope to solve United Nation Goal #4: A quality education for all by 2030.
            </div>
          </div>
          <hr className="w-full bg-white" />
        </section>
        {/* Footer */}
        <section className="bg-black sectionSize">
          <div className="mb-4">
            {/* <img src="dist/assets/Logo_white.svg" alt="Logo" className="h-4" /> */}
          </div>
          <div className="flex mb-8">
            <a href="https://github.com/stevenmouk?tab=repositories">
              {/* <img src="dist/assets/logos/Facebook.svg" alt="Facebook logo" className="mx-4" /> */}
              <BsGithub className="mx-4 text-white text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/stevenmouk/">
              {/* <img src="dist/assets/logos/Youtube.svg" alt="Youtube logo" className="mx-4" /> */}
              <BsLinkedin className="mx-4 text-white text-xl" />
            </a>
            {/* <a href="#">
              <img src="dist/assets/logos/Instagram.svg" alt="Instagram logo" className="mx-4" />
            </a>
            <a href="#">
              <img src="dist/assets/logos/Twitter.svg" alt="Twitter logo" className="mx-4" />
            </a> */}
          </div>
          <div className="text-white font-montserrat text-sm">
            © 2022 CUNY Global Student. All rights reserved
          </div>
        </section>
      </div>
    </div>
  );
}
