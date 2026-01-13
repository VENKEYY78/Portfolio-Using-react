import { Link } from "react-router-dom";

import projectsData from "../../projectsData";
import "./index.css";

const BootstrapProjects = projectsData.filter(
  (project) => project.category === "bootstrap"
);

console.log(BootstrapProjects.length);
// console.log(BootstrapProjects);

const Bootstrap = () => (
  <div className="bootstrap-projects-main-bg-container">
    <div className="project-card-container">
      {BootstrapProjects.map((project) => (
        <ul className="project-card" key={project.id}>
          <h1 className="card-title">{project.title}</h1>
          <p className="card-description">{project.description}</p>
          <Link to={`/skills/bootstrap/${project.id}/details`}>
            <button className="view-button" type="button">
              View
            </button>
          </Link>
        </ul>
      ))}
    </div>
  </div>
);

export default Bootstrap;
