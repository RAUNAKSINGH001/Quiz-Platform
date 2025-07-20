import React from "react";
import homepng from "../assets/homepng.png";
function HomeComp() {
  return (
    <div className="flex px-[14vw] py-[2vh] gap-25 text-center">
      <div className="flex justify-center  gap-3 text-justify flex-col">
        <h1 className="text-6xl font-extrabold">Empowering</h1>
        <span className=" text-4xl text-amber-300  font-extrabold">Minds</span>        


        <h1 className="text-6xl  font-extrabold">Through</h1>
        <h1 className=" text-4xl text-amber-300 font-extrabold">Quizzes</h1>

        <h1 className="text-justify">
          An interactive online quiz web app designed to make learning fun,
          fast, and effective. Whether you're a student sharpening your skills,
          a professional testing your knowledge, or just someone who loves a
          good challenge, <b>Quizzy</b> is your perfect destination.
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="w-[26vw] ">
          <img
            src={homepng}
            alt="png"
            className="  w-[26vw] h-[65vh] object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
