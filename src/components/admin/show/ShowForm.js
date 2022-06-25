import Datetime from "react-datetime";
import {useState} from "react";
import {useStore} from "react-redux";
import {getReservedTimeSlotsForScreenRoomID} from "../../../redux/show/selectors";
import 'moment/locale/pl';
import FormErrors from "../../common/show/FormErrors";
import PropTypes from "prop-types";

function ShowForm(props) {
  const {movies, screenRooms} = props;

  const [dateTime, setDateTime] = useState('');
  const [movie, setMovie] = useState('');
  const [screenRoom, setScreenRoom] = useState('');
  const [errors, setErrors] = useState([]);

  const store = useStore();

  const moviesOptions = Object.keys(movies).map(id =>
    <option key={id} value={id}>{movies[id].title}</option>
  )

  const screenRoomsOptions = Object.keys(screenRooms).map(id =>
    <option key={id} value={id}>{screenRooms[id].number}</option>
  )

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      props.onHandleSubmit({
        movieID: parseInt(movie),
        screenRoomID: parseInt(screenRoom),
        dateTime: dateTime
      });
    }
  }

  const validate = () => {
    const validationErrors = [];

    if (movie === '') {
      validationErrors.push('Pole film jest wymagane.');
    }

    if (screenRoom === '') {
      validationErrors.push('Pole sala jest wymagane.');
    }

    if (dateTime === '') {
      validationErrors.push('Pole data jest wymagane.');
    }

    const dateSlots = getReservedTimeSlotsForScreenRoomID(store.getState(), parseInt(screenRoom))
    for (let dateSlot of dateSlots) {
      if (dateTime.isBetween(dateSlot[0], dateSlot[1], null, '[]')) {
        validationErrors.push('Podana data jest już zarezerwowana dla innego filmu.');
        break;
      }
    }

    setErrors(validationErrors);
    return validationErrors.length === 0;
  }

  return (
    <form onSubmit={handleSubmit} onChange={(e) => setErrors([])}>
      <FormErrors errors={errors} />

      <div className="mb-3">
        <label className="form-label">Data godzina</label>
        <Datetime onChange={setDateTime}/>

      </div>

      <div className="mb-3">
        <label className="form-label">Film</label>
        <select
          className="form-control"
          onChange={e => setMovie(e.target.value)}
        >
          <option>Wybierz film</option>
          {moviesOptions}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Sala</label>
        <select
          className="form-control"
          onChange={e => setScreenRoom(e.target.value)}
        >
          <option>Wybierz salę</option>
          {screenRoomsOptions}
        </select>
      </div>

      <div className="mb-3 text-end">
        <button type="submit" className="btn btn-success">Zapisz</button>
      </div>
    </form>
  );
}

ShowForm.propTypes = {
  onHandleSubmit: PropTypes.func,
}

export default ShowForm;