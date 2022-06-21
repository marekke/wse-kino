import {ArrowRightShort, Clock} from "react-bootstrap-icons";
import moment from "moment/moment";

export default function ShowDetail(props) {
  const {show} = props;

  const dateStart = moment(show.dateStart);
  const dateEnd = moment(show.dateEnd);

  return (
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
  );
}
