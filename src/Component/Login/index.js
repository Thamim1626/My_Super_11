import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [isHaveAcc, isHaveAccUpdate] = useState(false);
  return (
    <div className="login-main">
      <div className="login-inner">
        {isHaveAcc ? (
          <h1 className="form-heading">Login</h1>
        ) : (
          <h1 className="form-heading">Register</h1>
        )}
        {isHaveAcc ? (
          <form className="login-form">
            <div className="input-section">
              <label htmlFor="userName" className="form-label">
                USER NAME{" "}
              </label>
              <input
                type="text"
                className="login-input"
                id="userName"
                placeholder="user name"
                required
              />
            </div>

            <div className="input-section">
              <label htmlFor="password" className="form-label">
                PASSWORD{" "}
              </label>
              <input
                type="text"
                className="login-input"
                id="password"
                placeholder="password"
                required
              />
            </div>
          </form>
        ) : (
          <form className="login-form">
            <div className="input-section">
              <label htmlFor="userName" className="form-label">
                NAME{" "}
              </label>
              <input
                type="text"
                className="login-input"
                id="userName"
                placeholder="user name"
                required
              />
            </div>

            <div className="input-section">
              <label htmlFor="number" className="form-label">
                NUMBER{" "}
              </label>
              <input
                type="text"
                className="login-input"
                id="number"
                placeholder="number"
                required
              />
            </div>
            <div className="input-section">
              <label htmlFor="mail" className="form-label">
                Email{" "}
              </label>
              <input
                type="text"
                className="login-input"
                id="mail"
                placeholder="email"
                required
              />
            </div>
            <div className="input-section">
              <label htmlFor="password" className="form-label">
                PASSWORD{" "}
              </label>
              <input
                type="text"
                className="login-input"
                id="password"
                placeholder="password"
                required
              />
            </div>
          </form>
        )}
        {isHaveAcc ? (
          <p
            className="form-status-des"
            onClick={() => {
              isHaveAccUpdate(false);
            }}
          >
            I dont have account , Create Account
          </p>
        ) : (
          <p
            className="form-status-des"
            onClick={() => {
              isHaveAccUpdate(true);
            }}
          >
            I already have account, Login Account
          </p>
        )}
        {isHaveAcc ? (
          <button className="login-submit-button">Submit</button>
        ) : (
          <button className="login-submit-button">Create</button>
        )}
      </div>
    </div>
  );
};

export default Login;
