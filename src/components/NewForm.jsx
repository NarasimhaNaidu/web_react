import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReusableTextField } from "./ReusableFormComp";
import "./Footer.css";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

export const SignUppp = () => {
  let history = useNavigate();
  const [user, setUsers] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: "",
    gender: "",
  });
  const [acceptTnC, setAcceptTnC] = useState(false);

  const [err, setErr] = useState(0);

  const handleChange = (e) => {
    setAcceptTnC(e.target.checked);
  };
  const theme = createTheme();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [cpassword, setcPassword] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [err, setErr] = useState(0);

  // const { userprofile, setUserProfile } = useContext(UserContext);

  useEffect(() => {
    console.log("UseEffect");
    // getdata();
  }, []);

  // const getdata = async () => {
  //   await axios.post("/register").then(function(response) {
  //     if (response.data.status === true) {
  //       setName(response.data.usedata.name);
  //       setMobile(response.data.usedata.mobile);
  //       setEmail(response.data.usedata.gmail);
  //     }
  //     console.log(response.data);
  //   });
  // };
  const onChangeValue = (e) => {
    console.log(e.target);
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = (e) => {
    e.preventDefault();
    setErr(0);
    if (user.name === "") {
      setErr(1);
      alert("Please Enter Name");
    } else if (!user.email.includes("@")) {
      setErr(2);
      alert("Please Enter a valid email address");
    } else if (user.mobile.length !== 10) {
      setErr(3);
      alert("Please Enter a valid 10 Digit Mobile Number");
    } else if (user.gender === "") {
      setErr(4);
      alert("Select Corect Gender");
    } else if (acceptTnC === false) {
      setErr(5);
      alert("Please Accept Terms & Conditions");
    } else {
      alert("USER ADDED");
      history = useNavigate();
      // const formdata = new FormData();
      // formdata.append("name", name);
      // formdata.append("mobile", mobile);
      // formdata.append("email", email);
      // formdata.append("password", password);

      // axios.post("/register", formdata).then(function(response) {
      //   if (response.data.status === true) {
      //     alert("axios call");
      //   } else {
      //     alert(response.data.msg);
      //   }
      //   console.log(response.data);
      // });
      // history("/form");
    }
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
        >
          <Box
            className="pandu"
            sx={{
              borderRadius: "20px",
              // backgroundColor: "rgb(174, 212, 255)",
              backgroundColor: "#ffdcf4",
              p: [3, 3, 3, 3],
              marginTop: 5,
              opacity: 0.95,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#063970" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              New Sign up
            </Typography>
            <Box
              onSubmit={validateForm}
              component="form"
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ReusableTextField
                    name="name"
                    type="text"
                    value={user.name}
                    label="Name *"
                    change={onChangeValue}
                    error={err === 1 && true}
                    size="small"
                    width={true}
                  />

                  {/* <TextField
                    size="small"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={name}
                    error={err === 1 && true}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  /> */}
                </Grid>{" "}
                <Grid item xs={12}>
                  <ReusableTextField
                    name="email"
                    value={user.email}
                    label="Email Address"
                    change={onChangeValue}
                    error={err === 2 && true}
                    size="small"
                    width={true}
                  />
                  {/* <TextField
                    size="small"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    error={err === 2 && true}
                    change={onChangeValue}
                  /> */}
                </Grid>
                <Grid item xs={12}>
                  <ReusableTextField
                    name="mobile"
                    value={user.mobile}
                    label="Mobile"
                    change={onChangeValue}
                    error={err === 3 && true}
                    size="small"
                    width={true}
                  />
                  {/* <TextField
                    size="small"
                    name="mobile"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    value={mobile}
                    error={err === 3 && true}
                    change={onChangeValue}
                  /> */}
                </Grid>
              </Grid>
              <br />
              <Grid ml={1} item xs={12}>
                <FormLabel size="small" error={err === 4 && true}>
                  {" "}
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  size="small"
                  value={user.gender}
                  name="gender"
                  onChange={onChangeValue}
                >
                  <Grid item>
                    <FormControlLabel
                      value="male"
                      control={<Radio size="small" />}
                      label="Male"
                    />
                  </Grid>{" "}
                  <Grid item>
                    <FormControlLabel
                      value="female"
                      control={<Radio size="small" />}
                      label="Female"
                    />{" "}
                  </Grid>
                </RadioGroup>
              </Grid>

              <Grid ml={1}>
                <FormControl error={true}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={acceptTnC}
                        onChange={handleChange}
                        size="small"
                      />
                    }
                  />
                  <FormLabel size="small" error={err === 5 && true}>
                    Accept terms and conditions
                  </FormLabel>
                </FormControl>
              </Grid>

              <Button
                // onClick={validateForm}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, bgcolor: "#063970" }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid mt={2} item>
                  <Link href="/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br /> <br /> <br />
    </div>
  );
};
