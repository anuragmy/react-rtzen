import { combineReducers } from "@reduxjs/toolkit";
import { chartSlice } from "./chart.slice";

const rootReducer = combineReducers({
  auth: chartSlice.reducer,
});

export default rootReducer;
