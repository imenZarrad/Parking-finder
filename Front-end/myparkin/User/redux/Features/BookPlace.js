import { createSlice } from "@reduxjs/toolkit";

export const BookplaceSlice = createSlice({
  name: "bookplace",
  initialState: {
    value: {
      CarType: "",
      ParkingName: "mohamed",
      Adress: "",
      Floor: "",
      ParkingSpot: "",
      Date: "",
      Duration: "",
      Hours: 0,
    },
  },
  reducers: {
    ParkingNameAndAdress: (state, action) => {
      console.log(action.payload);

      state.value = action.payload;
      console.log(state.value, "eeeeeee");
    },
  },
});
export const { ParkingNameAndAdress } = BookplaceSlice.actions;
export default BookplaceSlice.reducer;
