import {useState} from "react";
import {checkIfIsInteger} from "../../../utils/Helper";
import FormErrors from "../../common/show/FormErrors";

export default function MovieForm(props) {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);
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
      validationErrors.push('Należy podać tytuł.');
    }

    if (duration <= 0) {
      validationErrors.push('Czas trwania musi być większa niż 0 minut.')
    }

    if (checkIfIsInteger(duration)) {
      validationErrors.push('Czas trwania musi być liczbą całkowitą.')
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

      <div className="mb-3 text-end">
        <button type="submit" className="btn btn-success">Dodaj!</button>
      </div>
    </form>
  );
}
