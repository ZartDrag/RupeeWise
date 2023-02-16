"use script";

// global
Chart.defaults.font.size = 12;
Chart.defaults.font.family = "'Poppins', sans-serif";

const gradient = window["chartjs-plugin-gradient"];

var yValues = [2000, 4000, 900, 12000, 7500, 5020, 9000];
var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

var valX = [1, 2, 3, 4, 5];
var valY = [2, 3, 1, 5, 1];
//expense-chart
var ctx1 = document.getElementById("expense-chart").getContext("2d");
const gradientBg1 = ctx1.createLinearGradient(0, 0, 0, 525);

gradientBg1.addColorStop(0, "rgba(116,185,255,0.6)");
gradientBg1.addColorStop(1, "rgba(116,185,255,0)");

var expenseChart = new Chart(ctx1, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "2022",
        backgroundColor: gradientBg1,
        borderColor: "rgba(116,185,255,0.4)",
        data: yValues,
        tension: 0.3,
        pointHoverBackgroundColor: "rgba(9,132,227,1.0)",
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 10,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            family: "'Poppins', sans-serif",
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#2d3436",
        },
      },

      y: {
        border: {
          display: false,
        },
        ticks: {
          callback: function (value, index, ticks) {
            return "₹" + value;
          },
        },
      },
    },
  },
});

//yearly-chart
var ctx2 = document.getElementById("yearly-chart").getContext("2d");

var yearlyChart = new Chart(ctx2, {
  type: "line",
  data: {
    labels: valX,
    datasets: [
      {
        label: 2021,
        backgroundColor: "#feca57",
        borderColor: "#feca57",
        data: valY,
        tension: 0.5,
        pointHoverRadius: 5,
      },
    ],
  },

  options: {
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawborder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          drawborder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
});
