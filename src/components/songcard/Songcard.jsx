import React from "react";

const Songcard = ({ title, description, image }) => {
  return (
    <div className="rounded-lg p-4 bg-[#242424] max-w-max">
      <div>
        <img src={image} alt={title} className="rounded-md" />
      </div>
      <p className="text-[17px] my-3 font-semibold">{title}</p>
      <p className="text-[14px] font-light">{description}</p>
    </div>
  );
};

export default Songcard;
