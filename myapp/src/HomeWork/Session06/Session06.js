import {Outlet,Link} from 'react-router-dom'
import {session06Path} from '../../contain'

function Session06() {
  const Keys = Object.keys(session06Path)

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
                <Link className="nav-link" to={session06Path[Key]}>
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

export default Session06;
