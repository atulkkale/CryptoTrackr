import "./Header.css";

import { Link, NavLink } from "react-router-dom";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const Header: React.FC = () => {
  return (
    <SectionWrapper tag="header" sectionClass="header">
      <h1>
        <Link
          to="/"
          title="CryptoTrackR"
        >
          CryptoTrackR
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/"
              title="Dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/overview"
              title="Overview"
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/history"
              title="History"
            >
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </SectionWrapper>
  );
};

export default Header;
