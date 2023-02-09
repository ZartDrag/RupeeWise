import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

var loginFormContainer;
var signupFormContainer;

function toggleActive(cls1, cls2) {
  if (cls1 != null && cls1.current.classList.contains("hide")) {
    cls1.current.classList.remove("hide");
    cls2.current.classList.add("hide");
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

export default function Login() {
  // console.log(loginFormContainer);
  loginFormContainer = useRef(null);
  signupFormContainer = useRef(null);
  const navigate = useNavigate();
  return (
    <div>
      <div className="loginPage">
        <div className="loginPage__leftside">
          <div className="loginPage--logo" onClick={() =>navigate("/", { replace: true })}>
          <a> ₹upeeWise</a> 
          </div>
          <div className="loginPage--headingbox">
            <h1 className="loginPage--hero">
              Welcome to
              <br />
              RupeeWise
            </h1>
            <p className="loginPage--para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>
        </div>
        <div className="loginPage__rightside">
          {/* <!-- login --> */}

          <div ref={loginFormContainer} className="loginform--container">
            <h2 className="login--text">Log in</h2>
            <div className="input--area">
              <div className="username--wrapper input--field">
                <label for="username">Username</label>
                <br />
                <div className="loginInput--box">
                  <input type="text" name="username" className="login--uname" />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="password--wrapper input--field">
                <label for="password">Password</label>
                <br />
                <div className="loginInput--box">
                  <input
                    type="password"
                    name="password"
                    className="login--pass"
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="submit--wrapper">
                <button
                  type="submit"
                  className="btn btn--login"
                  onClick={() =>
                    navigate("/dashboard", { replace: true })
                  }
                >
                  Log in
                </button>
              </div>
              <div className="forgot--wrapper">
                <span className="forgot--text">Forgot Password?</span>
              </div>
              <div className="create--wrapper">
                <span onClick={activeSignUp} className="create--text">
                  Create an Account
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Sign up --> */}
          <div ref={signupFormContainer} className="signupform--container hide">
            <h2 className="signup--text">Sign Up</h2>
            <div className="input--area">
              <div className="username--wrapper input--field">
                <div className="label--wrapper">
                  <label for="username">Username</label>
                  <span className="alert--text hide">Already Exist</span>
                </div>
                <div className="signupInput--box">
                  <input
                    type="text"
                    name="username"
                    className="signup--uname"
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="email--wrapper input--field">
                <div className="label--wrapper">
                  <label for="email">Email</label>
                  <span className="alert--text hide">Already Exist</span>
                </div>
                <div className="signupInput--box">
                  <input type="email" name="email" className="signup--email" />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="password--wrapper input--field">
                <label for="password">Password</label>
                <br />
                <div className="signupInput--box">
                  <input
                    type="password"
                    name="password"
                    className="signup--pass"
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="submit--wrapper">
                <button type="submit" className="btn btn--signup">
                  Sign up
                </button>
              </div>
              <div className="already--wrapper">
                <span onClick={activeLogin} className="alreadyacc--text">
                  Already have an Account
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
