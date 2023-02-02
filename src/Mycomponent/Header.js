import React from 'react'
import header12 from './image/header_Img.png';


export default function Header1() {
  return (
    <div>
      <div id="header" class="header">
      <div class="header__container">
        <div class="row">
          <div class="row--container">
            <div class="col-1-of-2">
              <div class="header__container--left">
                <h1 class="hero--text">
                  Organise You<span class="hero--text-symbol">₹</span> Money
                </h1>
                <p class="hero--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button class="btn btn--createacc">Create an Account</button>
              </div>
            </div>
            <div class="col-1-of-2">
              <div class="header__container--right">
                <img src={header12} alt="header-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
