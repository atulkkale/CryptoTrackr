import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import "./CurrentPriceDisplay.css";
import { RootState } from "../../store/store";
import { fetchAssetById } from "../../api/cryptoApi";
import { updateLastFetchTime } from "../../store/cryptoSlice";
import { getCurrentTime } from "@utils/util";
import { useEffect } from "react";

const CurrentPriceDisplay: React.FC = () => {
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

  if (data) {
    return (
      <div className="current-price">
        <h2>{data.name}</h2>
        <img
          src="https://criptic.vercel.app/_next/static/media/bitcoin.81bd702b.svg"
          alt={data.name}
        />
        <div className="coin-price">
          {parseFloat(data.priceUsd).toFixed(7)} {data.symbol}
        </div>
        <ul>
          <li className="price">{parseFloat(data.priceUsd).toFixed(2)} USD</li>
          <li
            className={
              parseFloat(data.changePercent24Hr) > 0
                ? "percentage-positive"
                : "percentage-negative"
            }
          >
            {parseFloat(data.changePercent24Hr) > 0 ? "↑ +" : "↓ "}
            {parseFloat(data.changePercent24Hr).toFixed(2)}
          </li>
        </ul>
      </div>
    );
  }
};

export default CurrentPriceDisplay;
