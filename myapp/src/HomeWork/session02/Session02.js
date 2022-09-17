import { Outlet, Link } from "react-router-dom";
import { sesion02Path } from "../../contain";

function Session02() {
  const Keys = Object.keys(sesion02Path);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {Keys.map((Key, index) => 
            {
              
            return (
              <li key={index} className="nav-item active">
                <Link className="nav-link" to={sesion02Path[Key]}>
                  {Key} <span className="sr-only">(current)</span>
                </Link>
              </li>
            )})}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Session02;
