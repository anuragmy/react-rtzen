import { createSlice } from "@reduxjs/toolkit";
import { MONTHS } from "../constants";

export const initialState = {
  chartType: "line",
  categories: MONTHS,
  chartNo: 1,
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    addChartType: (state, action) => {
      state.chartType = action.payload;
    },
    changeXAxis: (state, action) => {
      state.categories = action.payload;
    },
    changeChartNo: (state, action) => {
      state.chartNo = action.payload;
    },
  },
});

export const { addChartType, changeXAxis } = chartSlice.actions;
