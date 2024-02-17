import React from "react";
import "./about.scss";
import { Divider, Stack } from "@mui/material";

const About = () => {
  return (
    <div className="about-wrapper">
      <h2>About</h2>
      <p>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam,{" "}
      </p>
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        justifyContent="space-evenly"
      >
        <div className="about-counter">
          <h3>
            <span>Post</span>1.3k
          </h3>
        </div>
        <div className="about-counter">
          <h3>
            <span>Following</span>3,154
          </h3>
        </div>
        <div className="about-counter">
          <h3>
            <span>Followers</span>2,054
          </h3>
        </div>
      </Stack>
      <ul className="about-details">
        <li>
          <img src="/assets/images/location-icon.svg" alt="location-icon" />
          Yogyakarta, ID
        </li>
        <li>
          <img src="/assets/images/heart-plus-icon.svg" alt="heart-plus-icon" />
          Single
        </li>
        <li>
          <img src="/assets/images/calendar-icon.svg" alt="calendar-icon" />
          Joined June 2012
        </li>
        <li>
          <img src="/assets/images/website-icon.svg" alt="website-icon" />
          <a href="#">dribble.com/fawait</a>
        </li>
        <li>
          <img src="/assets/images/work.svg" alt="work" />
          Working at <a href="#"> Sebo Studio</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
