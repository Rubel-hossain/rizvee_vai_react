import React from "react";
import logo_2 from "../assets/images/logo_2.svg";
import { Link } from "react-router-dom";
import "../assets/scss/signup.scss";
export default function Signup() {
  return (
    <div className="signup-wrapper section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="page-header">
              <Link to="/">
                <img src={logo_2} alt="logo" className="img-fluid" />
              </Link>
              <h2 className="py-5">To register, please fill all the forms…</h2>
              <form className="signup-form">
                <div className="input-wrapper mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="input-wrapper mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="form-group mb-4 d-flex">
                  <div className="input-wrapper">
                    <select className="form-control" name="gender" id="gender">
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </select>
                  </div>
                  <div className="input-wrapper">
                    <select className="form-control" name="years" id="years">
                      <option value="1956">1956</option>
                      <option value="1957">1957</option>
                      <option value="1958">1958</option>
                    </select>
                  </div>
                  <div className="input-wrapper">
                    <select className="form-control" name="month" id="month">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="input-wrapper">
                    <select className="form-control" name="day" id="day">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
                <div className="input-wrapper mb-4">
                  <input
                    type="email"
                    className="form-control"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="input-wrapper mb-4">
                  <input
                    type="password"
                    className="form-control"
                    required
                    placeholder="Password"
                  />
                </div>
                <div className="button-wqapper">
                  <button type="submit">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
