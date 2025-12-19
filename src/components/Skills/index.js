import { Link, Outlet } from "react-router-dom";
// import HtmlAndCss from "../SkillsDetails/HtmlAndCss";
// import Bootstrap from "../SkillsDetails/Bootstrap";
// import Python from "../SkillsDetails/Python";
// import NodeJs from "../SkillsDetails/NodeJs";
// import ExpressJs from "../SkillsDetails/ExpressJs";
// import React from "../SkillsDetails/React";
// import Javascript from "../SkillsDetails/Javascript";
// import MySql from "../SkillsDetails/MySql";
import "./index.css";

const Skills = () => (
  <div className="skills-main-bg-container">
    <div>
      <h1>Some Contact</h1>
    </div>
    <ul className="skills-container">
      <li>
        <Link className="link" to="htmlandcss">
          HTML & CSS
        </Link>
      </li>
      <li>
        <Link className="link" to="javascript">
          JAVASCRIPT
        </Link>
      </li>
      <li>
        <Link className="link" to="bootstrap">
          BOOTSTRAP
        </Link>
      </li>
      <li>
        <Link className="link" to="python">
          PYTHON
        </Link>
      </li>
      <li>
        <Link className="link" to="mysql">
          MYSQL
        </Link>
      </li>
      <li>
        <Link className="link" to="nodejs">
          NODE JS
        </Link>
      </li>
      <li>
        <Link className="link" to="expressjs">
          EXPRESS JS
        </Link>
      </li>
      <li>
        <Link className="link" to="react">
          REACT
        </Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Skills;
