import "./Header.css";

import SectionWrapper from "../SectionWrapper/SectionWrapper";
import SelectedCrypto from "../SelectCrypto/SelectCrypto";
import HeadingTitle from "@components/HeadingTitle/HeadingTitle";
import Navigation from "@components/Navigation/Navigation";
import MobileNavigation from "@components/MobileNavigation/MobileNavigation";

const Header: React.FC = () => {
  return (
    <SectionWrapper tag="header" sectionClass="header">
      <HeadingTitle />
      <SelectedCrypto />
      <Navigation />
      <MobileNavigation />
    </SectionWrapper>
  );
};

export default Header;
