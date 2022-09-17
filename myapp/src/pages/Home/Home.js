import { Link,NavLink } from "react-router-dom";
import { mainPath } from "../../contain";


function Home() {
  const Keys = Object.keys(mainPath);
  let activeStyle = {
    color : 'red'
  };

  let activeClassName = "underline";
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/">
          Home
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {Keys.map((Key, index) => Key != 'session01' &&(
              <li key={index} className="nav-item active">
                <NavLink className="nav-link" to={mainPath[Key]}>
                 {Key} <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Home;
