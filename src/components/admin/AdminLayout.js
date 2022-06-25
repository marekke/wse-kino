import {Link, NavLink, Route, Routes, useLocation} from "react-router-dom";
import MovieIndex from "./movie/MovieIndex";
import MovieCreate from "./movie/MovieCreate";
import MovieUpdate from "./movie/MovieUpdate";
import ScreenRoomIndex from "./screenRoom/ScreenRoomIndex";
import ScreenRoomCreate from "./screenRoom/ScreenRoomCreate";
import ScreenRoomUpdate from "./screenRoom/ScreenRoomUpdate";
import ShowIndex from "./show/ShowIndex";
import ShowCreate from "./show/ShowCreate";
import Error from "../app/Error";
import ShowView from "./show/ShowView";
import {getRouteName} from "../../router/Helper";
import AdminIndex from "./AdminIndex";

function AdminLayout() {
  const location = useLocation();

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-danger flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Kino - Admin</a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Pulpit
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/admin/movies" className="nav-link">Filmy</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/admin/screen-rooms" className="nav-link">Sale kinowe</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/admin/shows" className="nav-link">Seanse</NavLink>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">{getRouteName(location.pathname)}</h1>
            </div>
            <Error />
            <div>
              <Routes>
                <Route path='/' element={<AdminIndex />} />
                <Route path='movies' element={<MovieIndex />} />
                <Route path='movies/create' element={<MovieCreate />} />
                <Route path='movies/update/:movieID' element={<MovieUpdate />} />
                <Route path='screen-rooms' element={<ScreenRoomIndex />} />
                <Route path='screen-rooms/create' element={<ScreenRoomCreate />} />
                <Route path='screen-rooms/update/:screenRoomID' element={<ScreenRoomUpdate />} />
                <Route path='shows' element={<ShowIndex />} />
                <Route path='shows/create' element={<ShowCreate />} />
                <Route path='shows/view/:showID' element={<ShowView />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
