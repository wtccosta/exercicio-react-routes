import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          Navbar
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
