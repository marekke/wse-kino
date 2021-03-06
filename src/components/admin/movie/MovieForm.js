import {useState} from "react";
import {checkIfIsInteger} from "../../../utils/Helper";
import FormErrors from "../../common/show/FormErrors";
import PropTypes from "prop-types";

function MovieForm(props) {
  const [title, setTitle] = useState(props.title || '');
  const [duration, setDuration] = useState(props.duration || 0);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      props.onHandleSubmit({title, duration});
    }
  }

  function validate() {
    const validationErrors = [];

    if (title === '') {
      validationErrors.push('Pole tytuł jest wymagane.');
    }

    if (duration <= 0) {
      validationErrors.push('Pole czas trwania musi być większa niż 0 minut.')
    }

    if (checkIfIsInteger(duration)) {
      validationErrors.push('Pole czas trwania musi być liczbą całkowitą.')
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  }

  return (
    <form onSubmit={handleSubmit} onChange={() => setErrors([])}>
      <FormErrors errors={errors} />

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
        <button type="submit" className="btn btn-success">Zapisz</button>
      </div>
    </form>
  );
}

MovieForm.propTypes = {
  onHandleSubmit: PropTypes.func,
}

export default MovieForm;