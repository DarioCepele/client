import { GoCheckCircleFill } from "react-icons/go";

export const SuccessInput = ({ message }) => {
  return (
    <div className="p-4 max-w-4xl flex rounded-lg border border-green-300 bg-green-100">
      {/* ::Icon */}
      <span className="flex-shrink-0 text-green-500">
        <GoCheckCircleFill className="w-6 h-6" />
      </span>
      {/* ::Content */}
      <div className="ml-3 flex flex-col items-start space-y-2 text-sm">
        {/* :::alert title */}
        <h3 className="text-green-800 font-semibold">Well done!</h3>
        {/* :::alert message */}
        <p className="text-green-600 font-medium antialiased">{message}</p>
      </div>
    </div>
  );
};
