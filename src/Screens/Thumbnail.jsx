import React from 'react'
import ThumbnailIMG from '../assets/Thumbnail.png'
import { FaGithub } from 'react-icons/fa'

function Thumbnail() {
  return (
    <div className="h-full m-auto md:pl-20 p-4 py-16 bg-[#415a77]">
      <h1 className="text-4xl font-bold text-center text-[#e0e1dd]">
        Anime GO
      </h1>
      <p className="py-4 text-xl">
        This is an anime app that displays a list of anime. The app allows users
        to search for anime, view details of an anime, and add an anime to their
        watchlist. This app was built using vanilla JavaScript without any
        frameworks.
      </p>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Features</h2>
        <p className="py-4 text-xl">
          <ul>
            <li className="py-2 text-xl">
              Search for anime or click a button to display popular anime
            </li>
            <li className="py-2 text-xl">View a synapsis of a show</li>
            <li className="py-2 text-xl">Add/delete a show to watchlist</li>
          </ul>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Technologies Used</h2>
        <p className="py-4 text-xl">JavaScript | HTML | CSS | Public API</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <img src={ThumbnailIMG} alt="React Movie App" className="" />
          </div>
          <div>
            <img src="" alt="" className="" />
          </div>
        </div>
      </section>
      <div>
        <a href="https://github.com/HomeroC/Foundations-Capstone">
          <FaGithub className="cursor-pointer" size={50} alt="Github" />
        </a>
        Github Repo
      </div>
    </div>
  );
}

export default Thumbnail