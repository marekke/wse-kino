import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Trash} from "react-bootstrap-icons";
import {removeShow as removeShowAction} from "../../../redux/show/actions";

export default function ShowIndex() {
  const shows = useSelector((state) => state.show);
  const dispatch = useDispatch();

  function removeShow(showID) {
    dispatch(removeShowAction(showID))
  }

  const showsElements = Object.keys(shows).map(id =>
    <tr key={id}>
      <td><Link to={`view/${id}`}>{shows[id].movie.title}</Link></td>
      <td>{shows[id].screenRoom.number}</td>
      <td>{Object.keys(shows[id].seats).length}</td>
      <td>{shows[id].movie.duration} min</td>
      <td>{shows[id].dateStart}</td>
      <td>{shows[id].dateEnd}</td>
      <td>
        <Trash onClick={() => removeShow(id)} />
      </td>
    </tr>
  );

  return (
    <>
      <p className="text-end">
        <Link to="/admin/shows/create">
          <button className="btn btn-primary">
            Dodaj nowy seans
          </button>
        </Link>
      </p>

      <table className={'table'}>
        <thead>
          <tr>
            <th>
              Film
            </th>
            <th>
              Sala
            </th>
            <th>
              Ilość miejsc
            </th>
            <th>Czas trwania</th>
            <th>Data start</th>
            <th>Data koniec</th>
          </tr>
        </thead>
        <tbody>
          {showsElements}
        </tbody>
      </table>
    </>
  );
}
