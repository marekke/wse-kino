import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getScreenRooms} from "../../../redux/screenRoom/selectors";
import {Pencil, Trash} from "react-bootstrap-icons";
import {removeScreenRoom as removeScreenRoomAction} from "../../../redux/screenRoom/actions";

export default function ScreenRoomIndex() {
  const screenRooms = useSelector(getScreenRooms);
  const dispatch = useDispatch();

  function removeScreenRoom(screenRoomID) {
    dispatch(removeScreenRoomAction(screenRoomID))
  }

  const screenRoomsElements = screenRooms.map((screenRoom, index) =>
    <tr key={screenRoom.id}>
      <td>{index + 1}</td>
      <td>
        {screenRoom.number}
      </td>
      <td>
        {screenRoom.capacity}
      </td>
      <td className={'text-end'}>
        <Link to={`update/${screenRoom.id}`} className={'me-2'}><Pencil/></Link>
        <Trash role={'button'} className={'text-danger'} onClick={() => removeScreenRoom(screenRoom.id)}/>
      </td>
    </tr>
  );

  return (
    <>
      <p className="text-end">
        <Link to="/admin/screen-rooms/create">
          <button className="btn btn-outline-primary">
            Dodaj salę kinową
          </button>
        </Link>
      </p>

      <table className={'table'}>
        <thead>
        <tr className={'table-secondary'}>
          <th>#</th>
          <th>Numer</th>
          <th>Ilość miejsc</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {screenRoomsElements}
        </tbody>
      </table>
    </>
  );
}
