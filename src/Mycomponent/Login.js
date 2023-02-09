import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    var loginFormContainer = document.querySelector("#loginform--container");
    var signupFormContainer = document.querySelector("#signupform--container");
    
    // // functions
    
    // /*
    // function to toggle login and Sign up form containers
    // */
    function toggleActive(cls1, cls2) {
      if (cls1 != null && cls1.classList.contains("hide")) {
        cls1.classList.remove("hide");
        cls2.classList.add("hide");
      } else {
        console.log("not working");
      }
    }
    
    function activeLogin() {
      toggleActive(loginFormContainer, signupFormContainer);
    }
    
    function activeSignUp() {
      toggleActive(signupFormContainer, loginFormContainer);
    }
    
    function windowOpener(windowPage) {
      window.open(windowPage);
    }
    const navigate=useNavigate();

  return (
    <div>


      <div class="loginPage">
      <div class="loginPage__leftside">
        <div class="loginPage--logo">
          <a href="index.html">₹upeeWise</a>
        </div>
        <div class="loginPage--headingbox">
          <h1 class="loginPage--hero">Welcome to<br />RupeeWise</h1>
          <p class="loginPage--para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
      </div>
      <div class="loginPage__rightside">

      {/* <!-- login --> */}
        
        <div id="loginform--container" class="loginform--container">
          <h2 class="login--text">Log in</h2>
          <div class="input--area">
            <div class="username--wrapper input--field">
              <label for="username">Username</label><br />
              <div class="loginInput--box">
                <input type="text" name="username" class="login--uname" />
                <span class="material-symbols-rounded i-check hide">
                  check
                </span>
                <span class="material-symbols-rounded i-exclaim hide">
                  exclamation
                </span>
              </div>
            </div>
            <div class="password--wrapper input--field">
              <label for="password">Password</label><br />
              <div class="loginInput--box">
                <input type="password" name="password" class="login--pass" />
                <span class="material-symbols-rounded i-check hide">
                  check
                </span>
                <span class="material-symbols-rounded i-exclaim hide">
                  exclamation
                </span>
              </div>
            </div>
            <div class="submit--wrapper">
              <button type="submit" class="btn btn--login" onClick={()=>navigate('/login/dashboard',{replace:true})}>Log in</button>
            </div>
            <div class="forgot--wrapper">
              <span class="forgot--text">Forgot Password?</span>
            </div>
            <div class="create--wrapper">
              <span onclick={activeSignUp} class="create--text"
                >Create an Account</span
              >
            </div>
          </div>
        </div>

        {/* <!-- Sign up --> */}
        <div id="signupform--container" class="signupform--container hide">
          <h2 class="signup--text">Sign Up</h2>
          <div class="input--area">
            <div class="username--wrapper input--field">
              <div class="label--wrapper">
                <label for="username">Username</label>
                <span class="alert--text hide">Already Exist</span>
              </div>
              <div class="signupInput--box">
                <input type="text" name="username" class="signup--uname" />
                <span class="material-symbols-rounded i-check hide">
                  check
                </span>
                <span class="material-symbols-rounded i-exclaim hide">
                  exclamation
                </span>
              </div>
            </div>
            <div class="email--wrapper input--field">
              <div class="label--wrapper">
                <label for="email">Email</label>
                <span class="alert--text hide">Already Exist</span>
              </div>
              <div class="signupInput--box">
                <input type="email" name="email" class="signup--email" />
                <span class="material-symbols-rounded i-check hide">
                  check
                </span>
                <span class="material-symbols-rounded i-exclaim hide">
                  exclamation
                </span>
              </div>
            </div>
            <div class="password--wrapper input--field">
              <label for="password">Password</label><br />
              <div class="signupInput--box">
                <input type="password" name="password" class="signup--pass" />
                <span class="material-symbols-rounded i-check hide">
                  check
                </span>
                <span class="material-symbols-rounded i-exclaim hide">
                  exclamation
                </span>
              </div>
            </div>
            <div class="submit--wrapper">
              <button type="submit" class="btn btn--signup">Sign up</button>
            </div>
            <div class="already--wrapper">
              <span onclick={activeLogin} class="alreadyacc--text"
                >Already have an Account</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
