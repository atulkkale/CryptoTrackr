import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import "./CurrentPriceDisplay.css";

import { RootState } from "../../store/store";
import { fetchAssetById } from "../../api/cryptoApi";
import { updateLastFetchTime } from "../../store/cryptoSlice";
import { getCurrentTime, getRandomPriceCardColor } from "@utils/util";
import LivePrice from "@components/LivePrice/LivePrice";
import bitCoinImg from "../../assets/bitcoin.svg";
import tetherImg from "../../assets/tether.svg";
import cardanoImg from "../../assets/cardano.svg";
import binanceImg from "../../assets/binance.svg";

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
      <div
        className="current-price"
        style={{ backgroundColor: getRandomPriceCardColor() }}
      >
        <h2>{data.name}</h2>
        <ul className="crypto-images">
          <li>
            <img src={bitCoinImg} alt={data.name} />
          </li>
          <li>
            <img src={tetherImg} alt={data.name} />
          </li>
          <li>
            <img src={cardanoImg} alt={data.name} />
          </li>
          <li>
            <img src={binanceImg} alt={data.name} />
          </li>
        </ul>
        <div className="coin-price">
          <LivePrice id={selectedCrypto!} symbol={data.symbol} />
        </div>
        <ul className="price-percentage-info">
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

  return null;
};

export default CurrentPriceDisplay;
