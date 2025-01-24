import History from "@components/History/History";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const HistoryPage: React.FC = () => {
  return (
    <SectionWrapper sectionClass="dashboard">
      <History />
    </SectionWrapper>
  );
};

export default HistoryPage;
