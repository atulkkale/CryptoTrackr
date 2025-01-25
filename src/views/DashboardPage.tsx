import BarChart from "../components/BarChart/BarChart";
import CurrentPriceDisplay from "../components/CurrentPriceDisplay/CurrentPriceDisplay";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const DashboardPage: React.FC = () => {
  return (
    <>
      <SectionWrapper sectionClass="current-price-section">
        <CurrentPriceDisplay />
      </SectionWrapper>
      <SectionWrapper sectionClass="bar-chart-section">
        <BarChart />
      </SectionWrapper>
    </>
  );
};

export default DashboardPage;
