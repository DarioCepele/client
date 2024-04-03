import React from "react";
import { IoMailOutline } from "react-icons/io5";

const EmailInput = ({ value, onChange }) => {
  return (
    <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
      <span className="pl-2 pr-4 border-r border-gray-200">
        <IoMailOutline className="text-2xl" />
      </span>
      <label className="py-2">
        <input
          id="email"
          type="email"
          name="email"
          value={value}
          onChange={onChange} // onChange prop to bind input change event to the prop onChange
          className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
          placeholder="Email"
          required // Required attribute for form validation
        />
      </label>
    </div>
  );
};

export default EmailInput;
