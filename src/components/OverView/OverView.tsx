import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { fetchAssetById } from "../../api/cryptoApi";
import { RootState } from "../../store/store";

const OverView: React.FC = () => {
  const selectedCrypto = useSelector(
    (state: RootState) => state.crypto.activeCrypto
  );

  const { data } = useQuery({
    queryKey: ["asset", selectedCrypto],
    queryFn: () => fetchAssetById(selectedCrypto!),
    enabled: !!selectedCrypto,
    refetchInterval: 5000,
  });

  return (
    <ul>
      <li>Market Cap - {parseFloat(data?.marketCapUsd!).toFixed(2)}</li>
      <li>Total Supply - {parseFloat(data?.maxSupply!).toFixed(2)}</li>
      <li>Circulating Supply - {parseFloat(data?.supply!).toFixed(2)}</li>
      <li>All-time High price - {parseFloat(data?.priceUsd!).toFixed(2)}</li>
      <li>Rank - {parseFloat(data?.rank!).toFixed(2)}</li>
    </ul>
  );
};

export default OverView;
