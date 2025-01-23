import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import "./SelectCrypto.css";

import { fetchAssets } from "../../api/cryptoApi";
import LoadingText from "../LoadingText/LoadingText";
import { selectCrypto } from "../../store/cryptoSlice";
import { useEffect, useState } from "react";

const SelectedCrypto: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("");
  const dispatch = useDispatch();
  const { isPending, data, refetch } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  function handleCryptoChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCrypto(e.target.value);
    dispatch(selectCrypto(e.target.value));
  }

  if (isPending || data.length === 0) return <LoadingText />;

  const assetOptions = data.map((asset: { name: string; id: string }) => (
    <option key={asset.id} value={asset.name}>
      {asset.name}
    </option>
  ));

  if (data) {
    dispatch(selectCrypto(data[0].name));
    selectCrypto(data[0].name);

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
