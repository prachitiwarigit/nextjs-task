"use client";

import React, { useState, useEffect } from "react";
import { Card, Box, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "@mui/material/Slider";
import { GoBriefcase } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { MdCameraRoll } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function RightContent({
  filterSerach,
  setPage,
  showLoader,
  count,
  page,
  sortedDataOldest,
  sortedDataNewest,
}) {
  return (
    <>
      {showLoader ? (
        <div
          style={{ width: "100%", padding: "20px 0px", textAlign: "center" }}
        >
          <Typography variant="h6" className="content-sidetext">
            Loading....
          </Typography>
        </div>
      ) : (
        <div className="custom-container">
          {(filterSerach || sortedDataOldest).map((data, index) => {
            console.log("dfsfdfsd", data?.description?.length);
            return (
              <Card sx={{ width: "100%" }} className="card-boxes" key={index}>
                <div className="card-content">
                  <div>
                    <Image
                      src={`https://learnkoods-task.onrender.com${data.image}`}
                      alt={data.title}
                      width={50}
                      height={60}
                    />
                  </div>

                  <div className="card-lastsection">
                    <div>
                      <Typography variant="body1" className="content-title">
                        {data.title}
                      </Typography>

                      <div className="content-form">
                        <a href={data.url} target="blank">
                          <div className="content-side">
                            <div>
                              <GoBriefcase />
                            </div>
                            <Typography
                              variant="body2"
                              className="content-sidetext"
                            >
                              {data.company}
                            </Typography>
                          </div>
                        </a>
                        <div className="content-side">
                          <div>
                            <CiLocationOn />
                          </div>
                          <Typography
                            variant="body2"
                            className="content-sidetext"
                          >
                            {data.location}
                          </Typography>
                        </div>
                        <div className="content-side">
                          <div>
                            <MdAccessTime />
                          </div>
                          <Typography
                            variant="body2"
                            className="content-sidetext"
                          >
                            {data.timeline}
                          </Typography>
                        </div>
                        <div className="content-side">
                          <div>
                            <MdCameraRoll />
                          </div>
                          <Typography
                            variant="body2"
                            className="content-sidetext"
                          >
                            {data["min salary"]} - {data["max salary"]}
                          </Typography>
                        </div>
                      </div>
                      <Typography
                        variant="body2"
                        className="content-description"
                      >
                        {data?.description?.length > 150
                          ? data.description.slice(0, 150) + "..."
                          : data.description}
                      </Typography>

                      <p>{data.slug}</p>
                      <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Company
                      </a>
                      {/* <p>{data.slug}</p> */}
                      <p style={{ marginTop: "7px" }}>{data.type}</p>
                    </div>

                    <div
                      style={{
                        width: "50px",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <FaRegBookmark />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}

          {count > 1 && (
            <Box
              className="pagenination"
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  count={count}
                  page={page}
                  variant="outlined"
                  onChange={(e, v) => {
                    setPage(v);
                  }}
                />
              </Stack>
            </Box>
          )}
        </div>
      )}
    </>
  );
}
