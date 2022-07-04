import React from "react";

const Inputfield = ({ label, onChange, value, type, placeholder }) => {
  return (
    <div className=" flex flex-col ">
      <label className="mb-2 font-bold text-gray-800">{label}</label>
      <input
        className="bg-gray-200 py-2 px-3 border-2 outline-none w-96"
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Inputfield;
