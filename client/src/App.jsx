import React from "react";
import { LoginPage, SignupPage } from "./routes/routes";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return <div className="font-Popins">
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
  </div>;
};

export default App;
