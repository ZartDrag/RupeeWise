import  React,{  useRef ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import welcome from './image/welcome.png'
import userprofile from './image/userprofile.png';
 import { Chart } from "chart.js";
 import {HashLink as Link} from 'react-router-hash-link';
import { registerables } from "chart.js";
import { CategoryScale,LinearScale } from "chart.js";

Chart.register(CategoryScale,LinearScale,...registerables);
var expenseChart;
var yearlychart;
export default function Dashboard() {
  
  
  expenseChart = useRef(null);
  yearlychart=useRef(null);
 const navigate = useNavigate();
  
  useEffect(()=>{
  const ctx=expenseChart.current;
  
var ctx1=ctx.getContext('2d');
 var gradientBg1 = ctx1.createLinearGradient(0, 0, 0, 525);

 Chart.defaults.font.size = 12;
 Chart.defaults.font.family = "'Poppins', sans-serif";

 const gradient = window["chartjs-plugin-gradient"];

   var yValues = [2000, 4000, 900, 12000, 7500, 5020, 9000];
  var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

 var valX = [1, 2, 3, 4, 5];
 var valY = [2, 3, 1, 5, 1];
   gradientBg1.addColorStop(0, "rgba(116,185,255,0.6)");
   gradientBg1.addColorStop(1, "rgba(116,185,255,0)");
  var expenChart = new Chart(ctx1, {
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
 
    const ctx2=yearlychart.current;
    var ctx3=ctx2.getContext('2d');
    var yearChart = new Chart(ctx3, {
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
 
 
 
 
  },[])

  
  return (
    <>
      <div>
        <div className="container">
          
          <aside>
            {/* <!-- top --> */}
            <div className="top">
              <div className="logo" onClick={() =>navigate("/", { replace: true })}>
                <span className="material-symbols-outlined i-rupee-logo">

                  currency_rupee
                </span>
                <h2>₹upeeWise</h2>
                <div id="close-btn" className="close">
                  <span className="material-symbols-rounded"> close </span>
                </div>
              </div>
            </div>

            {/* <!-- ul --> */}
            <div className="sidebar-content">
              <nav className="menu open-current-submenu">
                <ul>
                  <li className="menu-header">
                    <span> GENERAL </span>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="active">
                      <span className="menu-icon">
                        <span className="material-symbols-rounded">
                          {" "}
                          dashboard{" "}
                        </span>
                      </span>
                      <span className="menu-title">Dashboard</span>
                    </a>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#" className="">
                      <span className="menu-icon">
                        <span className="material-symbols-rounded"> diamond </span>
                      </span>
                      <span className="menu-title">Features</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="material-symbols-rounded">
                              pie_chart
                            </span>
                            <span className="menu-title">Pie chart</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <Link to="#linechart" smooth>
                            <span className="material-symbols-rounded">
                              show_chart
                            </span>
                            <span className="menu-title">Line chart</span>
                          </Link>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="material-symbols-rounded">
                              bar_chart
                            </span>
                            <span className="menu-title">Bar chart</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <span className="material-symbols-rounded">
                          {" "}
                          receipt_long{" "}
                        </span>
                      </span>
                      <span className="menu-title">Transactions</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <span className="material-symbols-rounded"> settings </span>
                      </span>
                      <span className="menu-title">Settings</span>
                    </a>
                  </li>
                  <li className="menu-item" onClick={() =>navigate("/login", { replace: true })}>
                    <a href="#">
                      <span className="material-symbols-rounded"> logout </span>
                      <span className="menu-title" >Logout</span>
                    </a>
                  </li>
                </ul>

                <button class="btn btn--addnew">
                  <span class="material-symbols-rounded i-add">add</span>
                  <span>Add New</span>
                </button>
              </nav>
            </div>
          </aside>
          {/* <!-- End of Aside --> */}

          <main class="hide">
            <h1>Dashboard</h1>
            {/* <!-- welcome --> */}
            <div className="welcome-card">
              <div className="card-container">
                <div className="welcome-text">
                  <h2>
                    Welcome Back, <span>Kartik P S</span>
                  </h2>
                  <h3>Have a Nice Day</h3>
                </div>
                <div className="welcome-img">
                  <img src={welcome} alt="" />
                </div>
              </div>
            </div>

            {/* <!-- cards --> */}
            <div className="insights">
              {/* <!-- expenses --> */}
              <div className="expenses">
                <div className="top">
                  <span className="material-symbols-rounded">
                    {" "}
                    currency_exchange{" "}
                  </span>
                  <span className="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div className="middle">
                  <div className="left">
                    <h3>Expenses</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div className="text-muted">Last 24 hours</div>
              </div>

              {/* <!-- Profit --> */}
              <div className="profit">
                <div className="top">
                  <span className="material-symbols-rounded"> chart_data </span>
                  <span className="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div className="middle">
                  <div className="left">
                    <h3>Profit</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div className="text-muted">Last 24 hours</div>
              </div>

              {/* <!-- Saved --> */}
              <div className="saved">
                <div className="top">
                  <span className="material-symbols-rounded"> savings </span>
                  <span className="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div className="middle">
                  <div className="left">
                    <h3>Saved</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div className="text-muted">Last Month</div>
              </div>

              <div className="wallet">
                <div className="top">
                  <span className="material-symbols-rounded">
                    account_balance_wallet
                  </span>
                  <span className="material-symbols-rounded i-more">
                    {" "}
                    more_vert{" "}
                  </span>
                </div>
                <div className="middle">
                  <div className="left">
                    <h3>Wallet</h3>
                    <h1>₹ 2500</h1>
                  </div>
                </div>
                <div className="text-muted">Total</div>
              </div>
            </div>
            {/* 
        <!-- Chart --> */}
            <div className="chart">
               <div className="chart-container"  id="linechart"> 
                <h2>Expenses</h2>
                <canvas ref={expenseChart}></canvas>
              </div>
            </div>
          </main>
          {/* <!-- End of Main --> */}

          {/* Form */}
          <div class="user-form">
            <h1>Form</h1>
            <form>
              <div class="form-container">
                <div className="title--wrapper">
                  <div className="label--wrapper">
                    <label for="title">Title</label>
                  </div>
                  <div className="titleInput--box">
                    <input
                      type="text"
                      name="title"
                      className="user-form--title"
                    />
                  </div>
                </div>
                <div className="input--set">
                  <div className="type--wrapper">
                    <div className="label--wrapper">
                      <label for="type">Type</label>
                    </div>
                    <div className="typeInput--box">
                      <input
                        type="text"
                        name="type"
                        className="user-form--type"
                      />
                    </div>
                  </div>
                  <div className="amount--wrapper">
                    <div className="label--wrapper">
                      <label for="amount">Amount</label>
                    </div>
                    <div className="amountInput--box">
                      <span class="material-symbols-outlined i-rupee">
                        currency_rupee
                      </span>
                      <input
                        type="number"
                        name="amount"
                        className="user-form--amount"
                      />
                    </div>
                  </div>
                </div>
                <div className="category--wrapper">
                  <div className="label--wrapper">
                    <label for="category">Category</label>
                  </div>
                  <div className="categoryInput--box">
                    <input
                      type="text"
                      name="category"
                      className="user-form--category"
                    />
                  </div>
                </div>
                <div className="description--wrapper">
                  <div className="label--wrapper">
                    <label for="description">Description</label>
                  </div>
                  <div className="descriptionInput--box">
                    <textarea
                      type="text"
                      name="description"
                      rows="10"
                      cols="30"
                      className="user-form--description"
                    ></textarea>
                  </div>
                </div>
                <button class="btn btn--submit">Submit</button>
              </div>
            </form>
          </div>

          {/* <!-- Right --> */}
          <div className="right">
            <div className="top">
              <button className="menu-btn">
                <span className="material-symbols-rounded"> menu </span>
              </button>
              <div className="icon-set">
                <span className="material-symbols-rounded"> settings </span>
                <span className="material-symbols-rounded"> notifications </span>
              </div>
              <div className="profile">
                <div className="info">
                  <p>
                    Hey, <b>Kartik</b>
                  </p>
                  <small className="text-muted">view profile</small>
                </div>
                <div className="profile-photo">
                  <img src={userprofile} alt="" />
                </div>
              </div>
            </div>

            {/* <!-- yearly report --> */}
            <div className="report">
              <div className="left">
                <h3>Yearly Report</h3>
                <span className="pill">YEAR 2021</span>
                <h1>₹ 5,00,000</h1>
              </div>
              <div className="right">
                 <canvas ref={yearlychart}></canvas> 
              </div>
            </div>

            {/* <!-- Statistics --> */}
            <div className="stats">
              <div className="stats-container">
                <h2>Statistics</h2>
                <div className="stats-item">
                  <div className="item-set">
                    <h2>Electronics</h2>
                    <h3>Mobile, Earbuds, TV</h3>
                  </div>
                  <h3 className="total">82.5k</h3>
                </div>
                <div className="stats-item">
                  <div className="item-set">
                    <h2>Fashion</h2>
                    <h3>T-shirt, Jeans, Shoes</h3>
                  </div>
                  <h3 className="total">23.8k</h3>
                </div>
                <div className="stats-item">
                  <div className="item-set">
                    <h2>Decor</h2>
                    <h3>Fine Art, Dining</h3>
                  </div>
                  <h3 className="total">849k</h3>
                </div>
                <div className="stats-item">
                  <div className="item-set">
                    <h2>Sports</h2>
                    <h3>Football, Cricket Kit</h3>
                  </div>
                  <h3 className="total">99k</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
