import { useParams, Link } from "react-router-dom";
import projectsData from "../projectsData";
import elementLabels from "../ElememtsLabels";
import technologiesFullForms from "../Technologies";
import "./index.css";

const ProjectDetails = () => {
  const { projectName } = useParams();

  const project = projectsData.find((item) => item.id === projectName);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div className="project-details-bg-contaainer">
      <h1 className="project-heading">{project.title}</h1>
      <p className="project-description">{project.description}</p>

      <h3 className="used-elements-heading">Used Elements</h3>
      <ul className="used-elements-container">
        {(project.elements || []).map((el) => (
          <li className="used-element" key={el}>
            <strong>{el}</strong> = {elementLabels[el] || "HTML element"}
          </li>
        ))}
      </ul>

      <h3 className="technologies-heading">Technologies</h3>
      <ul className="technologies-container">
        {(project.technologies || []).map((tech) => (
          <li className="technologie-name" key={tech}>
            <strong>{tech}</strong> = {technologiesFullForms[tech] || ""}
          </li>
        ))}
      </ul>

      <Link to={`/skills/htmlandcss/${project.id}`}>
        <button className="view-project-button">View Project</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
