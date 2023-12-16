import React from "react";
import Songcard from "../songcard/Songcard";
import { samplePlaylists } from "../../data/sampledata";

const Maindisplay = () => {
  return (
    <div className="text-white h-[100%] bg-[#121212]">
      <div className="flex items-center justify-between p-3">
        <p className="text-white text-2xl font-semibold">Spotify playlist</p>
        <p>Show all</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        {samplePlaylists.map((data, index) => (
          <Songcard
            title={data.title}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Maindisplay;
