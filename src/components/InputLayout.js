import React from "react";
import PropTypes from "prop-types";

const InputLayout = ({ label, name, value, placeholder, type, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value} //when we set a value to component it is controlled component, we need event to modify
        onChange={onChange}
      />
    </div>
  );
};

InputLayout.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired
};

InputLayout.defaultProps = {
  type: "text"
};

export default InputLayout;
