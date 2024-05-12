"use client";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
import axios from "axios";

export default function JobDropdown() {
  const [value, setValue] = useState(5);
  const [valuepage, setValuePage] = useState(5);
  const [filterSerach, setFilterSearch] = useState("");
  const [dataCard, setDataCard] = useState([]);
  const [dataCard_blank, setDataCard_blank] = useState([]);
  console.log("dataCard---->", dataCard, dataCard_blank);
  const [count, setCount] = useState("");
  const [page, setPage] = useState(1);
  const [showLoader, setShowLoader] = useState(true);
  const [locationValue, setLocationValue] = useState("");

  const [jobTypes, setJobTypes] = useState({
    freelancer: false,
    fullTime: false,
    partTime: false,
    temporary: false,
  });
  console.log("jobTypes", jobTypes);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = (event) => {
    setValuePage(event.target.value);
  };

  const handleChangeSwitch = (type) => (event) => {
    setJobTypes({ ...jobTypes, [type]: event.target.checked });
  };

  const getjobcard = async () => {
    try {
      const res = await axios.get(
        `https://learnkoods-task.onrender.com/job_api/?page=${page}`
      );
      console.log("res", res);
      setShowLoader(false);
      setDataCard(res.data.results);
      setCount(res.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page != 1) {
      getjobcard();
    }
  }, [page]);
  useEffect(() => {
    getjobcard();
  }, []);

  useEffect(() => {
    console.log("filterSerach0------------->", filterSerach);

    if (filterSerach.trim() !== "") {
      const filteredData = dataCard.filter((data) => {
        const searchFilter =
          data.title.toLowerCase().includes(filterSerach.toLowerCase()) ||
          data.company.toLowerCase().includes(filterSerach.toLowerCase());

        return searchFilter;
      });
      console.log("ghhffhfhgfh-->", filteredData);
      setDataCard_blank(filteredData);
    }
  }, [filterSerach]);

  useEffect(() => {
    if (locationValue.trim() !== "") {
      const filteredData = dataCard.filter((data) => {
        const searchFilter = data.location
          .toLowerCase()
          .includes(locationValue.toLowerCase());
        return searchFilter;
      });
      console.log("hgfshgdasvj0000-->", filteredData);
      setDataCard_blank(filteredData);
    }
  }, [locationValue]);

  useEffect(() => {
    const filteredData = dataCard.filter((data) => {
      return (
        (jobTypes.freelancer && data.type === "Freelancer") ||
        (jobTypes.fullTime && data.type === "Full Time") ||
        (jobTypes.partTime && data.type === "Part Time") ||
        (jobTypes.temporary && data.type === "Temporary")
      );
    });

    setDataCard_blank(filteredData);
  }, [jobTypes]);







  const [valueOldest, setValueOldest] = useState(); // Default value
  console.log("old",valueOldest)
  const [valueNewest, setValueNewest] = useState();
  console.log("new",valueNewest)
  

  const handleChangeSorting = (event) => {
    const sortValue = event.target.value;
  
    // Update state with the selected sorting value
    setValueOldest(sortValue);
  
    // Fetch data based on the selected sorting value
    if (sortValue === "Oldest" || sortValue === "Newest") {
      fetchData(sortValue);
    }
  };

  const fetchData = (sortValue) => {
    console.log("sortValue", sortValue)

    fetch(`https://learnkoods-task.onrender.com/job_api/?sort=${sortValue}`)
      .then(response => response.json())
      .then(data => {

        console.log("data", data.results)



        // console.log("sort",sortedData)

        if (sortValue === "Oldest") {
          setValueOldest(data.results?.sort((a, b) => new Date(a.created) - new Date(b.created))); // acending
        }

        else if (sortValue === "Newest") {
          setValueNewest(data.results?.sort((a,b) => new Date(b.created) - new Date(a.created)));  // decending


        }
        // if (sortValue === 10) {

        //   sortedData = data.results.sort((a, b) => new Date(b.created) - new Date(a.created));
        // } else if (sortValue === 15) {

        //   sortedData = data.results.sort((a, b) => new Date(a.created) - new Date(b.created));
        // } else {

        //   sortedData = data.results;
        // }

        // Update state with sorted data
        // setValueSorting(sortedData);
      })
      .catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
   // fetchData();
   
    if (valueOldest === "Oldest") {
      fetchData("Oldest");
    }
    else {
      fetchData("Newest");
      
    }
  }, [valueOldest])




  return (
    <Grid container spacing={2}>
      <Grid item lg={4}>
        <LeftContent
          setFilterSearch={setFilterSearch}
          setLocationValue={setLocationValue}
          handleChangeSwitch={handleChangeSwitch}
          jobTypes={jobTypes}
        />
      </Grid>
      <Grid item lg={8}>
        <div className="rightside custom-container">
          <Typography className="text-content">Show 10 jobs </Typography>
          <div>
            <Select  onChange={handleChangeSorting} className="select">
              <MenuItem value={""}>Sort by (default)</MenuItem>
              <MenuItem value={"Newest"}>Newest</MenuItem>
              <MenuItem value={"Oldest"}>Oldest</MenuItem>
            </Select>


          </div>
        </div>

        <RightContent
          filterSerach={
            filterSerach === "" && locationValue === "" && dataCard_blank == ""
              ? dataCard
              : dataCard_blank

          }
          count={count}
          setPage={setPage}
          showLoader={showLoader}
          page={page}
          sortedDataOldest={valueOldest === "Oldest" ? valueOldest : null} // Pass oldest sorted data as prop when "Oldest" is selected
          sortedDataNewest={valueOldest === "Newest" ? valueNewest : null} // Pass newest sorted data as prop when "Newest" is selected
        />
      </Grid>
    </Grid>
  );
}
