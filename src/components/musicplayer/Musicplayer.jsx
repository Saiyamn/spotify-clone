import React, { useState, useRef, useEffect } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

// #f40082 red
// #ffd200 yellow

const Musicplayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setCurrentTime(0);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    if (audioPlayer.current.currentTime === audioPlayer.current.duration) {
      cancelAnimationFrame(animationRef);
      animationRef.current = requestAnimationFrame(() => {
        progressBar.current.value = 0;

        console.log("Insode end of useffect");
      });
    }
  }, [audioPlayer?.current?.currentTime]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef);
    } else {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const whilePlaying = () => {
    const currentAudioTime = audioPlayer.current.currentTime;
    setCurrentTime(currentAudioTime);
    progressBar.current.value = currentAudioTime;
    console.log(progressBar.current.value);

    // Adding below condition to break the animation , so that the knobby of music player is set to initial position during the execution of the useeffect
    if (currentAudioTime === audioPlayer.current.duration) {
      cancelAnimationFrame(animationRef);
      return;
    }

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-[100%]  bg-[#2f2f2f] p-4 absolute bottom-0 z-10">
      {/* progress bar*/}
      <div className="w-[100%]">
        <input
          type="range"
          className="accent-[#ffe3d4] w-full h-[4px]"
          defaultValue={0}
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      <audio ref={audioPlayer} preload="metadata" src=""></audio>
      <div className="flex items-center justify-between">
        {/*<button className="px-3 py-1 bg-gray-400 rounded-full flex items-center justify-center">
          <BsArrowLeftShort /> 30
        </button>*/}

        <button
          className="p-2 rounded-full flex items-center justify-center bg-[#161616] w-[45px] h-[45px] text-[32px] text-white"
          onClick={togglePlayPause}
        >
          {isPlaying &&
          currentTime < Math.floor(audioPlayer.current.duration) ? (
            <FaPause />
          ) : (
            <FaPlay className="ml-1" />
          )}
        </button>
        {/*
         <button className="px-3 py-1 bg-gray-400 rounded-full flex items-center justify-center hover:text-[#f40082]">
          30 <BsArrowRightShort />
        </button>
        */}
      </div>
    </div>
  );
};

export default Musicplayer;
