import React from 'react'

export default function NewDash() {
  return (
    <div className="container">
    <aside>
      {/* <!-- top --> */}
      <div className="top">
        <div className="logo">
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
            <li className="menu-header"><span> GENERAL </span></li>
            <li className="menu-item">
              <a href="#" className="active">
                <span className="menu-icon">
                  <span className="material-symbols-rounded"> dashboard </span>
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
                    <a href="#">
                      <span className="material-symbols-rounded">
                        show_chart
                      </span>
                      <span className="menu-title">Line chart</span>
                    </a>
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
                  <span className="material-symbols-rounded"> receipt_long </span>
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
            <li className="menu-item">
              <a href="#">
                <span className="material-symbols-rounded"> logout </span>
                <span className="menu-title">Logout</span>
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
      <div className="welcome-card">
        <div className="card-container">
          <div className="welcome-text">
            <h2>Welcome Back, <span>Kartik P S</span></h2>
            <h3>Have a Nice Day</h3>
          </div>
          <div className="welcome-img">
            <img src="Assets/Images/welcome.png" alt="" />
          </div>
        </div>
      </div>

      {/* <!-- cards --> */}
      <div className="insights">
        {/* <!-- expenses --> */}
        <div className="expenses">
          <div className="top">
            <span className="material-symbols-rounded"> currency_exchange </span>
            <span className="material-symbols-rounded i-more"> more_vert </span>
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
            <span className="material-symbols-rounded i-more"> more_vert </span>
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
            <span className="material-symbols-rounded i-more"> more_vert </span>
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
            <span className="material-symbols-rounded i-more"> more_vert </span>
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

      {/* <!-- Chart --> */}
      <div className="chart">
        <div className="chart-container">
          <h2>Expenses</h2>
          <canvas id="expense-chart"></canvas>
        </div>
      </div>
    </main>
    {/* <!-- End of Main --> */}

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
            <p>Hey, <b>Kartik</b></p>
            <small className="text-muted">view profile</small>
          </div>
          <div className="profile-photo">
            <img src="Assets/Images/user-profile.png" alt="" />
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
          <canvas id="yearly-chart"></canvas>
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
  )
}
