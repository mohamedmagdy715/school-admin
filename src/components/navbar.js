import { Link } from "react-router-dom";

export const Navbar = () => {
  const logout = () => {
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top ">
      <ul className="navbar-nav">
        <li className="navbar-brand">
          <Link className="nav-link active" to="/home">
            Home
          </Link>
        </li>
      </ul>
      <Link
        to="/"
        className="btn btn-outline-warning my-2 my-sm-0"
        type="button"
        onClick={logout}
      >
        Logout
      </Link>
    </nav>
  );
};
