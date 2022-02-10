import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { useFavor } from "../../contexts/FavorContext";
import { useQuery } from "react-query";

import { fetchProductList } from "../../api";

function Navbar() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { loggedIn, user } = useAuth();
  const { items } = useBasket();
  const { favors, myHearthSvg, myCartSvg, myProfileSvg } = useFavor();

  const { isLoading, error } = useQuery("products", fetchProductList);
  if (isLoading) return "Loading...";
  if (error) return "an aerror occured";

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img
          src="https://img.freepik.com/free-psd/logo-mockup_35913-2089.jpg?size=626&ext=jpg"
          alt="app__logo"
        />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Products</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="p__opensans">
        {!loggedIn && (
          <>
            <Link to="/signin">
              <Button className="registerBtns">Login</Button>
            </Link>
            <Link className="registerLink" to="/signup">
              <Button className="registerBtns">Register</Button>
            </Link>
          </>
        )}
        {loggedIn && (
          <>
            {favors.length > 0 && (
              <Link to="/favor">
                <Button colorScheme="gold" variant="outline">
                  {myHearthSvg}
                  <sup>{favors.length}</sup>
                </Button>
              </Link>
            )}
            {items.length > 0 && (
              <Link to="/basket">
                <Button colorScheme="gold" variant="outline">
                  {myCartSvg} <sup>{items.length}</sup>
                </Button>
              </Link>
            )}
            {user?.role === "admin" && (
              <Link to="/admin">
                <Button colorScheme="gold" variant="outline" fontSize="small">
                  Admin
                </Button>
              </Link>
            )}
            <Link to="/profile">
              <Button colorScheme="gold">{myProfileSvg}</Button>
            </Link>
          </>
        )}
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          cursor="pointer"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              color="gold"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Awards
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
