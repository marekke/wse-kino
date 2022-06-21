import {Link, NavLink, Route, Routes, useLocation} from "react-router-dom";
import RepertoireIndex from "./repertoire/RepertoireIndex";
import MovieView from "./movie/MovieView";
import ShowView from "./show/ShowView";
import TicketView from "./show/TicketView";
import {getRouteName} from "../../router/Helper";

function AppLayout() {
  const location = useLocation();

  console.log(location)


  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
        <div className="container-fluid">
          <Link to="/" className={'navbar-brand'}>Kino WSE</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02"
                  aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Repertuar</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <main className="col">
            <div
              className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-center">{getRouteName(location.pathname)}</h1>
            </div>
            <div>
              <Routes>
                <Route path='/' element={<RepertoireIndex />} />
                <Route path='movie/:movieID' element={<MovieView />} />
                <Route path='show/:showID' element={<ShowView />} />
                <Route path='show/:showID/ticket/:seatID' element={<TicketView />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
