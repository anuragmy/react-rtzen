import React, { useEffect, useState } from "react";
import "./style.css";
import Charts from "./Charts";
import Filters from "./Filters";
import { Col, Row } from "antd";
import ChartSelect from "./components/ChartSelect";
import { useDispatch } from "react-redux";
import { addChartType } from "./store/chart.slice";

export default function App() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  // useEffect(() => {
  //   if (active === 1) dispatch(addChartType("line"));
  //   else if (active === 2) dispatch(addChartType("area"));
  //   else if (active === 3) dispatch(addChartType("pie"));
  // }, [active]);

  const handleChange = (id) => {
    setActive(id);
  };
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <ChartSelect handleChange={handleChange} />
        </Col>

        <Filters />
      </Row>
    </div>
  );
}
