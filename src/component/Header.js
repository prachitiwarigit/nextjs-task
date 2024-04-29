"use client"
import { React, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import "./header.css";
import Menuitem from './Menuitem';

export default function Header() {

  const headerRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("stricky-fixed");
      } else {
        headerRef.current.classList.remove("stricky-fixed");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);


  return (
    <>
       <div>

   
<Box ref={headerRef} className="custom-container header-logo mainmenu-area stricky" style={{ zIndex: "1" }}>
  <Grid container spacing={16}>
    <Grid item lg={2}>
      <Typography variant='h4' className='logo-header'>Learnkoods</Typography>
    </Grid>

    <Grid item lg={10}>
      <Menuitem />
    </Grid>
  </Grid>
</Box>
</div>
    
    </>
 
  );
}
