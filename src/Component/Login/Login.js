import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

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
        <h1 className={styles.text}>LOGIN</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            LOGIN
          </button>
          <p className={styles.text}>
            Already have an account ?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";

// import InputControl from "../InputControl/InputControl";
// import { auth } from "../../firebase";

// // import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
// import TextField from "@mui/material/TextField";
// // import { useState } from "react";
// import MuiAlert from "@mui/material/Alert";
// import { Snackbar } from "@mui/material";
// import AuthenticationService from "../../Service/AuthenticationService";
// import CircularProgress from "@mui/material/CircularProgress";
// import PasswordTwoToneIcon from "@mui/icons-material/PasswordTwoTone";
// import AbcTwoToneIcon from "@mui/icons-material/AbcTwoTone";
// import InputAdornment from "@mui/material/InputAdornment";
// import validator from "validator";

// import styles from "./Login.module.css";

// export default function Login() {
//   const navigate = useNavigate();
//   const [values, setValues] = useState({
//     email: "",
//     pass: "",
//   });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

//   const handleSubmission = () => {
//     if (!values.email || !values.pass) {
//       setErrorMsg("Fill all fields");
//       return;
//     }
//     setErrorMsg("");

//     setSubmitButtonDisabled(true);
//     signInWithEmailAndPassword(auth, values.email, values.pass)
//       .then(async (res) => {
//         setSubmitButtonDisabled(false);

//         navigate("/home");
//       })
//       .catch((err) => {
//         setSubmitButtonDisabled(false);
//         setErrorMsg(err.message);
//       });
//   };
//   return (
//     <>
//       <div id="bg-container">
//         <div className="login-container">
//           <Card sx={{ width: "fit-content", padding: "15px" }}>
//             <CardContent>
//               <Avatar sx={{ width: 80, height: 80, bgcolor: "#c6414c" }}>
//                 <LockTwoToneIcon sx={{ width: 50, height: 50 }} />
//               </Avatar>
//               <Typography
//                 component="h1"
//                 variant="h5"
//                 sx={{ fontWeight: "bolder" }}
//               >
//                 SIGN IN
//               </Typography>
//               <Box
//                 component="form"
//                 // onSubmit={handleSubmit}
//                 Validate
//                 sx={{ mt: 2 }}
//               >
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="username"
//                   label="Email Address"
//                   name="username"
//                   color="error"
//                   // onChange={handleChange}
//                   autoComplete="username"
//                   autoFocus
//                   onChange={(event) =>
//                     setValues((prev) => ({
//                       ...prev,
//                       email: event.target.value,
//                     }))
//                   }
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   color="error"
//                   onChange={(event) =>
//                     setValues((prev) => ({ ...prev, pass: event.target.value }))
//                   }
//                   // onChange={handleChange}
//                   label="Password"
//                   // type={showPassword ? "text" : "password"}
//                   id="password"
//                   autoComplete="current-password"
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <div
//                           style={{ cursor: "pointer" }}
//                           // onClick={handleClickShowPassword}
//                         >
//                           {/* {showPassword ? ( */}
//                           <PasswordTwoToneIcon />
//                           ) : (
//                           <AbcTwoToneIcon sx={{ fontSize: "30px" }} />)
//                         </div>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <div></div>
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   onClick={handleSubmission}>
//                   sx={{
//                     mt: 3,
//                     mb: 2,
//                     fontSize: "15px",
//                     fontWeight: "bold",
//                     backgroundColor: "#c6414c",
//                     ":hover": { bgcolor: "#c6414c" },
//                   }}
//                 >
//                   Sign In
//                   {/* {Spinner && (
//                     <CircularProgress
//                       sx={{ ml: 2, color: "white" }}
//                       size={20}
//                     />
//                   )}  */}
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="#" variant="body2" color="#c6414c">
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link to="/signup" variant="body2" color="#c6414c">
//                       Don't have an account? Sign Up
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// }
