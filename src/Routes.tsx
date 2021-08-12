// import Navbar from 'components/Navbar';
import {Route, Router} from 'react-router-dom';
import history from 'util/history';
import Home from 'pages/Home/';
import Materia from 'pages/Materia';
import Page404 from 'pages/Page404';
import Navbar from 'components/Navbar';

const Routes = () => (
  <Router history={history} >
    <Navbar />
    <switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/materias">
        <Materia />
      </Route>
    </switch>
  </Router>
);

export default Routes;