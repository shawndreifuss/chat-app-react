import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import signInImage from "../assets/signup.jpg";

// Setting up cookies
const cookies = new Cookies();

const initialState = {
  fullName: "",
  username: "",
  phoneNumber: "",
  avatarURL: "",
  password: "",
  confirmPassword: "",

}

const Auth = () => {
  // Setting Sign in and Sign up states
  const [isSignUp, setIsSignUp] = useState(true);
  // Getting Values from Form
  const [form, setForm] = useState(initialState);

  // Handle Change for inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
   
  };

  //Switch between Sign In and Sign Up
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };
   // Handle form submit and sending it to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, username, password, phoneNumber, avatarURL } = form;

    const URL = "http://localhost:3001/auth";

    const { data: { token, userId, hashedPassword } } = await axios.post(`${URL}/${isSignUp ? "register" : "login"}`, {
      username, password, fullName, phoneNumber, avatarURL
    });

    cookies.set("token", token);
    cookies.set("username", username);
    cookies.set("fullName", fullName);
    cookies.set("userId", userId);

    if(isSignUp) {
      cookies.set("phoneNumber", phoneNumber);
      cookies.set("avatarURL", avatarURL);
      cookies.set("hashedPassword", hashedPassword);
    }
      // Reloads Browser 
    window.location.reload();
  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignUp ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="userName">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  name="avatarURL"
                  type="text"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            {isSignUp && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="auth__form-container_fields-content_button">
              <button>{isSignUp ? "Sign Up" : "Sign In" }</button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
              <p>
                {isSignUp 
              ? "Already have an account?"
              : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
              </p>
            </div>
        </div>
        <div className="auth__form-container_image">
          <img src={signInImage} alt="sign in" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
