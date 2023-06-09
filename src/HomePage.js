import React from "react";
import "./HomePage.css";
import HomeContent from "./HomeContent";
import ProfilePhoto from "./imgs/img1.jpeg";

function HomePage() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col ">
            <HomeContent />
          </div>
          <div className="wrapper col-5 text-center">
            <img
              className="circular-photo"
              src={ProfilePhoto}
              alt="my Photoo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
