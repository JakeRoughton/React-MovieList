//Import React Components
import { useParams } from "react-router-dom";
import movies from "./Pages/movies";

//TABLE HEADER SIMPLE COMPONENT
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Title</th>
        <th>Director</th>
        <th>IMDB Rating</th>
        <th>Plot</th>
        <th>Actors</th>
        <th>Date Added</th>
      </tr>
    </thead>
  );
};

//TABLE BODY SIMPLE COMPONENT
const TableBody = (props) => {
  const { index } = useParams();
  const {data} = props;

  return (
    <tbody>
      <tr>
        <td>{data[index].year} </td>
        <td>{data[index].title}</td>
        <td>{data[index].director}</td>
        <td>{data[index].imdbRating} </td>
        <td>{data[index].plot}</td>
        <td>{data[index].actors}</td>
        <td>{data[index].dateAdded}</td>
      </tr>
    </tbody>
  );
};

// MoviePage is our main Component
const MoviePage = () => {
  return (
    <div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

export default MoviePage;