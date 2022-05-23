/*prasanthi*/
import React from "react";
import { TextField } from "@mui/material";

export const ReusableTextField = (props) => {
  return (
    <TextField
      name={props.name}
      type={props.type}
      value={props.value}
      label={props.label}
      onChange={props.change}
      color={props.color}
      autoFocus={props.af}
      error={props.error}
      size={props.size}
      fullWidth={props.width}
    ></TextField>
  );
};
