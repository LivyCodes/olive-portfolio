import React from "react";
import "./HomeContent.css";

function HomeContent() {
  return (
    <div>
      <div className="heads">
        <h1>
          HI, I'M <span>OLIVE</span>
        </h1>
        <h3>Passionate Front-End Developer</h3>
      </div>

      <div className="para">
        <p className="mb-1">💻Freelance Front-End Developer</p>
        <p className="mb-1">📍Based in Eldoret, Kenya</p>
        <p className="mb-1">
          👩‍🏫Web Development and Javascript instructor at Code First Girls
        </p>
        <p className="mb-1">📧njerio86@gmail.com</p>
      </div>
    </div>
  );
}

export default HomeContent;
