import React from "react";

const FormInput = (props) => {
  const { label, errors, ...otherProps } = props;
  return (
    <div
      className="
  flex flex-col space-y-1
  "
    >
      <label htmlFor="email">{label}</label>
      <input
        className="mb-2 appearance-none 
      px-2 py-1 text-black 
      focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        {...otherProps}
      />
      {errors && <span className="text-red-500 text-xs">{errors}</span>}
    </div>
  );
};

export default FormInput;
