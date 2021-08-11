import { Link, NavLink, Route, Switch } from "react-router-dom"

const Home = () => {
    return (
      <div className="container">
        <div className="row  mt-5">
          <div className="col-sm-1 col-md-2">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/materia/constitucional" className="nav-link active">
                  Civil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/materia/" className="nav-link active">
                  Materia
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-1 col-md-10">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h2>HOME</h2>
              </div>
              <div className="card-body">
                <Switch>
                  <Route path="/materia/civil" exact>
                    <h1>Direito Civil</h1>
                  </Route>
                  <Route path="/materia/constitucional" exact>
                    <h1>Direito Constitucional</h1>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home;