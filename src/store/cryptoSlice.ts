import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CryptoState {
  activeCrypto: string | null;
}

const initialState: CryptoState = {
  activeCrypto: null,
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    selectCrypto: (state, action: PayloadAction<string>) => {
      state.activeCrypto = action.payload;
    },
  },
});

export const { selectCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
