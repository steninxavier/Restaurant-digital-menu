import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getDishes = createAsyncThunk("dishes/getDishes", async () => {
  return await axios
    .get("http://localhost:9000/dishes")
    .then((res) => res.data.data);
});
export const addDishe = createAsyncThunk("dishes/addDishe", async (values) => {
  return await axios
    .put("http://localhost:9000/dishes", values)
    .then((res) => res.data.data);
});
export const updateDishe = createAsyncThunk(
  "dishes/updateDishe",
  async (values) => {
    return await axios
      .put("http://localhost:9000/dishes/", values)
      .then((res) => res.data.data);
  }
);
export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    dishes: [],
  },
  extraReducers: {
    [getDishes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getDishes.fulfilled]: (state, action) => {
      state.status = "success";
      state.dishes = action.payload;
    },
    [getDishes.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addDishe.pending]: (state, action) => {
      state.status = "loading";
    },
    [addDishe.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addDishe.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateDishe.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateDishe.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [updateDishe.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default dishesSlice.reducer;
