import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import { Box, Button } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export function RadioButton() {
  const [gender, setGender] = useState("male");
  //   const validateForm = (e) => {
  //     e.preventDefault();
  //     setErr(0);
  //     if (user === "") {
  //       setErr(1);
  //       alert("Please Enter Name");
  //     } else user.mobile.length !== 10;
  //     {
  //       setErr(2);
  //       alert("Please Enter a valid 10 Digit Mobile Number");
  //     }
  //   };

  return (
    <div className="container">
      <Box>
        <FormLabel> Gender</FormLabel>
        <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />

          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        <Button
          type="submit"
          fullWidth
          // onClick={validateForm}
          variant="contained"
          sx={{ mt: 3, mb: 2, bgcolor: "#063970" }}
        >
          check gender{" "}
        </Button>
      </Box>
    </div>
  );
}
