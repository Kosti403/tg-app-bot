import PropTypes from "prop-types";
import "./cardComponents.css";

const Card = ({ title, subtitle, body, additionalInfo }) => {
  return (
    <div className="border-solid border-slate-400 rounded-lg p-4 mb-4 bg-slate-50 ">
      <h2 className="font-semibold">{title}</h2>
      {subtitle && <h3 className="text-gray-500 font-semibold">{subtitle}</h3>}
      <p className="text-gray-800">{body}</p>
      {additionalInfo && <div className="text-gray-600">{additionalInfo}</div>}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  body: PropTypes.string.isRequired,
  additionalInfo: PropTypes.node,
};

export default Card;
