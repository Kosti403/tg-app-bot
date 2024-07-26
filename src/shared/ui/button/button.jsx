import PropTypes from "prop-types";
import "./button.css";

export const Button = (props) => {
  const { className = "", ...rest } = props;
  const combinedClassName = `button ${className}`.trim();

  return <button {...rest} className={"button " + combinedClassName}></button>;
};

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};
