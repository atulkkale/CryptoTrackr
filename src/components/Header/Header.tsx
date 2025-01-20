import "./Header.css";

import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const Header: React.FC = () => {
  return (
    <SectionWrapper tag="header" sectionClass="header">
      <h1>
        <Link to="/" title="CryptoTrackR">
          CryptoTrackR
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/" title="Dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/overview" title="Overview">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/history" title="History">
              History
            </Link>
          </li>
        </ul>
      </nav>
    </SectionWrapper>
  );
};

export default Header;
