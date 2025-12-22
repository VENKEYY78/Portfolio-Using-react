import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

import "./index.css";

const MobileView = () => {
  const [menuOption, setMenuOption] = useState("menu-close");
  const MenuSection = () => {
    setMenuOption((prev) =>
      prev === "menu-close" ? "menu-open" : "menu-close"
    );
  };

  return (
    <>
      <div className="Mynavbar-MobileView">
        <div className="top-section">
          <button type="button" className="menu-button" onClick={MenuSection}>
            <FaBars className="mobile-Nav-Icon" />
          </button>
          <h1 className="mobile-name">Venkatesh Joka</h1>
        </div>
      </div>

      {menuOption === "menu-open" && (
        <div className="menu-overlay" onClick={MenuSection}></div>
      )}

      <ul className={`side-menu-container ${menuOption}`}>
        <li>Venkatesh</li>
        <li>Venkatesh</li>
        <li>Venkatesh</li>
        <li>Venkatesh</li>
        <li>Venkatesh</li>
        <li>Venkatesh</li>
      </ul>
    </>
  );
};

export default MobileView;
