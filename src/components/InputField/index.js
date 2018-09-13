import React from 'react';

const InputField = ({ label, type, name, placeholder, handleChange }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputField;
