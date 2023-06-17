import React from "react";

const Input = ({ label, type, value, changeValue }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={changeValue} />
    </div>
  );
};

export default Input;
