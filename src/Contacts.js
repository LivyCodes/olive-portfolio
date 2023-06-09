import React from "react";
import ProfilePhoto from "./imgs/img1.jpeg";

function Contacts() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col text-center">
            <h3>My Contacts</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
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

export default Contacts;
