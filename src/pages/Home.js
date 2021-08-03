import React from "react";
import "./Home.css";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <a href="https://forum.fp2.dev">fp2.dev MMI Forum</a>
        </div>
        <div className="home__headerRight">
          <a href="https://www.github.com/vfp2">Source Code</a>
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
