import React from "react";

import { SubHeading } from "../../components/index";

import "./Header.css";

function Header() {
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Beauty Shine All" />
        <h1 className="app__header-h1">The Key To Look Great</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Our Products
        </button>
      </div>

      <div className="app__wrapper_img">
        <img
          src="https://www.dailyneeds247.com/wp-content/uploads/2020/05/Ponds-White-Beauty-Naturals-Lg-Cream-25Gm-1.jpg"
          alt="header_img"
        />
      </div>
    </div>
  );
}

export default Header;
