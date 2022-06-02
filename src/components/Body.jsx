import SimpleAccordion from "./acc";
import { UserContext, SnackbarContext, reducer, initialState, DINEIN } from "./usercontext";
import { useContext } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { CardN } from "./Card";
import CustomizedSnackbars from "./snack";
import { LoremIpsumP } from "./Lorem.jsx";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#red" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function BodyData() {
  const { userprofile, setUserProfile } = useContext(UserContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { snack, setSnack } = useContext(SnackbarContext);
  console.log(state);
  const setRed = (e) => {
    console.log(dispatch({ type : DINEIN,payload: e.target.value }))
    
  };
  return (
    <Container>
      <div className="nayudu">
        <Link to="/signup">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link to="/">Login</Link>&nbsp;&nbsp;&nbsp; */}
        <Link to="/form">Form Data</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/fetchapi">F API</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/cards">Cards</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/upload">File Upload</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/gender">Gender</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/signin">SIGN IN </Link>&nbsp;&nbsp;&nbsp;
        <br />
        <CustomizedSnackbars />
        <Link to="/localstorage">Local Storage</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/signuppp">New LOGGINNN</Link>&nbsp;&nbsp;&nbsp;
        <br /> <br /> <br />
        <Link to="/signout">logout page </Link>
        {console.log(userprofile)}
        <input onChange={(e) => setRed(e)}  />
        {/* <LoremIpsumP /> */}
        <br />
      </div>{" "}
    </Container>
  );
}
