import "./Header.css";

import { NavLink } from "react-router-dom";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import SelectedCrypto from "../SelectCrypto/SelectCrypto";
import HeadingTitle from "@components/HeadingTitle/HeadingTitle";
import Navigation from "@components/Navigation/Navigation";

const Header: React.FC = () => {
  return (
    <SectionWrapper tag="header" sectionClass="header">
      <HeadingTitle />
      <SelectedCrypto />
      <Navigation />
    </SectionWrapper>
  );
};

export default Header;
