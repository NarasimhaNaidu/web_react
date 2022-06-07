import { Button, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { SnackbarContext, UserContext } from "./usercontext";
// import {makeStyles } from "@mui/material/styles";

// const useStyles = makeStyles({
//   btn: {
//     backgroundColor: "voilet",
//     "&:hover": {
//       background: "blue",
//     },
//   },
// });

export const Signout = () => {
  // const classes = useStyles();

  const { userprofile, setUserProfile } = useContext(UserContext);
  useEffect(() => {
    console.log(userprofile);
    console.log("chethan");
  }, []);

  return (
    <Container>
      <div>
        <h5>this is logout page</h5>
        {/* {JSON.stringify(userprofile)} */}
        {userprofile ? (
          <h3>
            user details are {"  " + userprofile && userprofile.user_name}{" "}
          </h3>
        ) : (
          <p>no user logged in</p>
        )}

        <Button
          // className={classes.btn}
          onClick={() => {
            setUserProfile(null);
            localStorage.removeItem("UName");
            localStorage.removeItem("UPassword");
          }}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "#063970" }}
        >
          Sign OUT
        </Button>
      </div>
    </Container>
  );
};
