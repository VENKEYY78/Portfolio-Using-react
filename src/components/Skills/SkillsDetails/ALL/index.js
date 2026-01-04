import { Link } from "react-router-dom";
import "./index.css";
import projectsData from "../../projectsData";

const ALL = () => (
  <div className="html-and-css-projects-main-bg-container">
    <div className="project-card-container">
      {projectsData.map((project) => (
        <ul className="project-card" key={project.id}>
          <h1 className="card-title">{project.title}</h1>
          <p className="card-description">{project.description}</p>
          <Link to={`/skills/htmlandcss/${project.id}/details`}>
            <button className="view-button" type="button">
              View
            </button>
          </Link>
        </ul>
      ))}
    </div>
  </div>
);

export default ALL;
