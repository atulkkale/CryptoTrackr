export interface Asset {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string | null;
}

export interface CoinCapAssetsRes {
  data: Asset[];
  timestamp: number;
}

export interface CoinCapAssetRes {
  data: Asset;
  timestamp: number;
}

export interface MarketData {
  exchangeId: string;
  baseSymbol: string;
  quoteSymbol: string;
  priceUsd: string;
  volumeUsd24Hr: string;
}
