import {Route, Routes} from "react-router-dom";
import RepertoireIndex from "./repertoire/RepertoireIndex";
import MovieView from "./movie/MovieView";

function AppLayout() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Kino WSE</a>
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
          <main className="col">
            <div
              className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2 text-center">Repertuar</h1>
            </div>
            <div>
              <Routes>
                <Route path='/' element={<RepertoireIndex />} />
                <Route path='movie/:movieID' element={<MovieView />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
