import React from "react";
import useGoogleSearch from "../components/useGoogleSearch";
import useMindfind from "../components/useMindfind";
import Response from "../components/response";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "./Search";
import {
  SearchRounded,
  VideocamRounded
} from "@material-ui/icons";
import ImageIcon from "@material-ui/icons/Image";

const SearchPage = () => {
  // const { data } = useGoogleSearch("mind matter interaction");
  const { data } = useMindfind();
  //Mock API Call
  // const data = Response;

  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="/logo192.png"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchRounded />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <VideocamRounded />
                <Link to="/videos">Videos</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            {data?.searchInformation.formattedTotalResults} hits from {data?.searchInformation.formattedTotalSizeScanned} (
            {data?.searchInformation.formattedSearchTime} seconds) for your intent
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                    />
                  )}
                {item.displayLink} ▽
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
