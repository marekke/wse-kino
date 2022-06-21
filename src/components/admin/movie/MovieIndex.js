import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeMovie} from "../../../redux/movie/actions";
import {Pencil, Trash} from "react-bootstrap-icons";
import {getMovies} from "../../../redux/movie/selectors";

function MovieIndex() {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);

  const moviesElements = movies.map((movie, index) => <tr key={movie.id}>
    <td>{index + 1}</td>
    <td>{movie.title}</td>
    <td>{movie.duration}</td>
    <td className={'text-end'}>
      <Link to={`/admin/movies/update/${movie.id}`} className={'me-2'}><Pencil/></Link>
      <Trash role={'button'} className={'text-danger'} onClick={() => dispatch(removeMovie(movie.id))}/>
    </td>
  </tr>);

  return (
    <>
      <p className="text-end">
        <Link to="/admin/movies/create">
          <button className="btn btn-outline-primary">
            Dodaj nowy film
          </button>
        </Link>
      </p>

      <table className={'table'}>
        <thead>
        <tr className={'table-secondary'}>
          <th>#</th>
          <th>Nazwa</th>
          <th>Czas trwania</th>
          <th></th>
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