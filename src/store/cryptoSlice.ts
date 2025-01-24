import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CryptoState {
  activeCrypto: string;
  fetchedCryptoCurrencies: string[];
}

const initialState: CryptoState = {
  activeCrypto: "",
  fetchedCryptoCurrencies: [],
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
  },
});

export const { selectCrypto, setFetchCryptoCurrencies } = cryptoSlice.actions;
export default cryptoSlice.reducer;
