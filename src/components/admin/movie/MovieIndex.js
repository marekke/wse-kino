import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie} from "../../../redux/movie/actions";
import {Trash} from "react-bootstrap-icons";

function MovieIndex() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);

  const moviesElements = Object.values(movies).map(movie => <tr key={movie.id}>
    <td>{movie.title}</td>
    <td>{movie.duration}</td>
    <td><Trash onClick={() => dispatch(removeMovie(movie.id))} /></td>
  </tr>);

  return (
    <>
      <p className="text-end">
        <Link to="/admin/movies/create">
          <button className="btn btn-danger">
            Dodaj nowy film
          </button>
        </Link>
      </p>

      <table className={'table'}>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Czas trwania</th>
          </tr>
        </thead>
        <tbody>
          {moviesElements}
        </tbody>
      </table>
    </>
  );
}

export default MovieIndex