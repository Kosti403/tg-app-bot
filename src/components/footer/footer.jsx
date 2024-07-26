import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./footer.css";

export default function Footer() {
  const [footerRef] = useAutoAnimate();

  return (
    <footer className="footer fixed bottom-0 w-full bg-slate-700 p-8 text-center m-0">
      <ul ref={footerRef} className="footer-ul flex justify-between m-0 p-0">
        <li className="footer-li font-semibold text-lg">
          <Link to="/" className="text-white hover:text-gray-300">Profile</Link>
        </li>
        <li className="footer-li font-semibold  text-lg">
          <Link to="/workers" className="text-white hover:text-gray-300">Workers</Link>
        </li>
        <li className="footer-li font-semibold text-lg">
          <Link to="/statistics" className="text-white hover:text-gray-300">Statistics</Link>
        </li>
      </ul>
    </footer>
  );
}
