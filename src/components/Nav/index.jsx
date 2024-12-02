import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav
      id="main-navigation"
      aria-label="Main-menu"
      className="text-center mt-1"
    >
      <ul className="d-flex flex-column align-items-center justify-content-center">
        <li className="mb-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : "text-light"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mb-3">
          <NavLink
            to="/About"
            className={({ isActive }) =>
              isActive ? styles.active : "text-light"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Category"
            className={({ isActive }) =>
              isActive ? styles.active : "text-light"
            }
          >
            Category
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
