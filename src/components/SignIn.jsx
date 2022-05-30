import PersonIcon from "@mui/icons-material/Person";
import React, { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { UserContext, SnackbarContext } from "./usercontext";
import { Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ReusableTextField } from "./ReusableFormComp";

// const axios = require("axios");

export const SignIn = () => {
  const { setUserProfile } = useContext(UserContext);
  const { setSnack } = useContext(SnackbarContext);
  let history = useNavigate();

  const theme = createTheme();

  const [user, setUsers] = useState({ name: "", password: "" });
  const [err, setErr] = useState(0);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    // console.log("getData Called");

    // const formdata = new FormData();
    // formdata.append("id", id);
    // axios.post("/singleuser", formdata).then(function(response) {
    //   if (response.data.status === true) {
    //     console.log(response.data);

    //     setUsers({
    //       name: response.data.data.name,
    //       mobile: response.data.data.mobileno,
    //       email: response.data.data.email,
    //     });
    //     setLoading(false);
    //   }
    //   console.log(response.data);
    // });
  };

  const validateForm = (e) => {
    e.preventDefault();
    setErr(0);
    if (user.name === "") {
      setErr(1);
      setSnack({
        message: "Enter Your Name",
        type: "error",
        open: true,
        direction: "center",
      });
    } else if (user.password.length < 6) {
      setErr(2);
      setSnack({
        message: "Enter Your Password",
        type: "error",
        open: true,
        direction: "center",
      });
    } else {
      localStorage.setItem("name", user.name);
      localStorage.setItem("password", user.password);

      console.log(localStorage.getItem("name"))
      console.log(localStorage.getItem("password"))

      history("/cards");

      setUserProfile({ user_name: user.name });

      setSnack({ message: "user logged in successfully", open: true });

      //   const formdata = new FormData();
      //   formdata.append("name", user.name);
      //   formdata.append("mobileno", user.mobile);
      //   formdata.append("email", user.email);
      //   formdata.append("id", id);

      //   axios.post("/", formdata).then(function(response) {
      //     if (response.data.status === true) {
      //       //  history("/data")
      //       console.log(response.data);
      //     } else {
      //       alert(response.data.msg);
      //     }
      //     console.log(response.data);
      //   });
    }
  };

  const onChangeValue = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <br /> <br /> <br /> <br />
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Box
            className="loginBg"
            sx={{
              borderRadius: "20px",
              p: [3, 3, 3, 3],
              marginTop: 8,
              opacity: 0.95,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ bgcolor: "#00ab66" }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box onSubmit={validateForm} component="form" sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ReusableTextField
                    name="name"
                    label="Name *"
                    af="true"
                    change={onChangeValue}
                    color="success"
                    value={user.name}
                    error={err === 1 && true}
                    size="small"
                    width={true}
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <ReusableTextField
                    name="password"
                    label="Password *"
                    type="password"
                    change={onChangeValue}
                    color="success"
                    error={err === 2 && true}
                    value={user.password}
                    size="small"
                    width={true}
                  />
                </Grid>
              </Grid>
              <Button
                onClick={validateForm}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#28a745", caretColor: "#00ca4e" }}
              >
                <b>Sign In</b>
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  {/* <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
