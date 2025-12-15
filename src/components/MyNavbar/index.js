import { Nav } from "react-bootstrap";

import "./index.css";

const MyNavbar = () => (
  <Nav>
    <div className="mynavbar-main-bg-container">
      <h1 className="portfolio-heading">Venkatesh Joka</h1>
      <div className="mynavbar-list-item-container">
        <ul className="mynavber-list-items-container">
          <li className="mynavbar-list-item">Home Page</li>
          <li className="mynavbar-list-item">About</li>
          <li className="mynavbar-list-item">Skills</li>
          <li className="mynavbar-list-item">Projects</li>
          <li className="mynavbar-list-item">Contacts As</li>
        </ul>
      </div>
    </div>
  </Nav>
);

export default MyNavbar;
