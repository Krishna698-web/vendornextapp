import React from "react";

const Input = ({ label, type, changeValue }) => {
  return (
    <div className="flex items-start justify-around w-full mt-1">
      <label className="mr-1">{label}</label>
      <input type={type} onChange={changeValue} className="border" />
    </div>
  );
};

export default Input;
