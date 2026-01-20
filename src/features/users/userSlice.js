import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./usersThunks";
import { STATUS } from "./enum.js";
const userSlice = createSlice({
  name: "User",
  initialState: {
    users: [],
    status: STATUS.IDLE,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = STATUS.LOADING;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = STATUS.SUCCEEDED;
        state.users = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = STATUS.FAILED;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
