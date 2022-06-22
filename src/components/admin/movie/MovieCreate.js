import {createMovie} from "../../../redux/movie/actions";
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";
import MovieForm from "./MovieForm";

function MovieCreate(props) {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    props.createMovie(formData);
    navigate('/admin/movies')
  }

  return (
    <>
      <MovieForm onHandleSubmit={handleSubmit} />
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createMovie: (data) => dispatch(createMovie(data))
})

export default connect(null, mapDispatchToProps)(MovieCreate)

