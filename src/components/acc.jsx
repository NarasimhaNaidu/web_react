import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme, useMediaQuery } from "@mui/material";
import { Footer } from "./Footer";

export default function SimpleAccordion() {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "#9ECAFA80",
            }}
          >
            <Typography>Our Services</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#51A0F633",
            }}
          >
            <Typography>
              <ul>
                <li>Application Development</li>
                <li>E-Commerce</li>
                <li>Data Analytics</li>
                <li>ERP &#38; CRM</li>
                <li>Digital Marketing</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{
              backgroundColor: "#9ECAFA80",
            }}
          >
            <Typography> Address</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#51A0F633",
            }}
          >
            <Typography>
              Arawinz Soft Solutions,
              <br /> +91 91234 56789,
              <br /> Gachibowli, Hyderabad,
              <br /> Telangana - 500 032.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </React.Fragment>
  );
}
