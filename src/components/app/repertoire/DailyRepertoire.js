import moment from "moment/moment";
import {Link} from "react-router-dom";

export default function DailyRepertoire(props) {
  const {repertoire, date} = props;

  const today = moment(date).isSame(new Date(), "day");

  const movies = Object.values(repertoire).map(movie => {
    const shows = movie.shows.map((show, index) => {
        const isCurrentlyPlaying = today && show.timeStart < moment().format('HH:mm:ss');
        return (
          <Link key={index} to={`/show/${show.showID}`} className={'me-2'}>
            <span className={`badge ${isCurrentlyPlaying ? 'bg-warning' : 'bg-light text-dark'}`} style={{'fontSize': '14px'}}>{show.timeStart}</span>
          </Link>
        )
      }
    )

    return (
      <tr key={movie.movieID}>
        <td style={{'width': '40%'}}><Link className={'text-decoration-none fw-bold'}
                                           to={`/movie/${movie.movieID}`}>{movie.movie}</Link></td>
        <td style={{'width': '15%'}}>{movie.duration} min</td>
        <td>{shows}</td>
      </tr>
    );
  })


  return (
    <div className={'row mb-3'}>
      <div className={'col'}>
        <span style={{'fontSize': '18px'}}
              className={`${today ? 'badge bg-info' : 'badge bg-light text-dark'}`}>{date}</span>
        <table className={'table mt-1'}>
          <tbody>
          {movies}
          </tbody>
        </table>
      </div>
    </div>
  );
}
