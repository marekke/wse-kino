import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieByID} from "../../../redux/movie/selectors";
import {useNavigate, useParams} from "react-router-dom";
import {updateMovie} from "../../../redux/movie/actions";

function MovieUpdate(props) {

  const dispatch = useDispatch();
  const { movieID } = useParams();
  const movie = useSelector((state) => getMovieByID(state, movieID));
  const navigate = useNavigate();

  const [title, setTitle] = useState(movie.title);
  const [duration, setDuration] = useState(movie.duration);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie({
      id: movieID,
      title,
      duration
    }));
    navigate('/admin/movies');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tytuł</label>
          <input
            type="text"
            className="form-control"
            placeholder="Tytuł"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Czas trwania</label>
          <input
            type="text"
            className="form-control"
            placeholder="Czas trwania"
            onChange={e => setDuration(e.target.value)}
            value={duration}
          />
        </div>

        <div className="mb-3 text-end">
          <button type="submit" className="btn btn-success">Zapisz!</button>
        </div>
      </form>
    </>
  );
}

export default MovieUpdate;

