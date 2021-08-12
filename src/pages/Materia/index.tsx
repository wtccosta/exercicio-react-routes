import { Link, Route, Switch } from "react-router-dom";
import Civil from "./Civil";
import Constitucional from "./Constitucional";
import "./styles.css";
const Materia = () => {
  return (
    <div className="container">
      <div className="row  mt-5">
        <div className="col-sm-1 col-md-2">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/materias" className="nav-link active">
                Materias
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/materias/civil" className="nav-link active">
                Civil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/materias/constitucional" className="nav-link active">
                Constitucional
              </Link>
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
                <Route path="/materias/civil" exact>
                  <Civil />
                </Route>
                <Route path="/materias/constitucional" exact>
                  <Constitucional />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Materia;
