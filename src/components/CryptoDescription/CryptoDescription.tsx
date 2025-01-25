import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { fetchDescriptionById } from "../../api/cryptoApi";
import { RootState } from "src/store/store";

const CryptoDescription: React.FC = () => {
  const selectedCrypto = useSelector(
    (state: RootState) => state.crypto.activeCrypto
  );

  const { data: description } = useQuery({
    queryKey: ["description", selectedCrypto],
    queryFn: () => fetchDescriptionById(selectedCrypto!),
    enabled: !!selectedCrypto,
  });
  return (
    <div className="crypto-description">
      <p>{description ? description : "Description not found"}</p>
    </div>
  );
};

export default CryptoDescription;
