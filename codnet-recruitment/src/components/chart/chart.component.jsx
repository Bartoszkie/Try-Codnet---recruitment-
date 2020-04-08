import React, { useEffect, useState } from "react";
import AmCharts from "@amcharts/amcharts3-react";
import { connect } from "react-redux";
import { config, generateChartData, generateGraph } from "./chart.utilities";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "line",
      data: this.generateChartData2(),
      chartedProps: [
        { prop: "sales", lineColor: "#49a6f4" },
        { prop: "commission", lineColor: "#000000" },
      ],
    };

    console.log("from chart", this.state.data);
  }

  generateChartData2 = () => {
    const { market_data } = this.props.currency.cryptocurrency;
    const { cryptocurrency } = this.props.currency;

    let chartData = [];

    chartData.push({
      marketCap: market_data.market_cap.usd,
      cryptoValue: cryptocurrency.market_data.current_price.usd,
    });

    // return chartData;
  };

  getGraphs() {
    return this.state.chartedProps.map((cp) =>
      generateGraph(cp.lineColor, cp.prop, this.state.type)
    );
  }

  componentDidMount() {
    config.dataProvider = this.state.data;
    config.graphs = this.getGraphs();
    this.chart = AmCharts.makeChart("chart0", config);
  }

  componentDidUpdate() {
    this.chart.dataProvider = this.state.data;
    this.chart.graphs = this.getGraphs();
    this.chart.validateNow(true);
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="col-xs-12">
          <div
            id={"chart0"}
            style={{
              height: "400px",
              width: "100%",
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.crypto,
});

export default connect(mapStateToProps)(Chart);
