import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ textAlign: "center", padding: "60px" }}>
    <h1>404</h1>
    <p>Page not found</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
