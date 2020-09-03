import React from "react";
const Dropdown = ({ name, label, error, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...rest} name={name} id={name} className="custom-select">
        {options.map((option) => (
          <option key={option._id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
