import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="row">
            <div className="col-4">
              <Link to="/" className="navbar-brand mx-3">
                <a>FINDJOB</a>
              </Link>
              <Link className="navbar-brand mx-3">
                <a>|</a>
              </Link>
            </div>

            <div className="col-8">
              <Link to="/" className="navbar-brand mx-3">
                <a>หน้าหลัก</a>
              </Link>
              <Link to="/list" className="navbar-brand mx-3">
                <a>แสดงข้อมูล</a>
              </Link>
            </div>
          </div>
        </nav>

        <img
          src="https://blog.lumahealth.com/hubfs/Finding%20Expat%20Job%20in%20Thailand.png"
          className="img-fluid "
          alt=""
        />
      </div>
    );
  }
}

export default Header;
