import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user_id: "",
      userParkiCoins: 1000,
    },
  },
});
