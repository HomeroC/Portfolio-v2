import React from 'react'
import ProjectItem from './ProjectItem'
import ThumbnailIMG from '../assets/Thumbnail.png'
import gameIMG from '../assets/game.png'
import HomeScreen from "../assets/AnimeGo/HomeScreen.png";


function Projects() {
  return (
    <div id="projects" className="max-w-[1440px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        From dynamic web applications built with React.js to responsive design
        projects crafted with HTML, CSS, and JavaScript, each project
        demonstrates my commitment to creating engaging user experiences. With a
        focus on clean code, efficient problem-solving, and attention to detail,
        my portfolio reflects my passion for pushing the boundaries of web
        development and delivering exceptional results.
      </p>
      <div className="grid sm:grid-cols-2 gap-10">
        <ProjectItem img={ThumbnailIMG} title="Anime GO" tech="Javascript" href="/anime-app" />

        <ProjectItem img={gameIMG} title="Tic-Tac-Toe" tech="React Js" href="/game-app" />

        <ProjectItem img={HomeScreen} title="Anime Go `Plus Ultra`" tech="React Js" href="/movie-app" />
      </div>
    </div>
  );
}

export default Projects