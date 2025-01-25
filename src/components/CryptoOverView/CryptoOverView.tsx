import "./CryptoOverView.css";

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
    <ul className="crypto-over-view">
      <ul>
        <li>
          <h2>Rank</h2>
          <span>{parseFloat(data?.rank!).toFixed(2)}</span>
        </li>
        <li>
          <h2>Market Cap</h2>
          <span>{parseFloat(data?.marketCapUsd!).toFixed(2)}</span>
        </li>
        <li>
          <h2>Total Supply</h2>
          <span>{parseFloat(data?.maxSupply!).toFixed(2)}</span>
        </li>
      </ul>
      <ul>
        <li>
          <h2>All-time High price</h2>
          <span>{parseFloat(data?.priceUsd!).toFixed(2)}</span>
        </li>
        <li>
          <h2>Circulating Supply</h2>
          <span>{parseFloat(data?.supply!).toFixed(2)}</span>
        </li>
      </ul>
    </ul>
  );
};

export default CryptoOverView;
