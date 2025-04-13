import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BloodDonationPage from "./BloodDonationPage";
import BloodRequestForm from "./BloodRequestForm";
import Profile from "./Profile";
import BloodRequestsPage from "./BloodRequestsPage";
import HospitalConnect from "./HospitalConnect";
import MessagesPage from "./MessagesPage";
import HospitalLogin from "./HospitalLogin";
import HospitalSignup from "./HospitalSignup";
import CustomerLogin from "./CustomerLogin";
import CustomerSignup from "./CustomerSignup";
import HomePage from "./HomePage";
import HospitalDashboard from "./HospitalDashboars";
import HospitalProfile from "./HospitalProfile";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hospital/signup" element={<HospitalSignup />} />
        <Route path="/hospital/login" element={<HospitalLogin />} />
        <Route path="/customer/signup" element={<CustomerSignup />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
        <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
        <Route path="/customer/dashboard" element={<BloodDonationPage />} />
        <Route path="/request-blood" element={<BloodRequestForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blood-requests" element={<BloodRequestsPage />} />
        <Route path="/HospitalConnect" element={<HospitalConnect />}/>
        <Route path = "/messages" element = {<MessagesPage/>}/>
        <Route path="/hospital/profile" element = {<HospitalProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;