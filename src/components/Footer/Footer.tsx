import { useSelector } from "react-redux";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import { RootState } from "../../store/store";

const Footer: React.FC = () => {
  const lastUpdated = useSelector(
    (state: RootState) => state.crypto.lastUpdated
  );
  return (
    <SectionWrapper tag="footer" sectionClass="footer">
      This is the footer.
      <h3>The last updated time is {lastUpdated}</h3>
    </SectionWrapper>
  );
};

export default Footer;
