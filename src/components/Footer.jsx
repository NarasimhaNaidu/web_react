import "./Footer.css";
import React from "react";
import { Anchor } from "@mui/icons-material";
import { Link } from "@mui/material";

export const Footer = (props) => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Arawinz Soft Solutions</h4>
            <h1 className="list-unstyled">
              <li>+91 91234 56789 </li>
              <li>Gachibowli,Hyderabad</li>
              <li>Telangana</li>
            </h1>
          </div>
          {/* Column2 */}
          {/* <div className="col">
            <h4>Demo</h4>
            <ui className="list-unstyled">
              <li>SAMPLE 01</li>
              <li>SAMPLE 02</li>
              <li>SAMPLE 03</li>
            </ui>
          </div> */}
          {/* Column3 */}
          <div className="col">
            <ui className="list-unstyled">
              <h4>Our Services</h4>
              <h5>
                <li>Application Development</li>
                <li>E-Commerce</li>
                <li>Data Analytics</li>
                <li>ERP &#38; CRM</li>
                <li>Digital Marketing</li>
              </h5>
            </ui>
          </div>
        </div>
        <hr />
        <center>
          <div className="row">
            <p className="col-sm">
              &copy; {new Date().getFullYear()} &nbsp;
              <Link
                className="onhover-none"
                color="white"
                href="www.arawinz.com"
                underline="none"
              >
                Arawinz Soft Solutions &nbsp;
              </Link>
              | All rights reserved | Terms Of Service | Privacy Policy
            </p>
          </div>
        </center>
      </div>
    </div>

    // <Typography className="footerMain"
    //   backgroundColor="#063970"
    //   variant="body2"
    //   color="grey.A100"
    //   align="center"
    //   {...props}
    // >
    //   {"Copyright © "}
    //   <Link color="inherit" href="https://www.arawinz.com/">
    //     Arawinz Soft Solutions
    //   </Link>{" "}
    //   {"2018 - 2022"}
    //   {"."}
    // </Typography>
    
  );
};
