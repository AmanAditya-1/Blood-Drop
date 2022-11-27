import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.text}>SIGN UP</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Create Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            SIGN UP
          </button>
          <p className={styles.text}>
            Already have an account ?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

// import React from 'react';
// // import PageCover from '../../assets/images/pageCover.jpg';
// // import Donation from '../../assets/images/donation.jpg';

// const Intro = () => (
//   <div className="bg-[#dcdcdc] h-screen">
//     <div className="mainPage flex flex-row justify-center items-center gap-[500px] h-screen">
//       <div className="bottomPage">
//         <p className="text-6xl">Welcome XYZ</p>
//         <p className="text w-96 text-left mb-4 text-6xl font-extrabold text-[#ce171b]">
//           GIVE BLOOD SAVE A LIFE
//         </p>
//         <p className="para w-96 font-semibold text-left text-lg">There are no substitutes for blood, platelets or plasma, they cannot be manufactured. Patients in need of blood or blood products must rely on donations from people like you. Those who are hesitant about donating blood for the first time often find that the donation process is easy and that saving lives is deeply gratifying.</p>
//       </div>
//       {/* <div className="image">
//         <img src={Donation} className="imageLogo" alt="Logo" />
//       </div> */}
//     </div>
//   </div>
// );

// export default Intro;