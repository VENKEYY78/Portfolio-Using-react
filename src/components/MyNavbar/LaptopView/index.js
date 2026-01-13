import { NavLink } from "react-router-dom";

// import { Nav } from "react-bootstrap";

import "./index.css";

const LaptopView = () => (
  <div className="mynavbar-main-bg-container">
    <div className="nav-image-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9b_u54JNRxi87Sk4eVhIzrB3B8AJAWMNqw&s"
        alt="nav-profile--icon-img"
        className="nav-profile-icon-img"
      />
      <h1 className="portfolio-heading">Venkatesh Joka</h1>
    </div>
    <div className="mynavbar-list-item-container">
      <ul className="mynavber-list-items-container">
        <li className="mynavbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "link Active" : "link")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mynavbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "link Active" : "link")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="mynavbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "link Active" : "link")}
            to="/skills"
          >
            Skills
          </NavLink>
        </li>
        <li className="mynavbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "link Active" : "link")}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="mynavbar-list-item">
          <NavLink
            className={({ isActive }) => (isActive ? "link Active" : "link")}
            to="/contact"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default LaptopView;
