import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import "./SelectCrypto.css";

import { fetchAssets } from "../../api/cryptoApi";
import LoadingText from "../LoadingText/LoadingText";
import {
  selectCrypto,
  setFetchCryptoCurrencies,
} from "../../store/cryptoSlice";
import { useEffect, useState } from "react";
import { Asset } from "../../types/api";

const SelectedCrypto: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("");
  const dispatch = useDispatch();
  const { isPending, data, refetch } = useQuery({
    queryKey: ["assets"],
    queryFn: () => fetchAssets("12"),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (data) {
      dispatch(selectCrypto(data[0].id));
      dispatch(setFetchCryptoCurrencies(data.map((asset) => asset.id)));
    }
  }, [data]);

  function handleCryptoChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCrypto(e.target.value);
    dispatch(selectCrypto(e.target.value));
  }

  if (isPending || data?.length === 0) return <LoadingText />;

  const assetOptions = data?.map((asset: Asset) => (
    <option key={asset.id} value={asset.id}>
      {asset.name}
    </option>
  ));

  if (data) {
    return (
      <div className="selected-crypto">
        <select value={selectedCrypto} onChange={handleCryptoChange}>
          {assetOptions}
        </select>
      </div>
    );
  }
};

export default SelectedCrypto;
