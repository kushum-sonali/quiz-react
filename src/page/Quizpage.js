import React, { useEffect,useState } from "react";
import {CircularProgress} from "@mui/material";
import "./quiz.css";
function Quiz(props){
    const [option,setOption]=useState();
    const {name,score,question,setQuestion,setScore} = props
    const [currQues,setQues]= useState(0);
    
    useEffect(()=>{
        console.log(question);
setOption(
    question && 
    handleshuffle([
        question[currQues]?.correct_answer,
        ...question[currQues]?.incorrect_answer,
    ])
)
    },[question]);
    console.log(option);
    const handleshuffle =(options)=>{
        return options.sort(()=> Math.random()-0.5);
         };
    return(
        <div className="quiz">
       <span className="subtitle">welcome,{name}</span>
       {question?(<>Question</>):(
        <CircularProgress
        style={{margin:100}}
        color="inherit"
        size={150}
        thickness={1}
        />
       )}
        </div>
    );
}
export default Quiz;