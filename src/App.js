// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ForgotPassword from './ForgotPassword';
// import OTPVerification from './otp/OTPVerification';
// import ResetPassword from './otp/ResetPassword';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="logo-container">
        <img src="data:image/png;base64,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" alt="Logo" className="logo"/>

      </div>
      <div>
        <h1>GMS App</h1>
         <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/ForgotPassword">ForgotPassword</Link>
            </li>
          </ul>
        </nav> 
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
           <Route path="/ForgotPassword" element={<ForgotPassword />} /> 
        </Routes>
      </div>
      {/* <div>
      <Switch>
          <Route path="/" exact component={<ForgotPassword />} />
          <Route path="/verify-otp" component={<OTPVerification />} />
          <Route path="/reset-password" component={<ResetPassword />} />
        </Switch>
      </div>  */}
    </Router>
  );
};

export default App;
