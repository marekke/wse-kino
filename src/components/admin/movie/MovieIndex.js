import {Link} from "react-router-dom";
import {connect} from "react-redux";

function MovieIndex(props) {

  const movies = [];
  props.movies.forEach(movie => movies.push(<li className="list-group-item">{movie.title} <span className="float-end">{movie.duration}</span></li>))

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
