import {Link} from "react-router-dom";
import {connect} from "react-redux";

function MovieIndex(props) {

  const movies = [];
  Object.keys(props.movies).forEach(movieID => movies.push(
    <li key={movieID} className="list-group-item">
      <Link to={`update/${movieID}`}>{props.movies[movieID].title}</Link>
      <span className="float-end">{props.movies[movieID].duration}</span>
    </li>
  ))

  return (
    <>
      <p className="text-end">
        <Link to="/admin/movies/create">
          <button className="btn btn-danger">
            Dodaj nowy film
          </button>
        </Link>
      </p>

      <ul className="list-group mt-5">
        {movies}
      </ul>
    </>
  );
}

const mapStateToProps = state => ({
  movies: state.movie
});

export default connect(mapStateToProps)(MovieIndex);
