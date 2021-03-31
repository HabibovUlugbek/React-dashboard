import React from "react";
import BarchartIn from "../components/BarchartIn";
import PieChartExample from "../components/PieCharts";

const BarCricleWrap = () => {
  return (
    <div
      style={{ minHeight: "300px" }}
      className="row p-2 m-1 d-flex justify-content-between"
    >
      <div
        className="col-md-7 col-12 my-2 p-2 py-5"
        style={{
          boxSizing: "content-box",
          height: "300px",
          boxShadow: "5px 5px 4px grey",
          background: "rgb(250, 248, 248)",
        }}
      >
        <BarchartIn />
      </div>
      <div
        className="col-md-4 col-12 my-2 p-2 pb-5"
        style={{
          boxSizing: "content-box",
          height: "300px",
          boxShadow: "5px 5px 4px grey",
          background: "rgb(250, 248, 248)",
        }}
      >
        <PieChartExample />
      </div>
    </div>
  );
};

export default BarCricleWrap;
