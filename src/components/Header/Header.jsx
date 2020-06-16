import React from "react";
import "./header.scss";
import logoSvg from "../../assets/images/header-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logoSvg} alt="logo" />
      <h1 className="header__title">Dota 2 api</h1>
      <img className="header__logo" src={logoSvg} alt="logo" />
    </div>
  );
};

export default Header;
