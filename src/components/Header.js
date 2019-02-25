import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div>
      <h1 style={headingStyle}>{props.branding}</h1>
    </div>
  );
};

const headingStyle = {
  color: "green",
  fontSize: "50px"
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired //setting up prop type to be string
};

export default Header;
