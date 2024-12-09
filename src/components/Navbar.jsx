import React from "react";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li className="active">
            <a href="#">Flights</a>
          </li>
          <li>
            <a href="#">Hotels</a>
          </li>
          <li>
            <a href="#">Holiday Rentals</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
