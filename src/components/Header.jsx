import { AccountMenu } from "./menu";

import {
  AppBar,
  Tabs,
  Tab,
  Grid,
  Button,
  Toolbar,
  useMediaQuery,
  useTheme,
  ButtonGroup,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import DrawerComp from "./DrawerComp";
import { UserContext } from "./usercontext";

// styling for the hamburger with colors and paper

// partial clarity on this function

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#074588" : "light",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export const Header = () => {

  const { userprofile, setUserProfile } = useContext(UserContext);

  // "value" for navbar button selection
  const [value, setValue] = useState();

  // inbult theme for navbar
  const theme = useTheme();
  // console.log(theme);

  // checking if the screen is below md and then placing hamburger menu
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);

  return (
    <React.Fragment>
      {/* app bar with blue color */}
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {isMatch ? (
            <>
              {/* // if statememt for md view */}
              {/*three grids for keeping logo in the middle */}
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid md={4}>
                  <Item>
                    {/*hamburger menu */}
                    <DrawerComp />
                  </Item>
                </Grid>
                <Grid md={4}>
                  <Link to="/">
                    <img
                      src={"https://cdn.worldvectorlogo.com/logos/redbull.svg"}
                      alt="logo"
                      height={50}
                    />
                  </Link>
                </Grid>
                <Grid md={4}></Grid>
              </Grid>
            </>
          ) : (
            // else statememt for fullscreen view
            <>
              <Link to="/" sx={{ paddingLeft: "50%" }}>
                <img
                  src={"https://cdn.worldvectorlogo.com/logos/redbull.svg"}
                  alt="logo"
                  marginLeft="auto"
                  height={50}
                />
              </Link>
              <ButtonGroup
                sx={{ marginLeft: "auto" }}
                variant="outlined"
                aria-label="outlined primary button group"
              >
                <Button
                 component={Link} to="/signup"
                  style={{ color: "#ffffff", borderColor: "#ffffff80" }}
                >
                  Sign Up
                </Button>
                <Button
                 component={Link} to="/signin"
                 style={{ color: "#ffffff", borderColor: "#ffffff80" }}
                >
                  Sign In
                </Button>
                <Button
                 component={Link} to="/signout"
                 style={{ color: "#ffffff", borderColor: "#ffffff80" }}
                >
                  Sign Out
                </Button>
              </ButtonGroup>
              {/* <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
              >
                <Link to="/">
                  <Tab label="Sign Up" value="0" />
                </Link>

                {!userprofile && <Tab label="Sign In" value="1" />}
                {userprofile && <Tab label="Sign Out" value="2" />}
                <Tab onClick={"/"} label="Nayudu" value="3" />
              </Tabs> */}
              {/* 
              <Tabs value={value} aria-label="nav tabs example">
                <LinkTab label="Form" href="/form" />
                <LinkTab label="Page Two" href="/trash" />
                <LinkTab label="Page Three" href="/spam" />
              </Tabs> */}
              <AccountMenu />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
