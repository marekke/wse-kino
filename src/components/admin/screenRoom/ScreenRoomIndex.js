import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function ScreenRoomIndex() {
  const screenRooms = useSelector((state) => state.screenRoom);

  const screenRoomsElements = Object.keys(screenRooms).map(id =>
    <li key={id} className="list-group-item">
      <Link to={`update/${id}`}>{screenRooms[id].number}</Link>
      <span className="float-end">{screenRooms[id].capacity}</span>
    </li>
  );

  return (
    <>
      <p className="text-end">
        <Link to="/admin/screen-rooms/create">
          <button className="btn btn-primary">
            Dodaj salę kinową
          </button>
        </Link>
      </p>

      <ul className="list-group mt-5">
        {screenRoomsElements}
      </ul>
    </>
  );
}
