import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBlood from "./Component/RequestBlood/SearchBlood";
import RequestForm from "./Component/RequestBlood/RequestForm";
import { Header, Info } from "./Component/HomePage";
import SignIn from "./Component/SignIn_Up/SignIn";
import DonorForm from "./Component/SignIn_Up/DonorForm";
import ReqForm from "./Component/SignIn_Up/ReqForm";
import UserSignUp from "./Component/SignIn_Up/UserSignUp";
import Loading from "./Component/Loading";
import VerifyAccount from "./Component/VerifyAccount";
import Dashboard from "./Component/Dashboard";
import userSetting from "./Component/Dashboard/Setting";
import AuthenticatedRoute from "./Service/AuthenticatedRoute";
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
          {/* <Route path='/' element={<Header/>}></Route>
			<Route path='/' element={<Info />}>
			</Route>
			<Route path='/loading' element={<Loading/>}/>
			<Route path='/signin' element={<SignIn/>}/>
			<Route path='/donors/signup' element={SignUp}/>
			<Route path='/user/signup' element={UserSignUp}/>
			<Route path='/search-for-blood' element={SearchBlood}/>
			<Route path='/registration/verification/:token' element={VerifyAccount}/>
			<Route path='/about' exact component={About}/>
			
			<Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home name={userName} />} />
		  
			<AuthenticatedRoute path='/send-request' element={RequestForm}/>
			<AuthenticatedRoute path='/dashboard' element={Dashboard} />
			<AuthenticatedRoute path='/dashboard/settings' element={userSetting} /> */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Info />
              </>
            }
          >
            {/* <Header /> */}
            {/* <Info /> */}
          </Route>
          <Route path="/loading" exact element={<Loading/>} />
          <Route path="/signin" exact element={<SignIn/>} />
          <Route path="/donor/form" exact element={<DonorForm/>} />
          <Route path="/request/form" exact element={<ReqForm/>} />
          <Route path="/user/signup" exact element={<UserSignUp/>} />
          <Route path="/search-for-blood" exact element={<SearchBlood/>} />
          <Route
            path="/registration/verification/:token"
            exact
            element={VerifyAccount}
          />
          <Route path="/about" exact element={<About/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home name={userName} />} />
          {/* <AuthenticatedRoute path='/send-request' exact component={RequestForm}/> 
			<AuthenticatedRoute path='/dashboard' exact component={Dashboard} />
			<AuthenticatedRoute path='/dashboard/settings' exact component={userSetting} />  */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
