import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import RequestForm from './components/RequestForm/RequestForm'
import Contact from './components/Contact';
import Aboutus from './components/Aboutus';
import AdminDashboard from './components/Admindashboard';
import Login from './components/Login';
import Homepage from './components/Homepage';
import VolunteerActiveRequests from './components/VolunteerDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import UserRegistration from './components/userRegistration';
import UserTypeSelection from './components/UserTypeSelection';
// import VolunteerDashboard from './components/VolunteerDashboard';
import Log from './components/Logs/log';
import Donation from "./components/Donation/Donation";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/contactus" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<UserRegistration/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/user-type-selection" element={<UserTypeSelection />} />
          <Route path="/volunteer" element={<VolunteerActiveRequests/>} />
          <Route path="/donate" element={<Donation />} />
          <Route path="/request" element={<RequestForm />} />
          <Route path="/log" element={<Log />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
