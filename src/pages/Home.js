import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="https://forum.fp2.dev">MMI Forum</Link>
        </div>
        <div className="home__headerRight">
          <Link to="https://www.github.com/vfp2">Code</Link>
        </div>
      </div>
      <div className="home__body">
        <img alt="Mindfind logo" src="logo192.png" />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
