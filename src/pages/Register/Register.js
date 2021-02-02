import React from "react";
import Button from "../../components/common/elements/Button/Button";
import Checkbox from "../../components/common/elements/Checkbox/Checkbox";
import Input from "../../components/common/elements/Input/Input";
import "./register.scss";

const Register = () => {
  return (
    <div className="container register-container">
      <div className="row justify-content-center">
        <div className="col-lg-8 register-area">
          <div className="content-wrapper">
            <h2>Create new customer account</h2>

            <h3>personal information</h3>
            <form>
              <Input classes="input" placeholder={"First Name"} />
              <Input classes="input" placeholder={"Last Name"} />
              <Input classes="input" placeholder={"Email"} />
              <Checkbox labelText="Signup for Newsletter" />
              <p>Signin Information</p>
              <Input classes="input" placeholder={"Password"} />
              <Input classes="input" placeholder={"Confirm password"} />

              <Button
                type="submit"
                classes="fa-primary mt-3"
                title="create an account"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
