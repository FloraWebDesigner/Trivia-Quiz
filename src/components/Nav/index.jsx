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
            to="/category"
            className={({ isActive }) =>
              isActive ? styles.active : "text-light"
            }
          >
            Category
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive ? styles.active : "text-light"
            }
          >
            Quiz
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
