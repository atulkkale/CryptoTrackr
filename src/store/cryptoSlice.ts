import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Asset } from "../types/api";
import { getCurrentTime } from "@utils/util";

interface CryptoState {
  activeCrypto: string | null;
  fetchedCryptoCurrencies: string[];
  lastUpdated: string;
}

const initialState: CryptoState = {
  activeCrypto: null,
  fetchedCryptoCurrencies: [],
  lastUpdated: getCurrentTime(),
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    selectCrypto: (state, action: PayloadAction<string>) => {
      state.activeCrypto = action.payload;
    },
    setFetchCryptoCurrencies: (state, action: PayloadAction<string[]>) => {
      state.fetchedCryptoCurrencies = action.payload;
    },
    updateLastFetchTime: (state, action: PayloadAction<string>) => {
      state.lastUpdated = action.payload;
    },
  },
});

export const { selectCrypto, setFetchCryptoCurrencies, updateLastFetchTime } =
  cryptoSlice.actions;
export default cryptoSlice.reducer;
