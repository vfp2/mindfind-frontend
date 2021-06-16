import React from "react";
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

  const trulyLucky = (e) => {
    e.preventDefault();

    history.push("/trulylucky");
  };

  const pseudoLucky = (e) => {
    e.preventDefault();

    history.push("/pseudolucky");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchRoundedIcon />
        <input disabled={true} placeholder="Type nothing. Think your intent and Find!" />
      </div>
      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={search} varient="outlined">
            Find with Mind
          </Button>
          <Button type="submit" onClick={trulyLucky} varient="outlined">
            I'm Feeling Truly Lucky
          </Button>
          <Button type="submit" onClick={pseudoLucky} varient="outlined">
            I'm Feeling Pseudo Lucky
          </Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            varient="outlined">
            Mind Find
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            I'm Feeling Truly Lucky
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            I'm Feeling Pseudo Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
