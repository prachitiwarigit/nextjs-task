import React from 'react';
import "./home.css";
import { Typography } from '@mui/material';



export default function Banner() {
  return (
    <div className='banner-body'>
     <Typography variant='h5' className='banner-text'>Find Jobs</Typography>
     <Typography variant='body1' className='job-text'>Home / Jobs</Typography>
    </div>
  )
}
