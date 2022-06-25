import {useState} from "react";
import {checkIfIsInteger} from "../../../utils/Helper";
import FormErrors from "../../common/show/FormErrors";
import PropTypes from "prop-types";
import MovieForm from "../movie/MovieForm";

function ScreenRoomForm(props) {
  const [number, setNumber] = useState(props.number || 0);
  const [capacity, setCapacity] = useState(props.capacity || 0);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      props.onHandleSubmit({number, capacity})
    }
  }

  function validate() {
    const validationErrors = [];

    if (number <= 0) {
      validationErrors.push('Pole numer musi być większa niż 0 minut.')
    }

    if (checkIfIsInteger(number)) {
      validationErrors.push('Pole numer musi być liczbą całkowitą.')
    }

    if (capacity <= 0) {
      validationErrors.push('Pole ilość miejsc musi być większa niż 0 minut.')
    }

    if (checkIfIsInteger(capacity)) {
      validationErrors.push('Pole ilość miejsc musi być liczbą całkowitą.')
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  }

  return (
    <form onSubmit={handleSubmit} onChange={() => setErrors([])}>
      <FormErrors errors={errors} />

      <div className="mb-3">
        <label className="form-label">Numer</label>
        <input
          type="text"
          className="form-control"
          placeholder="Numer"
          onChange={e => setNumber(e.target.value)}
          value={number}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Ilość miejsc</label>
        <input
          type="text"
          className="form-control"
          placeholder="Pojemność"
          onChange={e => setCapacity(e.target.value)}
          value={capacity}
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

export default ScreenRoomForm;