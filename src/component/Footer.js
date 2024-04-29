import * as React from "react";
import "./header.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Box className="custom-container footer">
      <Grid container spacing={4}>
        <Grid item lg={4}>
          <Typography variant="h4" className="logo-header">
            Learnkoods
          </Typography>
          <Typography style={{ marginTop: "20px" }}>Call us</Typography>
          <Typography style={{ color: "#1967d2" }}>123 456 7890</Typography>
          <Typography variant="body2" style={{ marginTop: "20px" }}>
            329 Queensberry Street, North Melbourne VIC <br></br>
            3051, Australia.<br></br>
            support@learnkoods.com
          </Typography>
        </Grid>
        <Grid item lg={2}>
            <Typography variant="h6">For Candidates</Typography>
            <div style={{marginTop:"30px"}}>
            <Typography variant="body1" style={{marginTop:"10px"}}>Browse Jobs</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Browse Categories</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Candidate Dashboard</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Job Alerts</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>My Bookmarks</Typography>
            </div>
          
        </Grid>
        <Grid item lg={2}>
        <Typography variant="h6">For Employers</Typography>
        <div style={{marginTop:"30px"}}>
            <Typography variant="body1" style={{marginTop:"10px"}}>Browse Candidates</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Employer Dashboard</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Add Job</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Job Packages</Typography>
            
            </div>
        </Grid>
     
        <Grid item lg={2}>
        <Typography variant="h6">About Us</Typography>
        <div style={{marginTop:"30px"}}>
            <Typography variant="body1" style={{marginTop:"10px"}}>About Us</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Job Page Invoice</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Terms Page</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Blog</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Contact</Typography>
            </div>
        </Grid>
        <Grid item lg={2}>
        <Typography variant="h6">Helpful Resources</Typography>
        <div style={{marginTop:"30px"}}>
            <Typography variant="body1" style={{marginTop:"10px"}}>Site Map</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Terms of Use</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Privacy Center</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Security Center</Typography>
            <Typography variant="body1" style={{marginTop:"10px"}}>Accessibility Center</Typography>
            </div>
        </Grid>
      </Grid>
    </Box>

    {/* last  footer section */}

<div className="footer-last">
<hr></hr>
<div className="custom-container footer-last footer-section">
<Typography variant="body1">© 2024 Learnkoods by Epic . All Right Reserved.</Typography>

<div className="social-icon">
<FaFacebookF />
<FaTwitter />
<FaInstagram />
<FaLinkedinIn  />
</div>

</div>
</div>
   
    </>
  
  );
}
