import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getMovieByID, getStatistcForMovieByID} from "../../../redux/movie/selectors";
import {ProgressBar} from "react-bootstrap";
import {Clock} from "react-bootstrap-icons";
import {getRepertoireForMovieByID} from "../../../redux/show/selectors";
import DailyRepertoire from "../repertoire/DailyRepertoire";

export default function MovieView(props) {
  const {movieID} = useParams();
  const movie = useSelector((state) => getMovieByID(state, movieID));
  const statistics = useSelector(state => getStatistcForMovieByID(state, movieID));
  const repertoire = useSelector(state => getRepertoireForMovieByID(state, movieID));

  const maximumPopularity = Math.max(...Object.values(statistics));

  const progressBars = Object.keys(statistics).map(date => (
    <div key={date} className={'mb-3'}>
      <div className={'d-flex'}>
        <h5>{date}</h5>
        <h5 className={'ms-auto text-muted'}>{statistics[date]} / {maximumPopularity}</h5>
      </div>
      <ProgressBar striped variant={'success'} now={statistics[date]} max={maximumPopularity}/>
    </div>
  ));

  const dailyRepertoires = Object.keys(repertoire).map(date =>
    <DailyRepertoire key={date} repertoire={repertoire[date]} date={date}/>)


  return (
    <>
      <div className={'row'}>
        <div className={'col'}>
          <h3>{movie.title}</h3>
          <h4><Clock /> {movie.duration} min</h4>
        </div>
      </div>

      <div className={'row mt-5'}>
        <div className={'col'}>
          <div className={'card'}>
            <div className={'card-header'}>
              <h5 className={'card-title mb-0'}>Popularność:</h5>
            </div>
            <div className={'card-body'}>
              {progressBars}
            </div>
          </div>
        </div>
        <div className={'col'}>
          <div className={'card'}>
            <div className={'card-header'}>
              <h5 className={'card-title mb-0'}>Dostępne seanse:</h5>
            </div>
            <div className={'card-body'}>
              {dailyRepertoires}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
