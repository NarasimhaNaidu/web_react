import { UserContext } from "./usercontext";

import React, { useContext, useReducer, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
const bull = (
  <Box component="span" sx={{ mx: "2px", transform: "scale(5)" }}>
    •
  </Box>
);

export const CardN = (props) => {
  const { setUserProfile } = useContext(UserContext);

  return props.data.map((item, index) => {
    return (
      <Card
        sx={{
          borderRadius: "15px",
          backgroundColor: "rgb(156, 173, 206,.72)",
          color: "black",
          display: "inline-block",
          // minWidth: 150,
          // minHeight: 150,
          margin: 1,
          // margin: [5, 5, 5, 5],
        }}
      >
        <CardActionArea href="https://www.arawinz.com/">
          <CardContent>
            <Box
              component="img"
              sx={{
                borderRadius: "15px",
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="image_card"
              src={item.image}
            />
            <Typography sx={{ fontSize: 26 }} color="white" gutterBottom>
              {item.email || ""}
            </Typography>
            <Typography variant="h6" component="div">
              {bull} {item.name || ""} <br />
              {bull} {item.mobile || ""} <br />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.error">
              {item.address || ""}
            </Typography>
            <Typography variant="body2">
              {item.desc || "someone@something.com"}
              <br />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
};
