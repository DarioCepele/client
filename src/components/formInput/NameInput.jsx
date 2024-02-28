import React from "react";
import { FaRegUser } from "react-icons/fa";

const NameInput = ({ value, onChange }) => {
  return (
    <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
      <span className="pl-2 pr-4 border-r border-gray-200">
        <FaRegUser className="text-2xl" />
      </span>
      <label className="py-2">
        <input
          id="name"
          type="text"
          name="name"
          value={value} // Usa il valore passato come prop
          onChange={onChange} // Usa la funzione di modifica passata come prop
          className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
          placeholder="Name"
          required
        />
      </label>
    </div>
  );
};

export default NameInput;
