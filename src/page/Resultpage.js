import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result=({name,score})=>{
    const nevigate= useNavigate();
     useEffect(()=>{
     if(!name){
        nevigate.push("/")
     }
     },[name,nevigate])
    return(
        <>
<div>
    <span className="title">
      Final Score : {score}
    </span>
    <Button
    variant="contained"
    color="secondary"
    size="large"
    style={{alignSelf: "center",marginTop:20}}
    href="/"
    >
     Go To Home-page
    </Button>
</div>
        </>
    );
}
export default Result;