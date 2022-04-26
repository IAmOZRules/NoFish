import React, { useState } from "react";
import Logo from "../../icon.png";
import { Button } from "@mui/material";

function Header(props) {
  return (
    <div className="header">
      <div className="about-project">
        <img src={Logo} alt="Logo" />
        <h1>NoFish - A Malicious URL Detector</h1>
      </div>
      <div className="project-links">
        <a href="https://github.com/IAmOZRules/NoFish" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github"></i>
          <Button className="linkbutton" variant="contained" color="primary"> GitHub </Button>
        </a>
      </div>
    </div>
  );
}

export default Header;
