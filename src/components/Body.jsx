import { UserContext, SnackbarContext } from "./usercontext";
import { useContext } from "react";
import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { CardN } from "./Card";
import CustomizedSnackbars from "./snack";
import { LoremIpsumP } from "./Lorem.jsx";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export function BodyData() {
  const { userprofile, setUserProfile } = useContext(UserContext);
  const { snack, setSnack } = useContext(SnackbarContext);

  return (
    <Container>
      <div className="nayudu">
        <Link to="/signup">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to="/">Login</Link>&nbsp;&nbsp;&nbsp; */}
        <Link to="/form">Form Data</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/cards">Cards</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/upload">File Upload</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/signin">SIGN IN </Link>&nbsp;&nbsp;&nbsp;
        {userprofile && <Link to="/signout">logout </Link>}
        <LoremIpsumP />
        <CustomizedSnackbars />
        <br />
       
      </div>{" "}
    </Container>
  );
}
