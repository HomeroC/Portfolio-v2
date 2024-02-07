import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/60">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
             Homero Cazares
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Devoloper",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech Enthusiast",
                2000,
                "Gamer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaGithub className="cursor-pointer" size={20} alt="Github" />
            <FaLinkedin className="cursor-pointer" size={20} />
            <FaSquareXTwitter className="cursor-pointer" size={20} />
            <FaFacebookF className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
