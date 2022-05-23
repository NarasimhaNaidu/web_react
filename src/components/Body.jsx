import { UserContext } from "./usercontext";
import { useContext } from "react";

import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { CardN } from "./Card";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export function BodyData() {
  const { userprofile, setUserProfile } = useContext(UserContext);

  return (
    <Container>
      <div className="nayudu">
        <Link to="/signup">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to="/">Login</Link>&nbsp;&nbsp;&nbsp; */}
        <Link to="/form">Form Data</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/card">Cards</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/upload">File Upload</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/signin">SIGN IN </Link>&nbsp;&nbsp;&nbsp;
        {userprofile && <Link to="/signout">logout </Link>}
        <br />
        <p>
          By clicking any of the botton cards will take you to <b>Arawinz</b>{" "}
          Website
        </p>
        {userprofile &&     
        <CardN
          data={[
            { name: "Name 1", mobile: 9000000001, address: "Address 1" },
            { name: "Name 2", mobile: 9000000002, address: "Address 2" },
            { name: "Name 3", mobile: 9000000003, address: "Address 3" },
            { name: "Name 4", mobile: 9000000004, address: "Address 4" },
            { name: "Name 5", mobile: 9000000005, address: "Address 5" },
          ]}
        />}
      </div>{" "}
    </Container>
  );
}
