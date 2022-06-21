import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ArrowRightShort, Clock, Eye, Trash} from "react-bootstrap-icons";
import {removeShow as removeShowAction} from "../../../redux/show/actions";
import {getShows} from "../../../redux/show/selectors";
import moment from "moment/moment";

export default function ShowIndex() {
  const shows = useSelector(getShows);
  const dispatch = useDispatch();

  function removeShow(showID) {
    dispatch(removeShowAction(showID))
  }

  const showsElements = shows.map((show, index) => {
    const dateStart = moment(show.dateStart);
    const dateEnd = moment(show.dateEnd);
    return (
      <tr key={show.id}>
        <td>{index + 1}</td>
        <td>{show.movie.title}</td>
        <td>{show.screenRoom.number}</td>
        <td>{Object.keys(show.seats).length}</td>
        <td>{show.movie.duration} min</td>
        <td>
          {dateStart.format('YYYY-MM-DD')}
          <Clock className={'ms-2 text-primary'} /> <span>{dateStart.format('HH:mm')} <ArrowRightShort/>  {dateEnd.format('HH:mm')}</span>
        </td>
        <td className={"text-end"}>
          <Link to={`view/${show.id}`} className={'me-2'}><Eye /></Link>
          <Trash role={'button'} className={'text-danger'} onClick={() => removeShow(show.id)}/>
        </td>
      </tr>
    );
  }
  );

  return (
    <>
      <p className="text-end">
        <Link to="/admin/shows/create">
          <button className="btn btn-outline-primary">
            Dodaj nowy seans
          </button>
        </Link>
      </p>

      <table className={'table'}>
        <thead>
        <tr className={'table-secondary'}>
          <th>#</th>
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
          <th>Data</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {showsElements}
        </tbody>
      </table>
    </>
  );
}
