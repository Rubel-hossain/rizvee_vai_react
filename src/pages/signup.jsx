import React from "react";
import logo_2 from "../assets/images/logo_2.svg";
import logo_3 from "../assets/images/logo_3.svg";
import { Link } from "react-router-dom";
import Select from "react-select";

import "../assets/scss/signup.scss";
export default function Signup() {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const yearsOptions = [
    { value: "1956", label: "1956" },
    { value: "1957", label: "1957" },
    { value: "1958", label: "1958" },
    { value: "1959", label: "1959" },
    { value: "1960", label: "1960" },
    { value: "1961", label: "1961" },
    { value: "1962", label: "1962" },
    { value: "1963", label: "1963" },
  ];
  const monthOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
  ];
  const daysOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
  ];
  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: "none",
      border: "0",

      // You can also use state.isFocused to conditionally style based on the focus state
    }),
  };

  const customSelectTheme = (theme) => ({
    ...theme,
    borderRadius: "0",
    colors: {
      ...theme.colors,
      primary25: "rgba(138,227,140,0.29)",
      primary: "rgba(138,227,140,1)",
    },
  });

  return (
    <div className="signup-wrapper section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="page-content px-5">
              <div className="form-header text-center">
                <Link to="/">
                  <img src={logo_2} alt="logo" className="site-logo" />
                </Link>
                <h2 className="py-5">
                  To register, please fill all the forms…
                </h2>
              </div>
              <form className="signup-form">
                <div className="input-wrapper mb-30">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    required
                  />
                </div>
                <div className="input-wrapper mb-30">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    required
                  />
                </div>
                <div className="form-group mb-30 d-flex">
                  <div className="select-wrapper w-100">
                    <Select
                      options={genderOptions}
                      placeholder="Gender"
                      theme={customSelectTheme}
                      styles={customStyles}
                    />
                  </div>
                  <div className="select-wrapper w-100">
                    <Select
                      options={yearsOptions}
                      placeholder="YYYY"
                      theme={customSelectTheme}
                      styles={customStyles}
                    />
                  </div>
                  <div className="select-wrapper w-100">
                    <Select
                      options={monthOptions}
                      placeholder="MM"
                      theme={customSelectTheme}
                      styles={customStyles}
                    />
                  </div>
                  <div className="select-wrapper w-100">
                    <Select
                      options={daysOptions}
                      placeholder="DD"
                      theme={customSelectTheme}
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="input-wrapper mb-30">
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="user_email"
                    required
                  />
                </div>
                <div className="input-wrapper mb-30">
                  <label htmlFor="user_password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="user_password"
                    required
                  />
                </div>
                <div className="button-wqapper">
                  <button type="submit">Sign up</button>
                </div>
              </form>
              <div className="help-text pt-4 text-center">
                <p>
                  Already have an account? <a href="#">Sign In!</a>
                </p>
              </div>
            </div>
            <div className="page-footer pt-60">
              <a href="#">
                <img src={logo_3} alt="logo" className="img-fluid" />
              </a>
              <p>&copy; 2021 Fusionread Inc. | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
