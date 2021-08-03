import React from "react";
import useMindfind from "../components/useMindfind";
// import Response from "../components/response";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "./Search";
import {
  SearchRounded,
  VideocamRounded
} from "@material-ui/icons";
import ImageIcon from "@material-ui/icons/Image";

const moment = require('moment');
const prettyBytes = require('pretty-bytes');

const SearchPage = () => {
  const { 
    intentData,
    linkData1,
    linkData2,
    linkData3,
    linkData4,
    linkData5,
    linkData6,
    linkData7,
    linkData8,
    linkData9,
    linkData10
   } = useMindfind();
  //Mock API Call
  // const data = Response;

  var linkDatas = [
    linkData1,
    linkData2,
    linkData3,
    linkData4,
    linkData5,
    linkData6,
    linkData7,
    linkData8,
    linkData9,
    linkData10
  ];

  var i = 0;

  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="/logo192.png"
            alt="Mindfind logo"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchRounded />
                <Link to="/all">Web Search</Link>
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
            {linkDatas.reduce((a, b) => {
              let bv = b?.searchInformation?.totalResults;
              if (!bv) bv = 0;
              return a + bv;
             }, 0)} hits from {prettyBytes(linkDatas.reduce((a, b) => {
              let bv = b?.searchInformation?.totalBytesScanned;
              if (!bv) bv = 0;
              return a + bv;
             }, 0))} (
            {moment.utc(linkDatas.reduce((a, b) => {
              let bv = b?.searchInformation?.totalMillisTaken;
              if (!bv) bv = 0;
              return a + bv;
             }, 0)).format('HH:mm:ss:SSS')} time taken) for your intent
          </p>

          {intentData?.results.map((intent) => (
            <div className="searchPage__result">
              <a href={'https://' + linkDatas?.[i]?.items[0].displayLink} target="_blank" rel="noopener noreferrer">
                {linkDatas?.[i]?.items[0].pagemap?.cse_image?.length > 0 &&
                  linkDatas?.[i]?.items[0].pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={linkDatas?.[i]?.items[0].pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {linkDatas?.[i]?.items[0].displayLink}
              </a> ▽
              <a className="searchPage__resultTitle" href={linkDatas?.[i]?.items[0].link} target="_blank" rel="noopener noreferrer">
                <h2>{linkDatas?.[i]?.items[0].title}</h2>
              </a>
              <p className="searchPage__resultSnippet">
                {linkDatas?.[i]?.items[0].snippet}
              </p>
              <p className="searchPage__resultCount">
                No. {(i++) + 1} | z-score: {intent.zScore?.toFixed(4)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
