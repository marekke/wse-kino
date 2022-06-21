import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getShowByID} from "../../../redux/show/selectors";

export default function TicketView() {
  const {showID, seatID} = useParams();
  const show = useSelector((state) => getShowByID(state, showID));

  if (show.seats[seatID] === null) {
    return <>Podany bilet nie istnieje</>
  }

  return (
    <>
      <div className={'row mt-4'}>
        <div className={'col'}>
          <h4 className={'text-center'}>
            Dziękujemy za zakup w naszym kinie. Poniżej znajduję się Twój bilet.
          </h4>
        </div>
      </div>
      <div className={'row justify-content-center mt-4'}>
        <div className={'col-4'}>

          <div className={'card'}>
            <div className="card-header bg-primary text-white">
              <h4 className={'text-center mb-0'}>
                Kino WSE - bilet
              </h4>
            </div>
            <div className={`card-body text-dark p-4`}>
              <small>Film</small>
              <h5>{show.movie.title}</h5>
              <small>Sala</small>
              <h5>{show.screenRoom.number}</h5>
              <small>Miejsce</small>
              <h5>{seatID}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
