import React, { useState } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";
import "./home.css";
import { CiLocationOn } from "react-icons/ci";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Select, MenuItem, FormControl, Switch } from "@mui/material";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";

export default function LeftContent({
  setFilterSearch,
  setLocationValue,
  handleChangeSwitch,
  jobTypes,
}) {
  const [value, setValue] = React.useState([0, 100]);
  const [slider, setSlider] = React.useState([0, 56]);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [activeJobType, setActiveJobType] = React.useState("");
  console.log("sadasdsa---->", jobTypes);

  const handleChangeFunc = (event) => {
    setFilterSearch(event.target.value);
  };

  const handleLocationFun = (event) => {
    setLocationValue(event.target.value);
  };

  // const handleChangeActive = () => {
  //   setChecked((prev) => !prev);
  // };

  // const handleChangeFull = () => {
  //   setCheckFull((prev) => !prev);
  // };

  // const handleChangePart = () => {
  //   setCheckPart((prev) => !prev);
  // };

  // const handleChangeTemporary = () => {
  //   setCheckTemporary((prev) => !prev);
  // };

  const handleChangeSelect = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeSlider = (event, newslider) => {
    setSlider(newslider);
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  const handleButtonClick = (jobType) => {
    setActiveJobType(jobType);
  };

  const [dateFilters, setDateFilters] = React.useState({
    all: false,
    lastHour: false,
    last24Hours: false,
    last7Days: false,
    last14Days: false,
    last30Days: false,
  });

  const handleChangeFilter = (filter) => {
    setDateFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const [experience, setExperience] = React.useState({
    fresh: false,
    oneyear: false,
    twoyear: false,
    threeyear: false,
    four: false,
  });

  const handleChangeExperience = (experience) => {
    setExperience((prevFilters) => ({
      ...prevFilters,
      [experience]: !prevFilters[experience],
    }));
  };

  return (
    <>
      <div className="leftcontent custom">
        <Typography variant="body1" className="search">
          Search by Keywords
        </Typography>
        <TextField
          className="search-field"
          id="search"
          placeholder="job title,Keywords, or company"
          onChange={handleChangeFunc}
          autoComplete="off"
          fullWidth
          InputProps={{
            startadornment: (
              <InputAdornment position="start">
                <IconButton>
                  <CiSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Typography variant="body1" className="search-second">
          Location
        </Typography>
        <TextField
          className="search-field"
          id="search"
          placeholder="City or postcode"
          fullWidth
          onChange={handleLocationFun}
          InputProps={{
            startadornment: (
              <InputAdornment position="start">
                <IconButton>
                  <CiLocationOn />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <div className="roadmap">
          <Typography>Radius around selected destination</Typography>

          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
          <div className="road">
            <Button className="road-class">100 km</Button>
          </div>

          <div className="select-box">
            <FormControl fullWidth>
              <Select
                value={selectedValue}
                onChange={handleChangeSelect} 
                fullWidth
                displayEmpty
                inputProps={{
                  id: "select-label",
                  startadornment: (
                    <InputAdornment position="start">
                      <IoBriefcaseOutline />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <IoBriefcaseOutline />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                renderValue={(selected) => {
                  if (!selected) {
                    return (
                      <>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <IoBriefcaseOutline style={{ marginRight: "8px" }} />
                          <Typography
                            variant="body1"
                            style={{ marginTop: "-2px" }}
                          >
                            Choose a category
                          </Typography>
                        </div>
                      </>
                    );
                  }
                  return selected;
                }}
              >
                <MenuItem value="" disabled>
                  Choose a category
                </MenuItem>
                <MenuItem value="Residential">Residential</MenuItem>
                <MenuItem value="Commercial">Commercial</MenuItem>
                <MenuItem value="Industrial">Industrial</MenuItem>
                <MenuItem value="Apartments">Apartments</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/* <div className="job-type">
            <Typography variant="body1">Job type</Typography>
            <div className="switch-box">
              <Switch
                checked={jobTypes?.freelancer}
                onChange={handleChangeSwitch}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Freelancer
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={jobTypes?.freelancer}
                onChange={handleChangeSwitch}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Full Time
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={jobTypes?.freelancer}
                onChange={handleChangeSwitch}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Part Time
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={jobTypes?.freelancer}
                onChange={handleChangeSwitch}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Temporary
              </Typography>
            </div>
          </div> */}

          <div className="job-type">
            <Typography variant="body1">Job type</Typography>
            <div className="switch-box">
              <Switch
                checked={jobTypes.freelancer}
                onChange={handleChangeSwitch("freelancer")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Freelancer
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={jobTypes.fullTime}
                onChange={handleChangeSwitch("fullTime")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Full Time
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={jobTypes.partTime}
                onChange={handleChangeSwitch("partTime")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Part Time
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={jobTypes.temporary}
                onChange={handleChangeSwitch("temporary")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Temporary
              </Typography>
            </div>
          </div>

          <div className="job-type">
            <Typography variant="body1">Date Posted</Typography>
            <div className="switch-box">
              <Switch
                checked={dateFilters.all}
                onChange={() => handleChangeFilter("all")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                All
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={dateFilters.lastHour}
                onChange={() => handleChangeFilter("lastHour")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Last Hour
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={dateFilters.last24Hours}
                onChange={() => handleChangeFilter("last24Hours")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Last 24 Hours
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={dateFilters.last7Days}
                onChange={() => handleChangeFilter("last7Days")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Last 7 Days
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={dateFilters.last14Days}
                onChange={() => handleChangeFilter("last14Days")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Last 14 Days
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={dateFilters.last30Days}
                onChange={() => handleChangeFilter("last30Days")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                Last 30 Days
              </Typography>
            </div>
          </div>

          <div className="job-type">
            <Typography variant="body1">Experience Level</Typography>
            <div className="switch-box">
              <Switch
                checked={experience.fresh}
                onChange={() => handleChangeExperience("fresh")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                fresh
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={experience.oneyear}
                onChange={() => handleChangeExperience("oneyear")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                1 Year
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={experience.twoyear}
                onChange={() => handleChangeExperience("twoyear")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                2 Year
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={experience.threeyear}
                onChange={() => handleChangeExperience("threeyear")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                3 Year
              </Typography>
            </div>

            <div className="switch-box">
              <Switch
                checked={experience.four}
                onChange={() => handleChangeExperience("four")}
                color="primary"
              />
              <Typography variant="body1" style={{ paddingTop: "8px" }}>
                4 Year
              </Typography>
            </div>

            <div className="checkbox-outer">
              <div className="view-more">
                <div className="plus-icon">
                  <div className="icon">
                    <FaPlus />
                  </div>
                  <Typography variant="body1" style={{ color: " #1967d2" }}>
                    {" "}
                    View More
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="salary">
            <Typography>Salary</Typography>

            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={slider}
                onChange={handleChangeSlider}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </div>

          <div className="road">
            <Button className="road-class">$O $14188</Button>
          </div>

          <div>
            <Typography>Tags</Typography>
          </div>

          <div className="tags-name">
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <Button
                  style={{ background: "#fff" }}
                  variant={activeJobType === "Full Time"}
                  onClick={() => handleButtonClick("Full Time")}
                  fullWidth
                >
                  App
                </Button>
              </Grid>
              <Grid item lg={6}>
                <Button
                  style={{ background: "#fff" }}
                  variant={activeJobType === "Part Time"}
                  onClick={() => handleButtonClick("Part Time")}
                  fullWidth
                >
                  Administrative
                </Button>
              </Grid>
              <Grid item lg={3}>
                <Button
                  style={{ background: "#fff", width: "90px" }}
                  variant={activeJobType === "Contract"}
                  onClick={() => handleButtonClick("Contract")}
                  fullWidth
                >
                  Android
                </Button>
              </Grid>
              <Grid item lg={5}>
                <Button
                  style={{ background: "#fff" }}
                  variant={activeJobType === "Freelance"}
                  onClick={() => handleButtonClick("Freelance")}
                  fullWidth
                >
                  Wordpress
                </Button>
              </Grid>
              <Grid item lg={3}>
                <Button
                  style={{ background: "#fff" }}
                  variant={activeJobType === "Design"}
                  onClick={() => handleButtonClick("Design")}
                  fullWidth
                >
                  Design
                </Button>
              </Grid>
              <Grid item lg={4}>
                <Button
                  style={{ background: "#fff" }}
                  variant={activeJobType === "React"}
                  onClick={() => handleButtonClick("React")}
                  fullWidth
                >
                  React
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div className="custom-lastbox lastsection">
        <Grid container spacing={2} className="leftcontent custom-class ">
          <Grid item lg={8} sm={6}>
            {/* Left side content */}
            <div>
              <Typography variant="body1" className="last-heading">
                Recruiting?
              </Typography>
              <Typography variant="body2" className="last-para">
                Advertise your jobs to millions of monthly users and search 15.8
                million CVs in our database.
              </Typography>
            </div>
            <Button className="button-last">Start Recruiting Now</Button>
          </Grid>
          <Grid item lg={4} sm={6}>
            <div>
              <Image
                src="/last.png"
                alt="please"
                width={200}
                height={100}
                className="image"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
