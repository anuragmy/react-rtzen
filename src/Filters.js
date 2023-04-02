import React, { useState } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addChartType, changeXAxis } from "./store/chart.slice";
import {
  CATEGORIES_OPTIONS,
  CHART_TYPE_FILTER_OPTIONS,
  MONTHS,
  QUARTERS,
} from "./constants";

const filters = () => {
  const dispatch = useDispatch();
  const { chartType } = useSelector((state) => state?.auth);
  const [value, setValue] = useState("monthly");

  const handleChange = (value) => {
    dispatch(addChartType(value));
  };
  const handleChangeXAxis = (value) => {
    setValue(value);
    if (value === "monthly") {
      dispatch(changeXAxis(MONTHS));
    } else if (value === "quarterly") dispatch(changeXAxis(QUARTERS));
  };

  return (
    <>
      <Select
        id="select"
        style={{ width: 120 }}
        onChange={handleChange}
        value={chartType}
        options={CHART_TYPE_FILTER_OPTIONS}
      />
      <Select
        id="select"
        style={{ width: 120 }}
        onChange={handleChangeXAxis}
        value={value}
        options={CATEGORIES_OPTIONS}
      />
    </>
  );
};

export default filters;
