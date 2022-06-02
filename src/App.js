import React, { useContext, useEffect, useMemo, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

import { Naidu } from "./components/localstorage";
import { SignUp } from "./components/sample";
import { SignUppp } from "./components/NewForm";
import { FormData } from "./components/FormData";
import { Footer } from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { Header } from "./components/Header";
import { BodyData } from "./components/Body";
import { SnackbarContext, UserContext } from "./components/usercontext";
import { UploadPP } from "./components/UploadImage";
import { Signout } from "./components/signout";
import { SignIn } from "./components/SignIn";
import { Alert, Slide, Snackbar } from "@mui/material";
import { CardProfile } from "./components/CardProfiles";
import Griddd from "./components/Gridd";
import { RadioButton } from "./components/gender";
import { FetchApi } from "./components/fetch";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SimpleAccordion from "./components/acc";

function App() {
  const [userprofile, setUserProfile] = useState(null);
  
  const [snack, setSnack] = useState({
    message: "",
    color: "",
    open: false,
  });



  useEffect(()=>{
    var localdata=localStorage.getItem("UName");
    if(localdata!==null){
      setUserProfile({ user_name: localStorage.getItem("UName") });
    }
    

  },[])
  const snackValue = useMemo(() => ({ snack, setSnack }), [snack, setSnack]);
  
  
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="page-container">
      <div className="content-wrap">
        <br />
        <br />
        <br />
        <Snackbar
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: snack.direction,
          // }}
          autoHideDuration={3000}
          open={snack.open}
          onClose={() => {
            setSnack((prevdata) => {
              return {
                ...prevdata,
                open: false,
              };
            });
          }}
          TransitionComponent={Slide}
        >
          <Alert
            variant="filled"
            onClose={() => {
              setSnack((prevdata) => {
                return {
                  ...prevdata,
                  open: false,
                };
              });
            }}
            severity={snack.type}
          >
            {snack.message}
          </Alert>
        </Snackbar>

        <UserContext.Provider value={{ userprofile, setUserProfile }}>
          <SnackbarContext.Provider value={{ snack, setSnack }}>
            <Router>
              {/* Nav bar start */}
              {/* {console.log(userprofile)} */}
              <Header />
              {/* Nav bar end */}
              <Routes>
                <Route path="/" element={<BodyData />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/form" element={<FormData />} />
                <Route path="/upload" element={<UploadPP />} />
                <Route path="/grid" element={<Griddd />} />
                <Route path="/localstorage" element={<Naidu />} />
                <Route path="/fetchapi" element={<FetchApi />} />
                <Route path="/gender" element={<RadioButton />} />

                <Route path="/cards" element={<CardProfile />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/cards" element={<CardProfile />} />
                <Route path="/signout" element={<Signout />} />
                <Route path="/signuppp" element={<SignUppp />} />
              </Routes>
            </Router>
          </SnackbarContext.Provider>
        </UserContext.Provider>
      </div>{" "}
      {/* footer start  */}
      {/* {console.log(userprofile)} */}

      <React.Fragment>
              {isMatch ? (<SimpleAccordion/>):(<Footer />)}
      </React.Fragment>

      {/* footer end  */}
    </div>
  );
}
export default App;
