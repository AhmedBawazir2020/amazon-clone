import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>


      <div className="header__search">
        <input className="header__searchInput" type="texr" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <dvi onClick={handleAuthentication} className=" header__option">
            <span className="header__optionLineOne"><h3>Hello, {!user ? 'Guest':user?.email}</h3> </span>

            <span className="header__optionLineTwo">{user ?
              'Sign Out' : 'Sign In'}</span>
          </dvi>
        </Link>
        <Link to='/orders'>
        <dvi className="header__option">
          <span className="header__optionLineOne">Returns</span>

          <span className="header__optionLineTwo">&Orders</span>
        </dvi>
        </Link>


        <dvi className="header__option">
          <span className="header__optionLineOne">Your</span>

          <span className="header__optionLineTwo">Prime</span>
        </dvi>
        <Link to="/chechout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__optionBasket header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
