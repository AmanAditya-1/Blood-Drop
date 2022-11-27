import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import AppBar from "@mui/material/AppBar";

import "./Navbar.css";


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar() {

  return (
    <HideOnScroll>
      <AppBar sx={{ backgroundColor: "white" }}>
        <nav>
          <a href="/">
            <img
              id="logo"
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt="logo"
            />
          </a>
          <div id="mySidenav" className="sidenav">
            <>
              <button
                onClick={(e) => {
                  window.open("/donor/form", "_self");
                }}
              >
                DONATE
              </button>
              <button
                onClick={(e) => {
                  window.open("/request/form", "_self");
                }}
              >
                REQUEST
              </button>
              <button
                onClick={(e) => {
                  window.open("/login", "_self");
                }}
              >
                LOGIN
              </button>
              <button
                onClick={(e) => {
                  window.open("/signup", "_self");
                }}
              >
                SIGN UP
              </button>
            </>
          </div>
        </nav>
      </AppBar>
    </HideOnScroll>
  );
}
