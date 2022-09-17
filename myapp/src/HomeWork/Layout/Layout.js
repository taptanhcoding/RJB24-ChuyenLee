import { Link } from "react-router-dom";
import { mainPath } from "../../contain";

function Layout() {
  const Keys = Object.keys(mainPath);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {Keys.map((Key, index) => Key != 'session01' &&(
              <li key={index} className="nav-item active">
                <Link className="nav-link" to={mainPath[Key]}>
                 {Key} <span className="sr-only">(current)</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Layout;
