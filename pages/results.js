import React from "react";
import Image from "next/image";
import { searchBook } from "../pages/index";
import axios from "axios";
import cheerio from "cheerio";
import { useState, useEffect } from "react";
import StripeComp from "../components/StripeComp";

import Router from "next/router";

export default function Results(props) {
  const [opened, setOpened] = useState(false);
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    props.setMainData(window.sessionStorage.getItem("searchBook"));

    setSearched(JSON.parse(window.sessionStorage.getItem("books")));
    search3();
  }, []);

  let trimString = function (string, length) {
    return string.length > length ? string.substring(0, length) + "..." : string;
  };

  function bookSearch(props) {
    let url2 = "";

    console.log(props);

    fetch("/api/bookapi", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(`${props}`),
    }).then(async (response) => {
      var html2 = await response.json();
      html2 = html2.result;

      let $2 = cheerio.load(html2);

      $2("#previewButtonMain", html2).each(function () {
        url2 = $2(this).attr("data-preview");

        Router.push(`https://www.pdfdrive.com${url2}`);
      });
    });
  }

  function search3() {
    document.getElementById("search2").value = "";
    document.getElementById("hero").classList.remove("md:h-screen");
    document.getElementById("hero").classList.remove("text-center");
    document.getElementById("hero").classList.add("h-96");
    document.getElementById("form").classList.remove("pb-60");
    document.getElementById("form").classList.add("pb-0");
    document.getElementById("hero").classList.add("text-bottom");
  }

  function search2(event) {
    // Router.push("https://www.pdfdrive.com/money-books.html");
    event.preventDefault();

    searchBook = props.mainData;
    props.setMainData(searchBook);

    window.sessionStorage.setItem("searchBook", searchBook);
    let books = [];
    search3();

    console.log(props.mainData);
    fetch("/api/newsArticleApi", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(`${props.mainData}`),
    }).then(async (response) => {
      var html = await response.json();
      html = html.result;

      let $ = cheerio.load(html);

      $(".col-sm", html).each(function () {
        let image = $(this).find(".file-left").find(".img-zoom").attr("src");
        let title = $(this).find(".file-right").find("a").find("h2").text().trim();
        let url = $(this).find(".file-right").find("a").attr("href");

        books.push({
          image,
          title,
          url,
        });
      });

      setSearched(books);

      window.sessionStorage.setItem("books", JSON.stringify(books));
      setOpened(true);
    });
  }

  return (
    //  Navagation
    <div>
      <nav className=" fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
        <div className="flex items-center">
          {/* <img src="./dist/assets/Logo_black.svg" alt="Logo" className="h-4" /> */}

          {/* <Image src="/dist/assets/Logo_black.svg" alt="Logo" width="125" height="50" /> */}
          <div
            className="font-montserrat font-bold text-4xl cursor-pointer"
            onClick={() => {
              Router.push("/");
            }}
          >
            CGS
          </div>
        </div>

        <div className="font-montserrat ">
          <button
            className="py-2 px-4 text-white bg-black rounded-3xl"
            onClick={() => {
              Router.push("/");
            }}
          >
            Home
          </button>
        </div>
        {/* <div id="showMenu" className="md:hidden">
          <img src="dist/assets/logos/Menu.svg" alt="Menu icon" />
        </div> */}
      </nav>
      {/* <div
        id="mobileNav"
        className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down"
      >
        <div id="hideMenu" className="flex justify-end">
          <img src="dist/assets/logos/Cross.svg" alt="" className="h-16 w-16" />
        </div>
        <ul className="font-montserrat flex flex-col mx-8 my-24 items-center text-3xl">
          <li className="my-6">
            <a href="howitworks">How it works</a>
          </li>
          <li className="my-6">
            <a href="features">Features</a>
          </li>
          <li className="my-6">
            <a href="pricing">Pricing</a>
          </li>
        </ul>
      </div> */}

      {/* Hero */}
      <section
        id="hero"
        className=" md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary "
      >
        <div className="md:flex-1 md:mr-10">
          <h1 className="font-pt-serif text-5xl font-bold mb-5">Book Search</h1>
          <p className="font-pt-serif font-normal mb-7">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum tempore
            consectetur voluptas, cumque nobis laboriosam voluptatem. */}
          </p>

          <form id="form" class="flex justify-center items-end pb-60">
            <label for="search2" class="sr-only ">
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
                type="text"
                id="search2"
                class=" h-12 text-black bg-gray-50 border border-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for any book title"
                required
              />
            </div>
            <button
              type="submit"
              class=" font-montserrat h-12 flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-black rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={search2}
              id="submit-button"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <ul className="h-full flex-col items-center bg-secondary">
        {searched ? (
          searched.map((book) => (
            <div
              className="book read "
              onClick={() => {
                bookSearch(book.url);
              }}
            >
              <div className="cover">
                <img src={book.image} />
              </div>
              <div className="description ">
                <p className="title font-montserrat ">{trimString(book.title, 90)}</p>
              </div>
            </div>
          ))
        ) : (
          <div className=""></div>
        )}
      </ul>
    </div>
  );
}
