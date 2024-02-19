import React from "react";
import MovieIMG from "../assets/movie.png";
import { FaGithub } from "react-icons/fa";


function Movie() {
  return (
    <div className="h-full m-auto md:pl-20 p-4 py-16 bg-[#415a77]">
      <h1 className="text-4xl font-bold text-center text-[#e0e1dd]">
        Movie App
      </h1>
      <p className="py-4 text-xl">
        This is a movie app that displays a list of movies. The app allows users
        to search for movies, view details of a movie, and add a movie to their
        watchlist.
      </p>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Features</h2>
        <p className="py-4 text-xl">
          <ul>
            <li className="py-2 text-xl">Search for movies</li>
            <li className="py-2 text-xl">View movie details</li>
            <li className="py-2 text-xl">Add movie to watchlist</li>
          </ul>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Technologies Used</h2>
        <p className="py-4 text-xl">React | JavaScript | HTML | CSS</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <img src={MovieIMG} alt="React Movie App" className="" />
          </div>
          {/* <div>
            <img src="" alt="" className="" />
          </div> */}
        </div>
      </section>
      <a href="https://github.com/HomeroC/react-movie-app">
        <FaGithub className="cursor-pointer" size={50} alt="Github" />
      </a>
      Github Repo
    </div>
  );
}

export default Movie;
