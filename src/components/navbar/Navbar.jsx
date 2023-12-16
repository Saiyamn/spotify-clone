import React from "react";

const Navbar = () => {
  return (
    <div className="text-white w-full bg-black/50 flex items-center justify-between px-3 py-2 rounded-lg">
      {/* Navigation button*/}
      <div className="flex items-center gap-2">
        <img
          src="/assets/images/leftarrow.svg"
          alt="leftarrow"
          className="w-[18px] h-[18px] cursor-pointer"
        />
        <img
          src="/assets/images/rightarrow.svg"
          alt="rightarrow"
          className="w-[18px] h-[18px] cursor-pointer"
        />
      </div>

      {/* Login /Sign up buttons*/}
      <div className="flex items-center gap-7">
        <button>Sign up</button>
        <button className="px-5 py-2 rounded-full bg-white text-black">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
