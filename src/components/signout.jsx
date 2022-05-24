import { Button } from "@mui/material";
import React, { useContext } from "react";
import { SnackbarContext, UserContext } from "./usercontext";

export const Signout = () => {
  const { userprofile, setUserProfile } = useContext(UserContext);
  return (
    <div>
      <h5>this is logout page</h5>
      <h3>user details are{"  "+userprofile && userprofile.user_name } </h3>
      <Button
        onClick={() => {
          setUserProfile(null);
        }}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, bgcolor: "#063970" }}
      >
        Sign OUT
      </Button>
    </div>
  );
};
