import { Link } from "react-router-dom";

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
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li className="mynavbar-list-item">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li className="mynavbar-list-item">
          <Link className="link" to="/skills">
            Skills
          </Link>
        </li>
        <li className="mynavbar-list-item">
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="mynavbar-list-item">
          <Link className="link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default LaptopView;
