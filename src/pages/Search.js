import React, { useState } from "react";
import "./Search.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Search = ({ hideButtons = false }) => {
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchRoundedIcon />
        <input disabled={true} placeholder="No need to type. Just set your intent and Find!" />
      </div>
      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={search} varient="outlined">
            Mind Find
          </Button>
          <Button varient="outlined">I'm Feeling Random</Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            varient="outlined"
          >
            Mind Find
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            I'm Feeling Random
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
