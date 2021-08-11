import Navbar from 'components/Navbar';
import {Route} from 'react-router-dom';
import history from 'util/history';
import Home from 'pages/Home/';
import Materia from 'pages/Materia';

const Routes = () => (

    <switch>
      <Route exact path="/" component={Home} />
      <Route  path="/materia" component={Materia} />
    </switch>

);

export default Routes;