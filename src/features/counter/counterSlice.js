import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "Counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value = state.value + action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
