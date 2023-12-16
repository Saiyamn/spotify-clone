import React from "react";

const ActionContainer = ({ primaryTitle, secondaryTitle, action }) => {
  return (
    <div className="bg-[#242424] p-3 rounded-xl">
      <p className="text-[16px]">{primaryTitle}</p>
      <p className="text-[13px] py-4">{secondaryTitle}</p>
      <button className="px-5 py-2 rounded-full bg-white text-black">
        {action}
      </button>
    </div>
  );
};

export default ActionContainer;
