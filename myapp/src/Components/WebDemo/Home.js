import { Link, Outlet } from "react-router-dom";

function HomeLogin({user}) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Home
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {user?.email ? <li className="nav-item">
              <Link className="nav-link" to="/login">
                Logout
              </Link>
            </li> : <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>}
            
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLogin;
