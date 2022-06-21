import moment from "moment/moment";
import {Link} from "react-router-dom";

export default function DailyRepertoire(props) {
  const {repertoire, date} = props;

  const movies = Object.values(repertoire).map(movie => {
    const shows = movie.shows.map((show, index) => (
        <Link key={index} to={`show/${show.showID}`} className={'me-2'}>
          <span className={'badge bg-light text-dark'} style={{'fontSize': '14px'}}>{show.timeStart}</span>
        </Link>
      )
    )

    return (
      <tr key={movie.movieID}>
        <td style={{'width': '500px'}}>{movie.movie}</td>
        <td style={{'width': '150px'}}>{movie.duration} min</td>
        <td>{shows}</td>
      </tr>
    );
  })

  const today = moment(date).isSame(new Date(), "day");

  return (
    <div className={'row mb-3'}>
      <div className={'col'}>
        <span style={{'fontSize': '18px'}} className={`${today ? 'badge bg-info' : 'badge bg-light text-dark'}`}>{date}</span>
        <table className={'table mt-1'}>
          <tbody>
          {movies}
          </tbody>
        </table>
      </div>
    </div>
  );
}
