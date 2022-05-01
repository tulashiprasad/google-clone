import React from "react";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import response from "../response";
import { NavLink } from "react-router-dom";
import Search from "../pages/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
    const { data } = useGoogleSearch(term);
    // MOCK API CALL
//   const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <NavLink to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=" google search"
          />
        </NavLink>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <NavLink to="/all">all</NavLink>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <NavLink to="/news">news</NavLink>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <NavLink to="/images">images</NavLink>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <NavLink to="/shopping">shopping</NavLink>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <NavLink to="/maps">Maps</NavLink>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <NavLink to="/more">more</NavLink>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <NavLink to="/settings">Settings</NavLink>
              </div>
              <div className="searchPage__option">
                <NavLink to="/tools">Toosl</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
              <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link} >
                      {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && 
                          (
                          <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src } alt="" />
                      )}
                  </a>
                  <a href={item.link}>{item.displayLink} ▽</a>


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
