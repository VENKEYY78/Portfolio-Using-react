import { Link } from "react-router-dom";
import "./index.css";

const Skills = () => (
  <div className="skills-main-bg-container">
    <u className="skills-container">
      <li>
        <Link className="link" to="">
          HTML & CSS
        </Link>
      </li>
      <li>
        <Link className="link" to="">
          JAVASCRIPT
        </Link>
      </li>
      <li>
        <Link className="link" to="">
          BOOTSTRAP
        </Link>
      </li>
      <li>
        <Link className="link" to="">
          PYTHON
        </Link>
      </li>
      <li>
        <Link className="link" to="">
          MYSQL
        </Link>
      </li>
      <li>
        <Link className="link" to="">
          NODE JS
        </Link>
      </li>
      <li>
        <Link className="link" to="">
          EXPRESS JS
        </Link>
      </li>
      <li>
        <Link className="link" to="">
          REACT
        </Link>
      </li>
    </u>
  </div>
);

export default Skills;
