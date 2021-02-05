import React, { useState } from "react";
import Button from "../../components/common/elements/Button/Button";
import Checkbox from "../../components/common/elements/Checkbox/Checkbox";
import Input from "../../components/common/elements/Input/Input";
import "./register.scss";

const Register = () => {
  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });
  const [errors, setErrors] = useState({});
  const validator = (users) => {
    const errors = {};
    if (users.firstName.length <= 3) {
      errors.firstName = "First Name must be 4 characters";
    }
    return errors;
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value || e.target.checked;

    setUsers((users) => ({ ...users, [key]: value }));
  };

  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    newsletter,
  } = users;

  const handleSubmit = (event) => {
    event.preventDefault();
    const validateUsers = validator(users);
    const noErrors = Object.keys(validateUsers).length === 0;
    setErrors(validateUsers);
    if (noErrors) {
      console.log("submitted", users);
      setUsers({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false,
      });
    } else {
      console.log("Erros", validateUsers);
    }
  };
  return (
    <div className="container register-container">
      <div className="row justify-content-center">
        <div className="col-lg-8 register-area">
          <div className="content-wrapper">
            <h2>Create new customer account</h2>

            <h3>personal information</h3>
            <form onSubmit={handleSubmit}>
              <Input
                classes="input"
                placeholder={"First Name"}
                name="firstName"
                value={firstName}
                onChange={handleChange}
                error={errors.firstName}
              />
              <Input
                classes="input"
                placeholder={"Last Name"}
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
              <Input
                classes="input"
                placeholder={"Email"}
                name="email"
                value={email}
                onChange={handleChange}
              />
              <Checkbox
                labelText="Signup for Newsletter"
                name="newsletter"
                checked={newsletter}
                onChange={handleChange}
              />
              <p>Signin Information</p>
              <Input
                classes="input"
                placeholder={"Password"}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <Input
                classes="input"
                placeholder={"Confirm password"}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />

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
