import {useDispatch, useSelector} from "react-redux";
import {getMovieByID} from "../../../redux/movie/selectors";
import {useNavigate, useParams} from "react-router-dom";
import {updateMovie} from "../../../redux/movie/actions";
import MovieForm from "./MovieForm";

export default function MovieUpdate() {
  const dispatch = useDispatch();
  const { movieID } = useParams();
  const movie = useSelector((state) => getMovieByID(state, movieID));
  const navigate = useNavigate();

  function handleSubmit(formData) {
    dispatch(updateMovie({
      ...formData,
      id: movieID,
    }));

    navigate('/admin/movies');
  }

  return (
    <>
      <MovieForm onHandleSubmit={handleSubmit} title={movie.title} duration={movie.duration}/>
    </>
  );
}

