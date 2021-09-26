import React, { useState } from "react";
import "./navbar.scss";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

const Navbar = () => {
  //the initial state is going to be false, dmth pa e bo scroll sbohet black.
  const [isScrolled, setIsScrolled] = useState(false);
  //whenever we scroll, is gonna run this function
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    //cleanup function se perndryshe bohet loop
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <MovieIcon />
          <Link to='/' className='link'>
          <span>HomePage</span>
          </Link>
          <Link to='/series' className='link'>
          <span>Series</span>
          </Link>
          <Link to='/movies' className='link'>
          <span>Movies</span>
          </Link>
          <Link to="/dashboard" className="link">
            <span>Dashboard</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>Kid</span>
          <AccountCircleIcon className="icon" />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
