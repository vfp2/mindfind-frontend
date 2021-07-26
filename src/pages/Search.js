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
        <input disabled={true} placeholder="Type nothing. Find by thinking!" />
      </div>
      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={search} varient="outlined">
            Mindfind
          </Button>
          <Button type="submit" onClick={trulyLucky} varient="outlined">
            Truly Lucky
          </Button>
          <Button type="submit" onClick={pseudoLucky} varient="outlined">
            Pseudo Lucky
          </Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            varient="outlined">
            Mindfind
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            Truly Lucky
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            Pseudo Lucky
          </Button>
        </div>
      )}
      <br/>
      <center>
        <i>Mindfind</i> - set your intent to search the whole web<br/>
        <i>Truly Lucky</i> - for those feeling like true random search terms<br/>
        <i>Pseudo Lucky</i> - search terms generated pseudorandomly<br/>
      </center>
    </form>
  );
};

export default Search;
