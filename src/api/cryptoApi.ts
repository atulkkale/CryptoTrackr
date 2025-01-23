import axios from "axios";

export const fetchAssets = async () => {
  try {
    const assetsData = await axios.get(
      "https://api.coincap.io/v2/assets?limit=12"
    );
    return assetsData.data?.data || [];
  } catch (err) {
    return err;
  }
};

export const fetchAssetById = async (assetId: string) => {
  try {
    const assetData = await axios.get(
      `https://api.coincap.io/v2/assets/${assetId}`
    );
    console.log(assetData.data?.data);
    return assetData.data?.data;
  } catch (err) {
    return err;
  }
};
