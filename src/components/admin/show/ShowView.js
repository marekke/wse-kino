import {useSelector} from "react-redux";
import {getShowByID, getShowSeatsStatistics} from "../../../redux/show/selectors";
import {useParams} from "react-router-dom";
import SeatsGridView from "./SeatsGridView";
import {ArrowRightShort, Clock} from "react-bootstrap-icons";
import moment from "moment/moment";

export default function ShowView() {
  const {showID} = useParams();
  const show = useSelector((state) => getShowByID(state, showID));
  const [available, reserved] = useSelector((state => getShowSeatsStatistics(state, showID)));

  const dateStart = moment(show.dateStart);
  const dateEnd = moment(show.dateEnd);

  return (
    <>
      <div className={'card'}>
        <div className={'card-header bg-light'}>
          <div className={'row'}>
            <div className={'col'}>
              <h5 className={'mb-0'}>{show.movie.title}</h5>
            </div>
            <div className={'col'}>
            </div>
            <div className={'col text-end'}>
              <Clock style={{'marginTop': '-2px'}}/> {show.movie.duration} min
            </div>
          </div>
        </div>
        <div className={'card-body'}>
          <h5>
            {dateStart.format('YYYY-MM-DD')}
            <Clock className={'ms-2 text-primary'} /> <span>{dateStart.format('HH:mm')} <ArrowRightShort/>  {dateEnd.format('HH:mm')}</span>
          </h5>
          <h5>Sala: {show.screenRoom.number}</h5>
        </div>

      </div>

      <div className={'row mt-4'}>
        <div className={'col'}>
          <div className={'row'}>
            <div className={'col'}>
              <h4>Miejsca:</h4>
            </div>
            <div className={'col text-end'}>
              <span className={'badge bg-light text-dark'} style={{'fontSize': '20px'}}>{reserved} / {available}</span>
            </div>
          </div>

          <div className={'row mt-2'}>
            <div className={'col'}>
              <SeatsGridView seats={show.seats}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}