import React from "react";
import { NavLink } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../pages/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <NavLink to="/zbout"> About </NavLink>
          <NavLink to="/store"> Store </NavLink>
        </div>
        <div className="home__headerRight">
          <NavLink to="/gmail"> Gmail </NavLink>
          <NavLink to="/images"> Images </NavLink>
          <AppsIcon />
          <Avatar />
          {/* 
                  avatar  */}
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google image"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
