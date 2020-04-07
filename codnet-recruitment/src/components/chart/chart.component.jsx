import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AmCharts from "@amcharts/amcharts3-react";
import moment from 'moment';

import { config, generateChartData, generateGraph } from "./chart.utilities";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "line",
      data: this.generateChartData(),
      chartedProps: [
        { prop: "sales", lineColor: "#49a6f4" },
        { prop: "commission", lineColor: "#000000" },
      ],
    };
  }

  generateChartData = () => {
    const { market_data } = this.props.currency.cryptocurrency;
    const { cryptocurrency } = this.props.currency;

    var chartData = [];
    var numPoints = 1000;
    // current date
    var firstDate = moment();
    // now set 500 minutes back
    firstDate.subtract(numPoints, "day");

    // and generate 500 data items
    var sales = market_data.market_cap.usd;
    var commission = cryptocurrency.market_data.current_price.usd;
    for (var i = 0; i < numPoints; i++) {
      var newDate = moment(firstDate);
      // each time we add one minute
      newDate.add(i, "day");
      chartData.push({
        date: newDate.format("YYYY-MM-DD"),
        sales,
        sales_locale: sales.toLocaleString("en-GB"),
        commission,
        commission_locale: Number(commission).toLocaleString("en-GB"),
      });
    }
    return chartData;
  };

  generateChartData2 = () => {
    const { market_data } = this.props.currency.cryptocurrency;
    const { cryptocurrency } = this.props.currency;

    let chartData = [];

    chartData.push({
      marketCap: market_data.market_cap.usd,
      cryptoValue: cryptocurrency.market_data.current_price.usd,
    });

    return chartData;
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
