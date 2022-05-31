import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import { textAlign } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Griddd() {
  return (
    <Container maxWidth="xs"
    //  justifyContent="flex-start"
     >
      <Box maxWidth="xs" backgroundColor="red">
        <Grid
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
          style={{
              textAlign:"center"
          }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item color="red">xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
