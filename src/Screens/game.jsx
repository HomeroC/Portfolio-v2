import React from "react";
import GameIMG from "../assets/game.png";
import { FaGithub } from "react-icons/fa";

function Game() {
  return (
    <div className="h-full m-auto md:pl-20 p-4 py-16 bg-[#415a77]">
      <h1 className="text-4xl font-bold text-center text-[#e0e1dd]">
        Tic-Tac-Toe
      </h1>
      <p className="text-center text-xl py-8">
        React Tic Tac Toe is a classic game implemented using React, a popular
        JavaScript library for building user interfaces. This web application
        provides a simple yet engaging experience for players of all ages.
      </p>
      <section className="">
        <h2 className="text-2xl font-bold text-[#e0e1dd]">How to Play</h2>
        <p className="py-4 text-xl">
          The game is played on a grid that's 3 squares by 3 squares. You are X,
          your friend (or the computer in this case) is O. Players take turns
          putting their marks in empty squares. The first player to get 3 of
          their marks in a row (up, down, across, or diagonally) is the winner.
          When all 9 squares are full, the game is over. If no player has 3
          marks in a row, the game ends in a tie.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Game Rules</h2>
        <p className="py-4 text-xl">
          <ul>
            <li>Player 1 is X and Player 2 is O</li>
            <li>The game starts with Player 1</li>
            <li>Players take turns to make a move</li>
            <li>The game ends when a player wins or the game is a draw</li>
          </ul>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Game Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <img src={GameIMG} alt="React Tic Tac Toe" className="" />
          </div>
          {/* <div>
            <img src="" alt="React Tic Tac Toe " className="" />
          </div> */}
        </div>
      </section>
      <div>
        <h2 className="text-2xl font-bold text-[#e0e1dd]">Technologies Used</h2>
        <p className="py-4 text-xl">React | JavaScript | HTML | CSS</p>
      </div>
      <a href="https://github.com/HomeroC/react-tic-tac-toe">
        <FaGithub className="cursor-pointer" size={50} alt="Github" />
      </a>
      Github Repo
    </div>
  );
}

export default Game;
