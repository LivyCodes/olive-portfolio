import React from "react";
import "./About.css";
import ProfilePhoto from "./imgs/img1.jpeg";

function About() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col text-center">
            <h3>About Olive Wakamwe [Developer Edition]</h3>
            <p className="dev-para">
              Welcome to my portfolio! I'm Olive Wakamwe, a passionate front-end
              developer dedicated to crafting immersive and engaging web
              experiences. With a solid foundation in HTML, CSS, and JavaScript,
              I specialize in turning design concepts into pixel-perfect and
              intuitive interfaces. I take pride in writing clean and efficient
              code, following best practices to ensure optimal performance and
              maintainability. Collaborating with talented designers and
              back-end developers, I bring projects to life with a meticulous
              attention to detail. With a constant thirst for learning, I stay
              up-to-date with the latest front-end technologies and trends,
              always striving to deliver cutting-edge solutions. I thrive on
              effective communication, working seamlessly in teams to solve
              challenges and exceed client expectations. By combining my
              technical expertise, creativity, and a user-centric approach, I
              aim to create memorable and delightful experiences that leave a
              lasting impact. Explore my portfolio to see examples of my work
              and let's connect to discuss how we can collaborate on your next
              exciting project.
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

export default About;
