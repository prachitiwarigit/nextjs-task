"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./home.css";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";


const Registration = ({ handleClose }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!fname || !lname || !email || !username || !password) {
      toast.error("All fields are required"); // Show error toast
      return;
    }

    const data = {
      first_name: fname,
      last_name: lname,
      email: email,
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://learnkoods-task.onrender.com/user_api/",
        data
      );
      console.log("response", response.data.payload.message);
      toast.success("User registered successfully"); // Show success toast
      resetForm();
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Email already exists"); // Show error toast
    }
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     first_name: fname,
  //     last_name: lname,
  //     email: email,
  //     username: username,
  //     password: password,
  //   };

  //   try {
  //     const response = await axios.post(

  //       data
  //     );
  //     console.log("Response:", response.data);
  //     if (
  //       response.data &&
  //       response.data.message === "User Created Succefully"
  //     ) {
  //       toast.success("User registered successfully");
  //       setTimeout(() => {
  //           handleClose();
  //         }, 3000);
  //     } else {
  //       toast.error("An error occurred while registering user");
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 409) {
  //              toast.error("Email already exists");
  //     } else {
  //       console.error("Error registering user:", error);
  //       toast.error("An error occurred"); // Show error toast
  //     }
  //   }
  // };

  const resetForm = () => {
    setFname("");
    setLname("");
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <ToastContainer />
      <div className="registration-container">
      
      <form className="registration-form">
        <div className="form-header">
          <Typography variant="h6" align="center" className="form-heading">
            Registration to Superio
          </Typography>
          <RxCross2 className="close-icon" onClick={handleClose} />
        </div>
        {/* Display user data fetched from API */}

        <TextField
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          className="registration-input"
        />
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          className="registration-input"
        />
        <TextField
          name="first_Name"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          variant="outlined"
          className="registration-input"
        />
        <TextField
          name="last_Name"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          variant="outlined"
          className="registration-input"
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          className="registration-input"
        />
        <div className="checkbox">
          <div style={{display:"flex"}}>
            <Checkbox {...label} />
            <Typography style={{paddingTop:'9px'}}>Remember me</Typography>
          </div>
          <div className="forget">Forgot password?</div>
        </div>

        <div style={{ textAlign: "center" }}>
          Do not have an account? Signup
        </div>

        <div style={{ textAlign: "center" }}>
          ----------------------or----------------------
        </div>

        <div className="button-social">
          <div className="facebook">
            <FaFacebookF style={{marginTop:"4px"}}/>
            Log In via Facebook
          </div>
          <div className="gmail">
            <FaGoogle style={{marginTop:"4px"}}/>
            Log In via Gmail
          </div>

        </div>



        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="registration-button"
          onClick={handleChange}
        >
          Register
        </Button>
      </form>
      </div>
    </>
  );
};

export default Registration;
