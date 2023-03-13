//Table React Component
import { useState } from "react";
import { Link } from "react-router-dom";
import movies from "./MovieData/movies";

// TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
      </tr>
    </thead>
  );
};

//TABLE BODY SIMPLE COMPONENT
const TableBody = (prop) => {

  //construct rows
  const rows = prop.data.map((row, index) => {
    return (
      <>
        <tr key={index}>
          <td> {row.year} </td>
          <td>
            <Link to={`/movies/${index}`}>{row.title} </Link>
          </td>
        </tr>
      </>
    );
  });
  //return rows wrapped in tbody
  return <tbody>{rows}</tbody>;
};

// TABLE is our main Component
const MoviesListing = () => {
  //Import movie data and assign to movieList
  const [movieList, setMovieList] = useState(movies);

  return (
    <div>
      <p className="instructions">
        Click on the title to see the movie's details.
      </p>
      <table>
        <TableHeader />
        <TableBody 
        MovieData={movies} />
      </table>
    </div>
  );
};
// }

export default MoviesListing;