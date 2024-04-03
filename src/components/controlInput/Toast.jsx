import React from "react";

const Toast = ({ title, description, color }) => {
  return (
    <>
      <div className="lg:absolute lg:bottom-3 lg:right-3 z-50">
        <div className={`w-[26rem] pl-4 py-2 border-2 text-white rounded-md ${color}`}>
          <p className="font-bold text-lg">{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Toast;
