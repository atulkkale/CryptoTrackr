import "./Footer.css";

import { useSelector } from "react-redux";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { RootState } from "../../store/store";

const Footer: React.FC = () => {
  const lastUpdated = useSelector(
    (state: RootState) => state.crypto.lastUpdated
  );
  return (
    <SectionWrapper tag="footer" sectionClass="footer">
      <p>Data last updated on {lastUpdated}.</p>
    </SectionWrapper>
  );
};

export default Footer;
