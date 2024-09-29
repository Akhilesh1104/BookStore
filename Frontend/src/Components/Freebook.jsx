import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-2xl font-semibold pb-2">
            {" "}
            Free Offered Courses :
          </h1>
          <p className="my-3 text-xl">
            Stories have the power to transport us to different worlds,
            introduce us to fascinating characters, and evoke a wide range of
            emotions. I hope this inspires you to dive into a good book! Explore
            our free section of our BookStore if you like it then visit our
            Course Section where you will find more intresting books...{" "}
          </p>
        </div>
        <br />
        <br />
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

export default Freebook;
