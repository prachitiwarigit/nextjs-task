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


const Login = ({ handleClose }) => {
    const [userData, setUserData] = useState({
        email: "", password: "",username:""
     });



  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const toastOptions = {
    position: "top-center",
    duration: 3000,
    pauseOnHover: false,
    closeOnClick: true
 };


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

  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if email, password, and username are provided
    if (!userData.email || !userData.password || !userData.username) {
      return toast.error("All fields are required", toastOptions);
    }
  
    try {
      const { data } = await axios.post(" https://learnkoods-task.onrender.com/login_api/", userData);
      console.log("Response from login API:", data);
  
      if (data) {
        const { access, refresh } = data.data; // Destructure access and refresh from data.data

        // Save user ID and tokens to sessionStorage
        sessionStorage.setItem('refresh', refresh);
        sessionStorage.setItem('access', access);
        
  
        // Clear input fields after successful login
        toast.success(data.message, toastOptions)
        setUserData({ email: "", password: "", username: "" });
        setTimeout(() => {
            handleClose();
          }, 3000);
        // Redirect to the dashboard or another page if needed
        // router.push('/dashboard');
      } else {
        toast.error(data && data.message ? data.message : "Login failed", toastOptions);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login", toastOptions);
    }
  };
  
  
  
  
  
  
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
            Login to Superio
          </Typography>
          <RxCross2 className="close-icon" onClick={handleClose} />
        </div>
        {/* Display user data fetched from API */}

        <TextField
          name="username"
          type="text"
          placeholder="Username"
          value={userData.username} onChange={(event) => setUserData({ ...userData, username: event.target.value })}
          variant="outlined"
          className="registration-input"
        />
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          value={userData.email}
           onChange={(event) => setUserData({ ...userData, email: event.target.value })}
          variant="outlined"
          className="registration-input"
        />
       
       
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          value={userData.password} 
          onChange={(event) => setUserData({ ...userData, password: event.target.value })}
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
          Don't have an account? Signup
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
          onClick={handleSubmit}
        >
          Login
        </Button>
      </form>
      </div>
    </>
  );
};

export default Login;
