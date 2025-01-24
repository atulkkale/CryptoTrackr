import BarChart from "../components/BarChart/BarChart";
import CurrentPriceDisplay from "../components/CurrentPriceDisplay/CurrentPriceDisplay";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const Dashboard: React.FC = () => {
  return (
    <>
      <SectionWrapper sectionClass="current-price-section">
        <CurrentPriceDisplay />
      </SectionWrapper>
      <SectionWrapper sectionClass="current-price-section">
        <BarChart />
      </SectionWrapper>
    </>
  );
};

export default Dashboard;
