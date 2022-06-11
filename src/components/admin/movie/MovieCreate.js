import {useState} from "react";
import {movieCreated} from "../../../redux/movie/actions";
import {connect} from "react-redux";

function MovieCreate(props) {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.movieCreated({
      title,
      duration
    });
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
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Czas trwania</label>
          <input
            type="text"
            className="form-control"
            placeholder="Czas trwania"
            onChange={e => setDuration(e.target.value)}/>
        </div>

        <div className="mb-3">
          <button type="submit" className="btn btn-success">Dodaj!</button>
        </div>
      </form>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  movieCreated: (data) => dispatch(movieCreated(data))
})

export default connect(null, mapDispatchToProps)(MovieCreate)

