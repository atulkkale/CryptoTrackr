import { useQuery } from "@tanstack/react-query";
import { getCurrentTime } from "@utils/util";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssetById } from "../../api/cryptoApi";
import { updateLastFetchTime } from "../../store/cryptoSlice";

import { RootState } from "../../store/store";

const CryptoOverView: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCrypto = useSelector(
    (state: RootState) => state.crypto.activeCrypto
  );

  const { data, fetchStatus } = useQuery({
    queryKey: ["asset", selectedCrypto],
    queryFn: () => fetchAssetById(selectedCrypto!),
    enabled: !!selectedCrypto,
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (fetchStatus === "fetching") {
      dispatch(updateLastFetchTime(getCurrentTime()));
    }
  }, [fetchStatus]);

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

export default CryptoOverView;
