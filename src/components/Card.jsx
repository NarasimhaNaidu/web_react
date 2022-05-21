import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box component="span" sx={{ mx: "2px", transform: "scale(5)" }}>
    •
  </Box>
);
export const CardN = (props) => {
  return props.data.map((item, index) => {
    return (
      <div className="nayudu">
        <Card className="pandu"
          sx={{
            // borderRadius: "20px",
            // backgroundColor: "#222",
            color: "white",
            display: "inline-block",
            minWidth: 275,
            maxWidth: 275,
            margin: [5, 5, 5, 5],
            opacity: 0.7,
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 26 }} color="white" gutterBottom>
              {item.email || ""}
            </Typography>
            <Typography variant="h6" component="div">
              {bull} {item.name || ""} <br />
              {bull} {item.mobile || ""} <br />
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.error">
              {item.address || "hello"}
            </Typography>
            <Typography variant="body2">
              {item.desc || "haii"}
              <br />
              {'"Basic Card"'}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button size="small">Show More...</Button>
          </CardActions>
        </Card>
      </div>
    );
  });
};
