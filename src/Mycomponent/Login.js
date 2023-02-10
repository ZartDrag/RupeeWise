import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import jQuery from "jquery";

var loginFormContainer;
var signupFormContainer;

function toggleActive(cls1, cls2) {
  if (cls1 != null && cls1.current.classNameList.contains("hide")) {
    cls1.current.classNameList.remove("hide");
    cls2.current.classNameList.add("hide");
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
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  // let history = useNavigate();

  // console.log(loginFormContainer);
  loginFormContainer = useRef(null);
  signupFormContainer = useRef(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("bod");
    var head = { Accept: "*/*", "Content-Type": "application/json;" };
    const response = await fetch("http://localhost:5000/authenticate/login", {
      method: "POST",
      mode: "no-cors",
      headers: head,
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    // jQuery.ajax({
    //   url: "http://localhost:5000/authenticate/login",
    //   data: JSON.stringify({
    //     username: credentials.username,
    //     password: credentials.password,
    //   }),
    //   headers : {
    //     'Access-Control-Allow-Origin' : "*",
    //     "Access-Control-Request-Header" : 'x-Requested-With'
    //   },
    //   crossDomain : true,
    //   // cors : false,
    //   type: "POST",
    //   async: true,
    //   contentType: "application/json",
    //   success: function (resp) {
    //     console.log(resp);
    //   },
    // });

    // () => navigate("/dashboard", { replace: true })
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    var head = { Accept: "*/*", "Content-Type": "application/json;" };    
    console.log(head);
    const response = await fetch("http://localhost:5000/authenticate/register", {
      method: "POST",
      mode: "no-cors",
      headers: head,
      body: JSON.stringify({
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="loginPage">
        <div className="loginPage__leftside">
          <div
            className="loginPage--logo"
            onClick={() => navigate("/", { replace: true })}
          >
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
                <label htmlFor="username">Username</label>
                <br />
                <div className="loginInput--box">
                  <input
                    type="text"
                    name="username"
                    className="login--uname"
                    value={credentials.username}
                    onChange={onChange}
                  />
                  <span className="material-symbols-rounded i-check hide">
                    check
                  </span>
                  <span className="material-symbols-rounded i-exclaim hide">
                    exclamation
                  </span>
                </div>
              </div>
              <div className="password--wrapper input--field">
                <label htmlFor="password">Password</label>
                <br />
                <div className="loginInput--box">
                  <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
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
                  onClick={handleLogin}
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
                  <label htmlFor="username">Username</label>
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
                  <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Password</label>
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
                <button
                  type="submit"
                  className="btn btn--signup"
                  onClick={handleSignup}
                >
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
