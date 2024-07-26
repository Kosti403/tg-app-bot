import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-slate-700 p-5 text-center list-none m-0 ">
      <ul className="flex justify-between">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Profile</Link>
        </li>
        <li>
          <Link to="/workers" className="text-white hover:text-gray-300">Workers</Link>
        </li>
        <li>
          <Link to="/statistics" className="text-white hover:text-gray-300">Statistics</Link>
        </li>
      </ul>
    </footer>
  );
}
