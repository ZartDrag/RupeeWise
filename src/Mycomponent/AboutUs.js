import React from 'react'

export default function AboutUs() {
  return (
    <div>
      <div id="about" className="about">
      <div className="about__container section">
        <div className="row">
          <div className="row--container">
            <div className="col-1-of-2">
              <div className="about--left">
                <h2 className="about--text">About Us.</h2>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="about--right">
                <p className="about--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat<br /><br />Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="btn btn--learn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
