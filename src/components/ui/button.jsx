export const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const name = ("button", props.className);
  return <button {...props} className={"button" + name} />;
};
