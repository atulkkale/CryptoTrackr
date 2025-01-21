import CurrentPriceDisplay from "../components/CurrentPriceDisplay/CurrentPriceDisplay";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const Dashboard: React.FC = () => {
  return (
    <>
      <SectionWrapper sectionClass="current-price-section">
        <CurrentPriceDisplay />
      </SectionWrapper>
    </>
  );
};

export default Dashboard;
