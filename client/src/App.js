import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import PrivateRoute from "./pages/Protected/Protected";
import Profile from "./pages/Profile/Profile";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
