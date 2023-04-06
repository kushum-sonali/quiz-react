import React from "react";
import "./homepage.css";
import HomeCover from "../animation/HomeCover.js";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../Data/Categories";
import { useState } from "react";
import {useNavigate} from "react-router"
import ErrorMessage from "../components/ErrorMessage/ErrorMessagee";
// import {ErrorMessage} from "../components/ErrorMessage/ErrorMessagee";
function Home(props) {
    const {name, setName,fetchQuestion}=props
    const [category,setCategory]=useState("");
    const [difficulty,setDifficulty]=useState("");
    const [error,setError]=useState(false);
const navigate =  useNavigate();

    const handleSubmit= async()=>{
        if(!category || !difficulty|| !name){
            setError(true);
            return;
        }
        else {
        setError(false);
       await fetchQuestion(category,difficulty);
       navigate("/quiz");
        }
    }
    return (
        <div className="container-fluid content">
            <div className="col-12 row h-100 main">
                <div className="settings col-md-6 col-12 "> 
                    <span className="  Quiz-title">Quiz Setting</span>
                    <div className="setting__select">
                        {error && <ErrorMessage>Please fill all the feilds</ErrorMessage>}
                        <TextField
                            style={{ marginBottom: 10}}
                            label="Enter Your Name"
                            variant="outlined"
                            onChange={(e)=>setName(e.target.value)}
                        />
                        <TextField select label="Select Category"
                            varient="outlined" 
                            style={{ marginBottom: 10 }}
                            onChange={(e)=>setCategory(e.target.value)}
                            value={category}
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
                            onChange={(e)=> setDifficulty(e.target.value)}
                            value={difficulty}
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
                        <Button variant="contained" color="primary"
                        onClick={handleSubmit}>
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