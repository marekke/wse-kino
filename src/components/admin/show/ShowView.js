import {useSelector} from "react-redux";
import {getShowByID, getShowSeatsStatistics} from "../../../redux/show/selectors";
import {useParams} from "react-router-dom";
import SeatsGridView from "./SeatsGridView";

export default function ShowView() {
  const {showID} = useParams();
  const show = useSelector((state) => getShowByID(state, showID));
  const [available, reserved] = useSelector((state => getShowSeatsStatistics(state, showID)));

  return (
    <>
      <div className={'card'}>
        <div className={'card-header bg-light'}>
          {show.movie.title}
        </div>

        <div className={'card-body'}>
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