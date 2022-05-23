import React, { useState } from "react";
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
import { UserContext } from "./components/usercontext";
import { UploadPP } from "./components/UploadImage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Signout} from "./components/signout";
import { SignIn } from "./components/SignIn";

function App() {
  const [userprofile, setUserProfile] = useState(null);
  return (
    <UserContext.Provider value={{ userprofile, setUserProfile }}>
      <div>
        <Router>
          {/* Nav bar start */}
          <Header />
          {userprofile && <Link to="/signout">logout </Link>}
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
          <Copyright sx={{ mt: 31 }} />
          {/* footer end  */}
        </Router>
      </div>
    </UserContext.Provider>
  );
}
export default App;
