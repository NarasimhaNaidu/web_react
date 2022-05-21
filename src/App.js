import React from "react";
import "./App.css";
import { SignUp, FormData, Copyright } from "./components/sample";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { CardN } from "./components/Card";
import { BBox, CustomBreakpoints } from "./components/Demo";
import { BodyData } from "./components/Body";

import { UploadPP } from "./components/UploadImage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        {/* Nav bar start */}
        <Header />

        {/* Nav bar end */}
        <Routes>
          <Route path="/" element={<BodyData />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/form" element={<FormData />} />
          <Route path="/demo" element={<BBox />} />
          <Route path="/paramesh" element={<UploadPP />} />
          <Route path="/demo1" element={<CustomBreakpoints />} />
          <Route
            path="/card"
            element={
              <CardN
                data={[
                  {
                    name: "Name 1",
                    mobile: 9000000001,
                    address: "Address 1",
                  },
                  {
                    name: "Name 2",
                    mobile: 9000000002,
                    address: "Address 2",
                  },
                  {
                    name: "Name 3",
                    mobile: 9000000003,
                    address: "Address 3",
                  },
                  {
                    name: "Name 4",
                    mobile: 9000000004,
                    address: "Address 4",
                  },
                  {
                    name: "Name 5",
                    mobile: 9000000005,
                    address: "Address 5",
                  },
                ]}
              />
            }
          />
          <Route
            path="/card"
            element={<CardN name="STAR" mobile="1122334455" />}
          />
        </Routes>
        {/* footer start  */}
        <Copyright sx={{ mt: 31 }} />
        {/* footer end  */}
      </Router>
    </div>
  );
}
export default App;
