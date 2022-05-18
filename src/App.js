import React from "react";
import "./App.css";
import { SignUp, FormData, Copyright } from "./components/sample";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { NewForm } from "./components/NewForm";
import {TestUpload} from "./components/test";
import { CardN } from "./components/Card";
import { BodyData } from "./components/Body";
import { Upload } from "./components/FileUpload";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
          <Route path="/newform" element={<NewForm />} />
          <Route path="/upload" element={<Upload />} />
          {/* <Route path="/up" element={<Up />} /> */}
          <Route path="/tupload" element={<TestUpload />} />


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
                  {
                    name: "Name 6",
                    mobile: 9000000006,
                    address: "Address 6",
                  },
                  {
                    name: "Name 7",
                    mobile: 9000000007,
                    address: "Address 7",
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
        {/* Basic Grid for home page- start*/}
        {/* Basic Grid for home page- end*/}
        {/* footer start  */}

        <Copyright sx={{ mt: 31 }} />
        {/* footer end  */}
      </Router>
    </div>
  );
}
export default App;
