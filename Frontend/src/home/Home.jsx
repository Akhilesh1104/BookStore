import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Freebook from "../Components/Freebook";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <div className="mb-48 mt-10">
        <div className="flex flex-row justify-center">
          <Link to="/course" className="btn btn-outline btn-secondary">
            View all
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
