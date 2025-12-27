import { useParams, Link } from "react-router-dom";
import projectsData from "../projectsData";
import elementLabels from "../ElememtsLabels";

const ProjectDetails = () => {
  const { projectName } = useParams();

  const project = projectsData.find((item) => item.id === projectName);

  if (!project) return <h1>Project Not Found</h1>;

  return (
    <div>
      <h1>{project.title}</h1>

      <h3>Used Elements</h3>
      <ul>
        {(project.elements || []).map((el) => (
          <li key={el}>
            <strong>{el}</strong> = {elementLabels[el] || "HTML element"}
          </li>
        ))}
      </ul>

      <h3>Technologies</h3>
      <ul>
        {(project.technologies || []).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <Link to={`/skills/htmlandcss/${project.id}`}>
        <button>View Project</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
