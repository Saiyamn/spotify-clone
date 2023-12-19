import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Maindisplay from "../../components/maindisplay/Maindisplay";

const Home = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-black">
      <div className="flex gap-3 p-2">
        <div className="w-full sm:w-[300px] flex-none">
          <Sidebar />
        </div>
        <div className="flex-grow hidden sm:block">
          <Navbar />
          <Maindisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
