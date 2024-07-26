import PropTypes from "prop-types";
import "./cardComponents.css";

const Card = ({ title, subtitle, body, additionalInfo }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
      <p>{body}</p>
      {additionalInfo && (
        <div className="additional-info">{additionalInfo}</div>
      )}
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
