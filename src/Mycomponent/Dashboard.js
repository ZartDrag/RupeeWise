import React, { useRefs } from "react";
import { Helmet } from "react-helmet";

import { Chart } from "chart.js";

Chart.defaults.font.size = 12;
Chart.defaults.font.family = "'Poppins', sans-serif";

const gradient = window["chartjs-plugin-gradient"];

var yValues = [2000, 4000, 900, 12000, 7500, 5020, 9000];
var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

var valX = [1, 2, 3, 4, 5];
var valY = [2, 3, 1, 5, 1];
//expense-chart
// var ctx1;
// var gradientBg1;

// var expenseChart;

export default function Dashboard() {
  // ctx1 = document.getElementById("expense-chart").getContext("2d");
  var ctx1 = useRefs(null);
  var gradientBg1 = ctx1.createLinearGradient(0, 0, 0, 525);

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
  return (
    <>
      <Helmet>
        <script src="./chart.js"></script>
        <script src="node_modules/chart.js/dist/chart.umd.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-gradient"></script>
      </Helmet>
      <div>
        <div class="container">
          <aside>
            {/* <!-- top --> */}
            <div class="top">
              <div class="logo">
                <span class="material-symbols-outlined i-rupee-logo">
                  currency_rupee
                </span>
                <h2>₹upeeWise</h2>
                <div id="close-btn" class="close">
                  <span class="material-symbols-rounded"> close </span>
                </div>
              </div>
            </div>

            {/* <!-- ul --> */}
            <div class="sidebar-content">
              <nav class="menu open-current-submenu">
                <ul>
                  <li class="menu-header">
                    <span> GENERAL </span>
                  </li>
                  <li class="menu-item">
                    <a href="#" class="active">
                      <span class="menu-icon">
                        <span class="material-symbols-rounded">
                          {" "}
                          dashboard{" "}
                        </span>
                      </span>
                      <span class="menu-title">Dashboard</span>
                    </a>
                  </li>
                  <li class="menu-item sub-menu">
                    <a href="#" class="">
                      <span class="menu-icon">
                        <span class="material-symbols-rounded"> diamond </span>
                      </span>
                      <span class="menu-title">Features</span>
                    </a>
                    <div class="sub-menu-list">
                      <ul>
                        <li class="menu-item">
                          <a href="#">
                            <span class="material-symbols-rounded">
                              pie_chart
                            </span>
                            <span class="menu-title">Pie chart</span>
                          </a>
                        </li>
                        <li class="menu-item">
                          <a href="#">
                            <span class="material-symbols-rounded">
                              show_chart
                            </span>
                            <span class="menu-title">Line chart</span>
                          </a>
                        </li>
                        <li class="menu-item">
                          <a href="#">
                            <span class="material-symbols-rounded">
                              bar_chart
                            </span>
                            <span class="menu-title">Bar chart</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-icon">
                        <span class="material-symbols-rounded">
                          {" "}
                          receipt_long{" "}
                        </span>
                      </span>
                      <span class="menu-title">Transactions</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="menu-icon">
                        <span class="material-symbols-rounded"> settings </span>
                      </span>
                      <span class="menu-title">Settings</span>
                    </a>
                  </li>
                  <li class="menu-item">
                    <a href="#">
                      <span class="material-symbols-rounded"> logout </span>
                      <span class="menu-title">Logout</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          {/* <!-- End of Aside --> */}

          <main>
            <h1>Dashboard</h1>
            {/* <!-- welcome --> */}
            <div class="welcome-card">
              <div class="card-container">
                <div class="welcome-text">
                  <h2>
                    Welcome Back, <span>Kartik P S</span>
                  </h2>
                  <h3>Have a Nice Day</h3>
                </div>
                <div class="welcome-img">
                  <img src="Assets/Images/welcome.png" alt="" />
                </div>
              </div>
            </div>

            {/* <!-- cards --> */}
            <div class="insights">
              {/* <!-- expenses --> */}
              <div class="expenses">
                <div class="top">
                  <span class="material-symbols-rounded">
                    {" "}
                    currency_exchange{" "}
                  </span>
                  <span class="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div class="middle">
                  <div class="left">
                    <h3>Expenses</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div class="text-muted">Last 24 hours</div>
              </div>

              {/* <!-- Profit --> */}
              <div class="profit">
                <div class="top">
                  <span class="material-symbols-rounded"> chart_data </span>
                  <span class="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div class="middle">
                  <div class="left">
                    <h3>Profit</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div class="text-muted">Last 24 hours</div>
              </div>

              {/* <!-- Saved --> */}
              <div class="saved">
                <div class="top">
                  <span class="material-symbols-rounded"> savings </span>
                  <span class="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div class="middle">
                  <div class="left">
                    <h3>Saved</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div class="text-muted">Last Month</div>
              </div>

              <div class="wallet">
                <div class="top">
                  <span class="material-symbols-rounded">
                    account_balance_wallet
                  </span>
                  <span class="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div class="middle">
                  <div class="left">
                    <h3>Wallet</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div class="text-muted">Total</div>
              </div>
            </div>
            {/* 
        <!-- Chart --> */}
            <div class="chart">
              <div class="chart-container">
                <h2>Expenses</h2>
                <canvas ref={ctx1}></canvas>
              </div>
            </div>
          </main>
          {/* <!-- End of Main --> */}

          {/* <!-- Right --> */}
          <div class="right">
            <div class="top">
              <button class="menu-btn">
                <span class="material-symbols-rounded"> menu </span>
              </button>
              <div class="icon-set">
                <span class="material-symbols-rounded"> settings </span>
                <span class="material-symbols-rounded"> notifications </span>
              </div>
              <div class="profile">
                <div class="info">
                  <p>
                    Hey, <b>Kartik</b>
                  </p>
                  <small class="text-muted">view profile</small>
                </div>
                <div class="profile-photo">
                  <img src="Assets/Images/user-profile.png" alt="" />
                </div>
              </div>
            </div>

            {/* <!-- yearly report --> */}
            <div class="report">
              <div class="left">
                <h3>Yearly Report</h3>
                <span class="pill">YEAR 2021</span>
                <h1>₹ 5,00,000</h1>
              </div>
              <div class="right">
                <canvas id="yearly-chart"></canvas>
              </div>
            </div>

            {/* <!-- Statistics --> */}
            <div class="stats">
              <div class="stats-container">
                <h2>Statistics</h2>
                <div class="stats-item">
                  <div class="item-set">
                    <h2>Electronics</h2>
                    <h3>Mobile, Earbuds, TV</h3>
                  </div>
                  <h3 class="total">82.5k</h3>
                </div>
                <div class="stats-item">
                  <div class="item-set">
                    <h2>Fashion</h2>
                    <h3>T-shirt, Jeans, Shoes</h3>
                  </div>
                  <h3 class="total">23.8k</h3>
                </div>
                <div class="stats-item">
                  <div class="item-set">
                    <h2>Decor</h2>
                    <h3>Fine Art, Dining</h3>
                  </div>
                  <h3 class="total">849k</h3>
                </div>
                <div class="stats-item">
                  <div class="item-set">
                    <h2>Sports</h2>
                    <h3>Football, Cricket Kit</h3>
                  </div>
                  <h3 class="total">99k</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
