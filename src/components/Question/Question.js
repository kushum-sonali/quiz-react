import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessagee";
import './Question.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import QuizCover from "../../animation/quizcover";
const Question = ({
    currQues,
    setCurrQues,
    question,
    option,
    correct,
    setScore,
    score,
    // setQuestion,
}) =>{
    const [selected,setSelected]=useState();
    const [error,setError]=useState(false);


    const handleSelect=(i)=>{
        if(selected===i && selected===correct){
            return "select"
        }
        else if(selected===i && selected != correct){
            return "wrong"
        }
        else if(i===correct){
            return "select"
        }
    };


    const handleCheck =(i)=>{
setSelected(i);
if(i=== correct) setScore(score+1);
setError(false);
    }


    const navigate=useNavigate();

    const handleNext = ()=>{
     if(currQues>8){
        navigate('/result')
     }
     else if(selected){
        setCurrQues(currQues+1)
        setSelected();
     }
     else {
        setError("please select an option first");
     }
    };


    const handleQuit=()=>{
        setCurrQues(0);
        navigate('/result')
        // setQuestion();
    };

    return(
        <div className="question">
        <h1>Question {currQues+1}</h1>
        <div className="singleQuestion">
        {question[currQues].question}
            <div className="options">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                    option &&
                    option.map(i =>(
                        <button onClick={()=>handleCheck(i)}
                        className={`singleOption ${selected && handleSelect(i)}`}
                        key={i}
                        disabled={selected}

                        >
                            {i}
                        </button>
                    ))
                }
            </div>
            <div className="controls">
                <Button
                variant="contained"
                color="error"
                onClick={()=>{
                    handleQuit()
                }
            }
                
                >Quit</Button>
                <Button
                variant="contained"
                color="success"
                onClick={()=>{
                    handleNext()
                }
            }
                >{currQues>10 ? "submit" : "next Question"}</Button>

            </div>
        </div>
        <div>
    
        </div>
        </div>
    );
};
export default Question;