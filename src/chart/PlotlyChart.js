import React from "react";
import Plotly from "react-plotly.js";

const PlotlyChart = ({ data }) => {
  return (
    <Plotly
      data={data}
      layout={{
        width: 410,
        height: 350,
        showlegend: false,
        margin: { t: 5, l: 40 },
      }}
      config={{ responsive: true, displayModeBar: false }}
    />
  );
};

export default PlotlyChart;
