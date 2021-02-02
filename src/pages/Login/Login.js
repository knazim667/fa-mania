import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/elements/Button/Button";
import Input from "../../components/common/elements/Input/Input";
import "./login.scss";

const Login = () => {
  return (
    <div className="container login-container">
      <div className="row justify-content-center">
        <div className="col-lg-8 login-area">
          <div className="content-wrapper">
            <h2>Customer Login</h2>

            <h3>Registered users</h3>
            <p>if you have an account, sign in with your email address</p>
            <form>
              <Input classes="input" placeholder={"Email"} />
              <Input classes="input" placeholder={"Password"} />

              <Link to="/forgot-password" className="d-block mb-4">
                Forgot password
              </Link>
              <Button type="submit" classes="fa-primary" title="Login" />
            </form>

            <hr className="hair-line" />

            <h2>New Customer</h2>

            <p>
              Creating an account has many benefits: check out faster, keep more
              than one address, track orders and more
            </p>
            <Link to="/register">
              <Button classes="fa-black" title="create an account" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
