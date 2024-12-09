import React from "react";

const Header = () => {
  return (
    <header className=" fixed w-full top-0 z-[999]">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/flights">Flights</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
