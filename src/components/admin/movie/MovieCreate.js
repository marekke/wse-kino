import {createMovie} from "../../../redux/movie/actions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import MovieForm from "./MovieForm";

export default function MovieCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(createMovie(formData))
    navigate('/admin/movies')
  }

  return (
    <>
      <MovieForm onHandleSubmit={handleSubmit} />
    </>
  );
}
