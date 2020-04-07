import moment from "moment";

export const config = {
  type: "serial",
  theme: "light",
  valueAxes: [
    {
      dashLength: 0,
      position: "left",
      axisAlpha: 0.05,
      gridAlpha: 0.05,
    },
  ],
  categoryField: "date",
  dataDateFormat: "YYYY-MM-DD",
  categoryAxis: {
    parseDates: true,
    tickLength: 1,
    axisThickness: 1,
    gridThickness: 1,
    axisColor: "#e9ebee",
    dashLength: 0,
    axisAlpha: 0.1,
    gridAlpha: 0.1,
    labelFunction: (text) => text.substring(0, 20),
  },
  chartCursor: {
    cursorColor: "#24537A",
    categoryBalloonEnabled: false,
    cursorPosition: "mouse",
    showNextAvailable: true,
  },
  export: { enabled: true },
  addClassNames: true,
  fontSize: 12,
};

// generate some random data, quite different range
export const generateChartData = () => {
  var chartData = [];
  var numPoints = 1000;
  // current date
  var firstDate = moment();
  // now set 500 minutes back
  firstDate.subtract(numPoints, "day");

  // and generate 500 data items
  var sales = 1000;
  var commission = 1000;
  for (var i = 0; i < numPoints; i++) {
    var newDate = moment(firstDate);
    // each time we add one minute
    newDate.add(i, "day");
    // some random number
    sales += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    commission += Math.round(
      (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
    );
    // add data item to the array
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



export const generateGraph = (
  lineColor,
  valueField,
  type,
  compareDates,
  number
) => {
  return {
    lineColor,
    bullet: "round",
    bulletBorderAlpha: 1,
    bulletColor: "#FFFFFF",
    bulletSize: 8,
    hideBulletsCount: 50,
    useLineColorForBulletBorder: true,
    valueField,
    balloonText: compareDates
      ? number === 1
        ? `[[date${number}]]: <b>[[${valueField.substr(
            0,
            valueField.length - 1
          )}_locale1]]</b>`
        : `[[date]]: <b>[[${valueField.substr(
            0,
            valueField.length - 1
          )}_locale]]</b>`
      : `[[date]]: <b>[[${valueField}_locale]]</b>`,
    lineThickness: 3,
    type,
    fillAlphas: lineColor === "#49a6f4" ? 0.1 : 0,
  };
};
