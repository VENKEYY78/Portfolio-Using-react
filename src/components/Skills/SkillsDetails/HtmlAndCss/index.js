import { Link, Outlet } from "react-router-dom";

// import TodoList from "./HtmlAndCssProjects/TodoList";

import "./index.css";

const HtmlAndCss = () => (
  <div className="html-and-css-projects-main-bg-container">
    <div className="project-container">
      <h1>TodoList</h1>

      <Link to="todoList">
        <button className="view-button" type="button">
          View
        </button>
      </Link>

      <Outlet />
    </div>
  </div>
);

export default HtmlAndCss;
