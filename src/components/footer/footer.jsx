import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <nav>
      <ul className="footer">
        <Link to="/">
          <li>Profile</li>
        </Link>
        <Link to="/workers">
          <li>Workers</li>
        </Link>
        <Link to="/statistics">
          <li>Statistics</li>
        </Link>
      </ul>
    </nav>
  );
}
