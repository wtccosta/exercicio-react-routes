import Navbar from "components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routes from "Routes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes />
    </BrowserRouter>
  );
};

export default App;
