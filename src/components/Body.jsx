import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export function BodyData() {
  return (
    <Container>
      <Link to="/signup">Register</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/">Login</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/form">Form Data</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/card">Cards</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/upload">File Upload</Link>&nbsp;&nbsp;&nbsp;
      <br />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        voluptatem debitis officia laudantium dolorum. Obcaecati, optio placeat
        blanditiis sed, nam cupiditate est excepturi cum reprehenderit,
        laudantium debitis reiciendis architecto voluptates?
      </p>
    </Container>
  );
}
