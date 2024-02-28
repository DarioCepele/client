import React from "react";
import { GoXCircleFill } from "react-icons/go";

export const ErrorInput = ({ message }) => {
  return (
    <div className="p-4 max-w-4xl flex rounded-lg border border-red-300 bg-red-100 my-3 ">
      <span className="flex-shrink-0 text-red-500 text-xl">
        <GoXCircleFill />
      </span>
      <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
        <h3 className="text-red-800 font-semibold">Oh snap!</h3>
        <p className="text-red-600 font-medium antialiased">Error: {message}</p>
      </div>
    </div>
  );
};
