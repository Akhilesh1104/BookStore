import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto px-4 md:px-20">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :) </span>
          </h1>
          <p className="mt-10 text-xl">
            Reading is more than just a pastime; it’s a gateway to endless
            possibilities. So, pick up a book, turn the pages, and let yourself
            be carried away by the magic of reading. I hope this inspires you to
            dive into a good book! What kind of books do you enjoy reading?
          </p>
          <Link to="/">
            <button className="btn btn-outline btn-secondary my-10">
              Back
            </button>{" "}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Course;
