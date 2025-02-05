import axios from "axios";

import {
  Asset,
  CoinCapAssetRes,
  CoinCapAssetsRes,
  MarketData,
} from "../types/api";

export const fetchAssets = async (
  limit: string | null = "",
  ids: string = ""
): Promise<Asset[]> => {
  try {
    let url = "https://api.coincap.io/v2/assets";

    if (limit) {
      url += `?limit=${limit}`;
    }

    if (ids) {
      url += `${limit ? "&" : "?"}ids=${ids}`;
    }

    const assetsData = await axios.get<CoinCapAssetsRes>(url);
    return assetsData.data?.data || [];
  } catch (err) {
    throw new Error("Failed to fetch assets");
  }
};

export const fetchAssetById = async (
  assetId: string | undefined
): Promise<Asset> => {
  try {
    const assetData = await axios.get<CoinCapAssetRes>(
      `https://api.coincap.io/v2/assets/${assetId}`
    );
    return assetData.data?.data;
  } catch (err) {
    throw new Error("Failed to fetch assets");
  }
};

export const fetchMarkets = async (id: string): Promise<MarketData[]> => {
  try {
    const response = await axios.get(
      `https://api.coincap.io/v2/assets/${id}/markets`
    );
    return response.data.data;
  } catch (err) {
    throw new Error("Failed to fetch assets");
  }
};

export const fetchDescriptionById = async (
  id: string
): Promise<{ name: string; description: string } | null> => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    return {
      name: response.data?.name,
      description: response.data?.description?.en,
    };
  } catch (err) {
    throw new Error("Failed to fetch assets");
  }
};
