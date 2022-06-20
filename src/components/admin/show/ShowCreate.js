import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {createShow} from "../../../redux/show/actions";
import Datetime from 'react-datetime';
import {useNavigate} from "react-router-dom";


export default function ShowCreate() {
  const [dateTime, setDateTime] = useState();
  const [movie, setMovie] = useState();
  const [screenRoom, setScreenRoom] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createShow({
      movieID: parseInt(movie),
      screenRoomID: parseInt(screenRoom),
      dateTime: dateTime
    }));
    navigate('/admin/shows');
  };

  const movies = useSelector((state) => state.movie);
  const moviesOptions = Object.keys(movies).map(id =>
    <option key={id} value={id}>{movies[id].title}</option>
  )

  const screenRooms = useSelector((state) => state.screenRoom);
  const screenRoomsOptions = Object.keys(screenRooms).map(id =>
    <option key={id} value={id}>{screenRooms[id].number}</option>
  )

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Data godzina</label>
          <Datetime onChange={setDateTime} />

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

        <div className="mb-3">
          <button type="submit" className="btn btn-success">Dodaj!</button>
        </div>
      </form>
    </>
  );
}
