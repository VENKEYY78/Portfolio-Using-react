import { Link } from "react-router-dom";
import "./index.css";
import projectsData from "../../projectsData";

const Python = () => (
  <div className="all-projects-main-bg-container">
    <div className="project-cards-container">
      {projectsData.map((project) => (
        <ul className="all-project-card" key={project.id}>
          <h1 className="card-title">{project.title}</h1>
          <p className="card-description">{project.description}</p>
          <Link to={`/skills/python/${project.id}/details`}>
            <button
              title="click to view"
              className="view-button-all"
              type="button"
            >
              View
            </button>
          </Link>
        </ul>
      ))}
    </div>
  </div>
);

export default Python;
