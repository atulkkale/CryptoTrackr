import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Asset } from "../types/api";

interface CryptoState {
  activeCrypto: Asset | null;
  fetchedCryptoCurrencies: string[];
}

const initialState: CryptoState = {
  activeCrypto: null,
  fetchedCryptoCurrencies: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    selectCrypto: (state, action: PayloadAction<Asset>) => {
      state.activeCrypto = action.payload;
    },
    setFetchCryptoCurrencies: (state, action: PayloadAction<string[]>) => {
      state.fetchedCryptoCurrencies = action.payload;
    },
  },
});

export const { selectCrypto, setFetchCryptoCurrencies } = cryptoSlice.actions;
export default cryptoSlice.reducer;
