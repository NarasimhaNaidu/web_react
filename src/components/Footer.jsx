import "./Footer.css";
import React from "react";

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
          <div className="col">
            <h4>Demo</h4>
            <ui className="list-unstyled">
              <li>SAMPLE 01</li>
              <li>SAMPLE 02</li>
              <li>SAMPLE 03</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>Demo 01</li>
              <li>Demo 02</li>
              <li>Demo 03</li>
            </ui>
          </div>
        </div>
        <hr />
        <center>
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Arawinz Soft Solutions | All
              rights reserved | Terms Of Service | Privacy
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
