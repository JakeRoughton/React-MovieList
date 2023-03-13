//Import React Components
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// Import Route info
import NavLayout from "./Layouts/NavLayout";
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import MovieLayout from "./Layouts/MovieLayout";
import MoviesListing from "./Pages/MoviesListing";
import MovieAdd from "./Pages/MovieAdd";
//Import Data Set
import movies from "./MovieData/Movies";

const App = () => {
  //Set state of data set
  const [movieList, setMovieList] = useState(movies);

  //create function to handle adding a movie title
  const handleAddMovie = (title) => {
    const newMovie = {
      Title: title
    }
    setMovieList ([...movieList, newMovie])
  }
 
  //Stucture Router to define pages and children
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          path: "/movies",
          element: <MovieLayout data={movieList} />,
          children: [
            {
              element: <MoviesListing data={movieList} />,
              index: true,
            },
            {
              element: <MovieAdd handleAddMovie={handleAddMovie} />,
              path: "/Pages/MovieAdd",
            },
            {
              element: <MoviePage data={movieList} />,
              path: ":index",
            },
          ],
        },
      ],
    },
  ]);

  //Return the page routing
return (
  <div className="App-header">
    <RouterProvider router = {router} />
  </div>
);
}

export default App;