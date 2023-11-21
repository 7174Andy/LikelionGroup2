import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        Fridge
        <Link className="home" to="/">
          Home
        </Link>
        <Link to="/create">New Recipe</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
