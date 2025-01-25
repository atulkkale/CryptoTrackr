import CryptoDescription from "@components/CryptoDescription/CryptoDescription";
import CryptoOverView from "@components/CryptoOverView/CryptoOverView";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const OverViewPage: React.FC = () => {
  return (
    <>
      <SectionWrapper sectionClass="crypto-overview">
        <CryptoOverView />
      </SectionWrapper>
      <SectionWrapper sectionClass="crypto-description">
        <CryptoDescription />
      </SectionWrapper>
    </>
  );
};

export default OverViewPage;
