import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Game from "./Screens/game.jsx";
import Movie from "./Screens/movie.jsx";
import Thumbnail from "./Screens/Thumbnail.jsx";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/game-app",
      element: <Game />,
    },
    {
      path: "/movie-app",
      element: <Movie />,
    },
    {
      path: "/anime-app",
      element: <Thumbnail />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
