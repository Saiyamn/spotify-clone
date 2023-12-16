import React from "react";
import ActionContainer from "./ActionContainer";

const Sidebar = () => {
  return (
    <div className="text-white w-full">
      <div className="w-full  flex flex-col gap-4 py-6 bg-[#121212] rounded-lg">
        <div className="flex items-center gap-1 w-[95%] mx-auto">
          <img
            src="/assets/images/spotify-logo.svg"
            alt="logo"
            className="w-[31px] h-[31px]"
          />
          <p>Spotify</p>
        </div>
        <div className="flex items-center gap-3 w-[95%] mx-auto">
          <img
            src="/assets/images/home.svg"
            alt="logo"
            className="w-[32px] h-[32px]"
          />
          <p>Home</p>
        </div>
        <div className="flex items-center gap-3 w-[95%] mx-auto">
          <img
            src="/assets/images/search.svg"
            alt="logo"
            className="w-[32px] h-[32px]"
          />
          <p>Search</p>
        </div>
      </div>
      {/* Second part of sidebar*/}
      <div className="bg-[#121212] mt-3 py-6 rounded-lg">
        <div className="w-[95%] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/assets/images/library.svg"
              alt="plus"
              className="w-[30px] h-[30px]"
            />
            <span>Your Library</span>
          </div>
          <div>
            <img
              src="/assets/images/plus.svg"
              alt="plus"
              className="w-[25px] h-[25px]"
            />
          </div>
        </div>
        <div className="w-[95%] mx-auto my-3">
          <ActionContainer
            primaryTitle="Create your first playlist"
            secondaryTitle="it's easy, we'll help you"
            action="Create playlist"
          />
        </div>
        <div className="w-[95%] mx-auto">
          <ActionContainer
            primaryTitle="Let's find some podcasts to follow"
            secondaryTitle="We'll keep you updated on new episodes"
            action="Browse podcasts"
          />
        </div>
        {/* Third part of 2nd section */}
        <div className="w-[95%] mx-auto text-[11px] font-extralight py-8">
          <div className="flex items-center gap-3 pl-3">
            <p className="cursor-pointer">Legal</p>
            <p className="cursor-pointer">Privacy Center</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Cookies</p>
          </div>
          <div className="flex items-center gap-3 my-5 pl-3">
            <p className="cursor-pointer">About Ads</p>
            <p className="cursor-pointer">Accessibility</p>
          </div>
          <div className="pl-3">
            <p className="cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
