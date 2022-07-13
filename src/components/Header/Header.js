import React from "react";
import "../Header/Header.scss"
import logo from "../../assets/logo.png"
import search from "../../assets/search.png"
import purchase from "../../assets/purchase.png"

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-container">
            <img className="header__logo" src={logo} alt="Page Logo" />

        </div>
        <nav className="header__nav-container">
          <ul className="header__menu">
            <li className="header__store">Store</li>
            <li className="header__mac">Mac</li>
            <li className="header__ipad">iPad</li>
            <li className="header__iPhone">iPhone</li>
            <li className="header__watch">Watch</li>
            <li className="header__airpods">AirPods</li>
            <li className="header__tv-home">TV & Home</li>
            <li className="header__apple-only">Only on Apple</li>
            <li className="header__accessories">Accessories</li>
            <li className="header__support">Support</li>
            <img  className="header__search" src={search} alt="search"/>
            <img className="header__purchase"  src={purchase} alt="purchase"/>
          </ul>
        </nav>
      </div>
    </header>
  );
}
