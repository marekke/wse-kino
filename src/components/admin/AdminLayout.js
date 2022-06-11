import {Link, Route, Routes} from "react-router-dom";
import MovieIndex from "./movie/MovieIndex";
import MovieCreate from "./movie/MovieCreate";
import MovieUpdate from "./movie/MovieUpdate";

function AdminLayout() {

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
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home"></span>
                    Pulpit
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/admin/movies" className="nav-link">Filmy</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Seanse
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div
              className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div>
              <Routes>
                <Route path='movies' element={<MovieIndex />} />
                <Route path='movies/create' element={<MovieCreate />} />
                <Route path='movies/update/:movieID' element={<MovieUpdate />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
