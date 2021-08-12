import { NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/materias" className="navbar-brand" >
          Direito
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
