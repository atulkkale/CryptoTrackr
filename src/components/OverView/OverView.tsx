import CryptoDescription from "@components/CryptoDescription/CryptoDescription";
import CryptoOverView from "@components/CryptoOverView/CryptoOverView";

const OverView: React.FC = () => {
  return (
    <>
      <CryptoOverView />
      <CryptoDescription />
    </>
  );
};

export default OverView;
