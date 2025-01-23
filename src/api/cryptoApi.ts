import axios from "axios";

export const fetchAssets = async () => {
  try {
    const assetsData = await axios.get(
      "https://api.coincap.io/v2/assets?limit=12"
    );
    console.log(assetsData.data?.data);
    return assetsData.data?.data || [];
  } catch (err) {}
};
