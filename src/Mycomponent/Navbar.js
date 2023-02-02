import React from 'react'

export default function Header() {
  return (
    <div>
      <div id="navbar" class="navbar">
      <div class="navbar__container">
        <div class="navbar__box">
          <div class="navbar__box-left">
            <div class="logo">
              <p class="logo--text">₹uppeWise</p>
            </div>
            <ul class="navbar__ul">
              <li class="navbar__ul--li">
                <a href="#header">Home</a>
              </li>
              <li class="navbar__ul--li">
                <a href="#about">About Us</a>
              </li>
              <li class="navbar__ul--li">
                <a href="#features">Features</a>
              </li>
              <li class="navbar__ul--li">
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="navbar__box--right">
            <button class="btn btn--signin">Sign In</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
