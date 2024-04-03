import React from "react";
import { IoKeyOutline } from "react-icons/io5";

// It takes two props: value and onChange
const PasswordInput = ({ value, onChange }) => {
  return (
    <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
      <span className="pl-2 pr-4 border-r border-gray-200">
        {/* IoKeyOutline icon component */}
        <IoKeyOutline className="text-2xl" />
      </span>
      <label className="py-2">
        <input
          id="password"
          type="password"
          name="password"
          value={value}
          onChange={onChange} // onChange prop to bind input change event to the prop onChange
          className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
          placeholder="Password"
          required // Required attribute for form validation
        />
      </label>
    </div>
  );
};

export default PasswordInput;
