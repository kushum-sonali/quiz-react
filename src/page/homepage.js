import React from "react";
import "./homepage.css";
import HomeCover from "../animation/HomeCover.js";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../Data/Categories";
function Home() {
    return (
        <div className="container-fluid content">
            <div className="col-12 row h-100 main">
                <div className="settings col-md-6 col-12 ">
                    <span className="  Quiz-title">Quiz Setting</span>
                    <div className="setting__select">
                        <TextField
                            style={{ marginBottom: 10}}
                            label="Enter Your Name"
                            variant="outlined"
                        />
                        <TextField select label="Select Category"
                            varient="outlined" style={{ marginBottom: 10 }}
                        >
                            {
                                Categories.map((cat) => (
                                    <MenuItem key={cat.category} value={cat.value}>
                                        {cat.category}
                                    </MenuItem>
                                ))
                            }

                        </TextField>
                        <TextField
                            select
                            label="Select Difficulty"
                            variant="outlined"
                            style={{ marginBottom: 10 }}
                        >
                            <MenuItem key="easy" value="easy">
                                Easy
                            </MenuItem>
                            <MenuItem key="Medium" value="medium">
                              Medium
                            </MenuItem>
                            <MenuItem key="Hard" value="hard">
                                Hard
                            </MenuItem>
                        </TextField>
                        <Button variant="contained" color="primary">
                            Start Quiz
                        </Button>

                    </div>
                </div>
                <div className="col-md-6 col-12 h-100 d-flex justify-content-center align-items-center">
                    <HomeCover/>
                    </div>
            </div>
        </div>
    );
}
export default Home;