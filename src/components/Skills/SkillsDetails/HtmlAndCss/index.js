import { Link } from "react-router-dom";
import projectsData from "../../projectsData";
import "./index.css";

const HtmlandCSSProjects = projectsData.filter(
  (project) => project.category === "html"
);

const HtmlAndCss = () => (
  <div className="htmlandcss-projects-main-bg-container">
    <div className="project-card-container">
      {HtmlandCSSProjects.map((project) => (
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

export default HtmlAndCss;
