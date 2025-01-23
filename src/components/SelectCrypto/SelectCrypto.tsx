import { useQuery } from "@tanstack/react-query";

import "./SelectCrypto.css";

import { fetchAssets } from "../../api/cryptoApi";
import LoadingText from "../LoadingText/LoadingText";

const SelectedCrypto: React.FC = () => {
  const { isPending, isError, data } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
  });

  if (isPending) return <LoadingText />;

  if (isError) {
    // Set global complex_error to true.
  }

  const assetOptions = data.map((asset: { name: string; id: string }) => (
    <option key={asset.id} value={asset.name}>
      {asset.name}
    </option>
  ));

  if (data) {
    return (
      <div className="selected-crypto">
        <select>{assetOptions}</select>
      </div>
    );
  }
};

export default SelectedCrypto;
