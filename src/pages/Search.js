import React from "react";
import "./Search.css";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Search = ({ hideButtons = false }) => {
  const history = useHistory();

  const webSearch = (e) => {
    e.preventDefault();

    history.push("/websearch");
  };

  const trueTerms = (e) => {
    e.preventDefault();

    history.push("/trueterms");
  };

  const intentSuggestions = (e) => {
    e.preventDefault();

    history.push("/intentsuggestions");
  };

  const pseudoTerms = (e) => {
    e.preventDefault();

    history.push("/pseudoterms");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchRoundedIcon />
        <input disabled={true} placeholder="Think your intent and choose your find. No need to type." />
      </div>
      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={webSearch} varient="outlined">
            Web Search
          </Button>
          <Button type="submit" onClick={trueTerms} varient="outlined">
            True Terms
          </Button>
          <Button type="submit" onClick={intentSuggestions} varient="outlined">
            Intent Suggestions
          </Button>
          <Button type="submit" onClick={pseudoTerms} varient="outlined">
            Pseudo Terms
          </Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={webSearch}
            varient="outlined">
            Web Search
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            True Terms
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            Intent Suggestions
          </Button>
          <Button className="search__buttonsHidden" varient="outlined">
            Pseudo Terms
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
