import { NavLink, Outlet } from "react-router-dom";

import "./index.css";

const Skills = () => (
  <div className="skills-main-bg-container">
    <div>
      <h1>Some Content</h1>
    </div>

    <ul className="skills-container">
      <li>
        <NavLink
          to="all"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          ALL
        </NavLink>
      </li>

      <li>
        <NavLink
          to="htmlandcss"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          HTML & CSS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="javascript"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          JAVASCRIPT
        </NavLink>
      </li>

      <li>
        <NavLink
          to="bootstrap"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          BOOTSTRAP
        </NavLink>
      </li>

      <li>
        <NavLink
          to="python"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          PYTHON
        </NavLink>
      </li>

      <li>
        <NavLink
          to="mysql"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          MYSQL
        </NavLink>
      </li>

      <li>
        <NavLink
          to="nodejs"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          NODE JS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="expressjs"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          EXPRESS JS
        </NavLink>
      </li>

      <li>
        <NavLink
          to="react"
          className={({ isActive }) =>
            isActive ? "link skills-button active" : "link skills-button"
          }
        >
          REACT
        </NavLink>
      </li>
    </ul>

    <Outlet />
  </div>
);

export default Skills;
