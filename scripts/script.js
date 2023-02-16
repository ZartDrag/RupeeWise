"use script";

// variables
var loginFormContainer = document.querySelector("#loginform--container");
var signupFormContainer = document.querySelector("#signupform--container");

var sidebarDashboardMenu = document.querySelector(".sidebar-dashboard");

var dashboardMain = document.querySelector(".main");
var dashboardUserForm = document.querySelector(".user-form");

// functions

/*
function to toggle login and Sign up form containers
*/
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

/*
function to toggle 
*/
function activeUserForm() {
  toggleActive(dashboardUserForm, dashboardMain);
}

function activeDashboard() {
  toggleActive(dashboardMain, dashboardUserForm);
}