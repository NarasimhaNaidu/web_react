import React, { useContext, useMemo, useState } from "react";
import "./App.css";
import { SignUp, FormData, Copyright } from "./components/sample";
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
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Signout } from "./components/signout";
import { SignIn } from "./components/SignIn";
import { Alert, Slide, Snackbar, Switch } from "@mui/material";

function App() {
  const [userprofile, setUserProfile] = useState(null);

  const [snack, setSnack] = useState({
    message: "",
    color: "",
    open: false,
  });

  const snackValue = useMemo(() => ({ snack, setSnack }), [snack, setSnack]);

  return (
    
    <div className="page-container">
      <div className="content-wrap">
      <br/><br/><br/>
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
              <Header />
              {/* Nav bar end */}
              <Routes>
                <Route path="/signin" element={<SignIn />} />

                <Route path="/" element={<BodyData />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/form" element={<FormData />} />
                <Route path="/upload" element={<UploadPP />} />
                <Route path="/signin" element={<SignIn />} />

                <Route
                  path="/signout"
                  element={userprofile ? <Signout /> : <Navigate to="/" />}
                />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
              {/* footer start  */}
              {/* footer end  */}
            </Router>
          </SnackbarContext.Provider>
        </UserContext.Provider>
      </div>
      <Copyright />
    </div>
  );
}
export default App;
