import React from "react";
import Details from "../assets/AnimeGo/Details.png"
import HomeScreen from "../assets/AnimeGo/HomeScreen.png"
import Login from "../assets/AnimeGo/Login.png"
import Menu from "../assets/AnimeGo/Menu.png"
import Watchlist from "../assets/AnimeGo/Watchlist.png"
import { FaGithub } from "react-icons/fa";


function Movie() {
  return (
    <div className="h-full m-auto md:pl-20 p-4 py-16 bg-[#415a77]">
      <h1 className="text-4xl font-bold text-center text-[#e0e1dd]">
        Anime GO 'Plus Ultra'
      </h1>
      <p className="py-4 text-xl">
        This is the redesign in both looks and complexity of "Anime GO",
        introducing "Anime GO 'Plus Ultra'", a sleek and intuitive React
        application designed for all anime enthusiasts out there. With Anime GO
        'Plus Ultra', you can effortlessly browse through a vast collection of
        anime shows, add your favorites to a personalized watch list, and manage
        them with ease.
      </p>
      <p className="py-4 text-xl">
        Powered by the latest technologies such as PostgreSQL, Sequelize, and
        JWT authentication, Anime GO 'Plus Ultra' ensures a seamless and secure
        user experience. The PostgreSQL database efficiently stores all user
        data, including watch lists, preferences, and account information,
        guaranteeing smooth navigation and quick access to your favorite anime
        titles.
      </p>
      <p className="py-4 text-xl">
        With the ability to add and delete anime shows from your watch list,
        Anime GO 'Plus Ultra' puts you in control of your viewing experience. No
        more forgetting which shows you're following or struggling to keep track
        of your watch progress. With just a few clicks, you can curate your
        perfect watch list and stay up-to-date on all the latest episodes.
      </p>
      <p className="py-4 text-xl">
        Thanks to JWT authentication, Anime GO 'Plus Ultra' ensures the security
        of your account and personal information, providing peace of mind while
        you indulge in your favorite anime. Your data is encrypted and
        protected, allowing you to browse and manage your watch list with
        confidence.
      </p>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Features</h2>
        <p className="py-4 text-xl">
          <ul>
            <li className="py-2 text-xl">Search for anime</li>
            <li className="py-2 text-xl">View show details</li>
            <li className="py-2 text-xl">Add shows to watchlist</li>
            <li className="py-2 text-xl">Login/Sign-up Users</li>
          </ul>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Technologies Used</h2>
        <p className="py-4 text-xl">
          React | JSX | Javascript | PostgreSQL | JWT
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <img src={Login} alt="Details" className="rounded-lg" />
          </div>
          <div>
            <img src={HomeScreen} alt="Details" className="rounded-lg" />
          </div>
          <div>
            <img src={Details} alt="Details" className="rounded-lg" />
          </div>
          <div>
            <img src={Menu} alt="Details" className="rounded-lg" />
          </div>
          <div>
            <img src={Watchlist} alt="Details" className="rounded-lg" />
          </div>
          
        </div>
        <p className="py-2 text-xl">
          Whether you're binge-watching classics or discovering new favorites,
          Anime Go 'Plus Ultra' is the ultimate companion for every anime fan. Experience
          the thrill of exploring new worlds, captivating stories, and
          unforgettable characters—all from the comfort of your own device.
          Start your anime adventure today with Anime Go 'Plus Ultra'!
        </p>
      </section>
      <a href="https://github.com/HomeroC/Anime-GO-Plus-Ultra">
        <FaGithub className="cursor-pointer" size={50} alt="Github" />
      </a>
      Github Repo
    </div>
  );
}

export default Movie;
