import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <p className="codes">{"<OliveWakamwe />"}</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/About" title="about me">
                  ABOUT
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Projects" title="my projects">
                  PROJECTS
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Contacts" title="contact me">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
