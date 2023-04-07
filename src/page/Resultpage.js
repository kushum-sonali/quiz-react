import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuizCover from "../animation/quizcover";

const Result=(props)=>{
    const navigate= useNavigate();
     useEffect(()=>{
     if(!props.name){
        navigate('/')
     }
     },[props.name,navigate])
    return(
        <>
         <div className="m1">
         <div><QuizCover/></div>
<div className="result">
   
    <span className="title">
      Final Score : {props.score}
    </span>
    <Button
    variant="contained"
    color="secondary"
    size="large"
    style={{alignSelf: "center",marginTop:20}}
    onClick={()=>{
        navigate('/')
    }}
    >
     Go To Home-page
    </Button>
    </div>
</div>
 <style jsx>
    {`
    .result{
        height:70vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
    }
    .m1{
        display: flex;
        justify-content:space-evenly;
        align-items:center;
        flex-direction:row;
        flex-wrap:wrap;
    
    }
    `}
 </style>
        </>
    );
}
export default Result;