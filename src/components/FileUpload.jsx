import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export const Upload = () => {
  const [state, setState] = useState(null);
  // const state = {
  //   file: null,
  // };
  const handleFile = (e) => {
    let file = e.target.files[0];
    var fname = e.target.files[0].name;
    const res =
      fname.includes(".jpg") ||
      fname.includes(".jpeg") ||
      fname.includes(".png") ||
      fname.includes(".svg");
    res ? alert("IMAGE") : alert("not an image");
    setState(file);
  };
  
  const UploadFile = (e) => {
    alert("uploaded");

    let formdata = new FormData();
    formdata.append("image", state);
    formdata.append("name", "Nayudu");

    axios({ url: "/file", method: "POST", data: formdata }).then(
      (res) => {},
      (err) => {}
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Select File&nbsp;&nbsp;&nbsp;
        <Button variant="contained" component="label">
          Choose File
          <input type="file" hidden onChange={(e) => handleFile(e)} />
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" onClick={(e) => UploadFile(e)}>
          Upload
        </Button>
      </div>
    </>
  );
};
