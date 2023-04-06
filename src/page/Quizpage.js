import React, { useEffect,useState } from "react";
import {CircularProgress} from "@mui/material";
import "./quiz.css";
import Question from "../components/Question/Question";
function Quiz(props){
    const [option,setOption]=useState();
    const {name,score,question,setQuestion,setScore} = props
    const [currQues,setCurrQues]= useState(0);
    
    useEffect(()=>{
        console.log(question);
setOption(
    question && 
    handleshuffle([
        question[currQues]?.correct_answer,
        ...question[currQues]?.incorrect_answers,
    ])
)
    },[question,currQues]);
    console.log(option);
    const handleshuffle =(options)=>{
        return options.sort(()=> Math.random()-0.5);
         };
    return(
        <div className="quiz">
       <span className="subtitle">welcome,{name}</span>
       {question?(<>
       <div className="quizdata"> 
       <span>{question[currQues].category}</span> 
       <span>
        score: {score}
       </span>
       </div>
       <Question
       currQues={currQues}
       setCurrQues={setCurrQues}
       question={question}
       option={option}
       correct={question[currQues]?.correct_answer}
       score={score}
       setScore={setScore}
    //    setQuestion={setQuestion}
       />
       </>):(
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