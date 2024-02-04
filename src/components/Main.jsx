import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaGithub, FaLinkedin} from 'react-icons/fa'

function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <h1>I'm Homero Cazares</h1>
        <h2>
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
              <div>
                  <FaGithub />
                  <FaLinkedin />
              </div>
      </div>
    </div>
  );
}

export default Main;
