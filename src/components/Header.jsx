import {AccountMenu} from "./menu";

import {
  AppBar,
  Tabs,
  Tab,
  Grid,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import DrawerComp from "./DrawerComp";
import { UserContext} from "./usercontext";


// styling for the hamburger with colors and paper

// partial clarity on this function

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#074588" : "light",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Header = () => {
  const { userprofile, setUserProfile } = useContext(UserContext);


  
  // "value" for navbar button selection
  const [value, setValue] = useState();

  // inbult theme for navbar
  const theme = useTheme();
  console.log(theme);

  // checking if the screen is below md and then placing hamburger menu
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

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
              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Sign Up" value="0" />
                
                {!userprofile && <Tab label="Sign In" value="1" />}
                {userprofile && <Tab label="Sign Out" value="2" />}
              </Tabs>
              <AccountMenu/>

            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
