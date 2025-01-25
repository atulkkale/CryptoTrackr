import "./CryptoDescription.css";

import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { fetchDescriptionById } from "../../api/cryptoApi";
import { RootState } from "src/store/store";

const CryptoDescription: React.FC = () => {
  const selectedCrypto = useSelector(
    (state: RootState) => state.crypto.activeCrypto
  );

  const { data, isLoading } = useQuery({
    queryKey: ["description", selectedCrypto],
    queryFn: () => fetchDescriptionById(selectedCrypto!),
    enabled: !!selectedCrypto,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="crypto-description">
      <h2>{selectedCrypto}</h2>
      <p>
        {data?.description ? data.description : "Description not available"}
      </p>
    </div>
  );
};

export default CryptoDescription;
