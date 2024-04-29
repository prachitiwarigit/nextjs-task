"use client";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Registration from "../app/(index)/Registration";
import Login from "../app/(index)/Login";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Typography, Button } from "@mui/material";
import "./header.css";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function MenuItem() {
  const pathname = usePathname();

  const [openRegistrationModal, setOpenRegistrationModal] =
    React.useState(false);
  const [openLoginModal, setOpenLoginModal] = React.useState(false);

  const access = window.sessionStorage.getItem("access");

  const handleOpenRegistrationModal = () => {
    setOpenRegistrationModal(true);
  };

  const handleCloseRegistrationModal = () => {
    setOpenRegistrationModal(false);
  };

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [userData, setUserData] = useState([]);


  // logout part
  const data = async () => {
   
    try {
      const token = sessionStorage.getItem("access");

      // If token exists, include it in the request headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(
        `https://learnkoods-task.onrender.com/user_data/`,
        config
      );
      console.log("Response:+++++++++++", response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("err", error);
    }
  };

  useEffect(() => {
    data();
  }, []);



  const handleLogout = () => {
    sessionStorage.removeItem('access');
    setIsModalOpen(false);
    };











  return (
    <>
      <div className="menuitems-box">
        <div className="menu">
          <p
            className={`items_section about_button ${
              pathname === "/aboutdoctor" ? "active" : ""
            }`}
          >
            Home
          </p>
        </div>

        <div className="menu">
          <p
            className={`items_section about_button ${
              pathname === "/aboutdoctor" ? "active" : ""
            }`}
          >
            Find Jobs
          </p>
        </div>

        <div className="menu">
          <Link href="/presentations">
            <p
              className={`items_section ${
                pathname === "/presentations" ? "active" : ""
              }`}
            >
              Employers
            </p>
          </Link>
        </div>

        <div className="menu">
          <p className="items_section">Candidates</p>
        </div>

        <div className="menu">
          <p className="items_section">Blog</p>
        </div>

        <div className="menu">
          <p className="items_section">About Us</p>
        </div>

        <div className="last-button">
          <div className="menu-upload">
            <Typography>Upload your CV</Typography>
          </div>

          {/* Open registration and login modal on click */}

          {access ? (
         <div className="avatar">
         <Avatar onClick={toggleModal} />
         {isModalOpen && (
          <div className="modal" id="profileModal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            {userData && (
              <div className="profile-details">
                <p>ID: {userData.id}</p>
                <p>Username: {userData.username}</p>
                <p>Email: {userData.email}</p>
                <p>First Name: {userData.first_name}</p>
                <p>Last Name: {userData.last_name}</p>
              </div>
            )}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
         )}
       </div>
          ) : (
            <div className="login">
              <div className="register" onClick={handleOpenLoginModal}>
                Login
              </div>
              <div>/</div>
              <div className="register" onClick={handleOpenRegistrationModal}>
                Register
              </div>
            </div>
          )}
        </div>

        <Button className="jobpost">Job Post</Button>
      </div>

      {/* Render registration modal */}
      <Modal open={openRegistrationModal}>
        <Box sx={style}>
          <Registration handleClose={handleCloseRegistrationModal} />
        </Box>
      </Modal>

      {/* Render Login modal */}
      <Modal open={openLoginModal}>
        <Box sx={style}>
          <Login handleClose={handleCloseLoginModal} />
        </Box>
      </Modal>
    </>
  );
}
