import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBlood from "./Component/RequestBlood/SearchBlood";
import { Header, Info } from "./Component/HomePage";
import DonorForm from "./Component/SignIn_Up/DonorForm";
import ReqForm from "./Component/SignIn_Up/ReqForm";
import About from "./Component/About";
import Footer from "./Component/Footer";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";

import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Info />
              </>
            }
          >
          </Route>
          <Route path="/donor/form" exact element={<DonorForm/>} />
          <Route path="/request/form" exact element={<ReqForm/>} />
          <Route path="/search-for-blood" exact element={<SearchBlood/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home name={userName} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
