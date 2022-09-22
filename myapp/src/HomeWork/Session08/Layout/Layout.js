import classNames from "classnames/bind";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const cx = classNames.bind(styles);
function Layout() {
  return (
    <>
      <nav className={cx("navbar navbar-expand-lg navbar-light bg-light")}>
        <NavLink className={cx("navbar-brand")} style={({isActive}) => isActive ? {color: 'red'}: undefined} to="/">
          Navbar
        </NavLink>
        <div className={cx("collapse navbar-collapse")} id="navbarSupportedContent">
          <ul className={cx("navbar-nav mr-auto")}>
            <li className={cx("nav-item")}>
              <NavLink className={cx("nav-link")} style={({isActive}) => isActive ? {color: 'red'}: undefined}   to="/customer">
                customer
              </NavLink>
            </li>
            <li className={cx("nav-item")}>
              <NavLink className={cx("nav-link")} style={({isActive}) => isActive ? {color: 'red'}: undefined}   to="/product">
                product
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
