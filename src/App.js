import { Route,Routes } from'react-router-dom';
import './App.css';
import Header from './components/headers/header';
import './index.css';
import axios from "axios";
// import Footer from './components/footer/footer';
import Home from './page/homepage';
import Quiz from './page/Quizpage';
import Result from './page/Resultpage';
import { useState } from 'react';
function App() {
  const [name,setName]= useState("");
  const [question,setQuestion]=useState();
  const [score,setScore]=useState(0);
  const fetchQuestion=async(category="",difficulty="")=>{
   const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`} ${difficulty && `&difficulty=${difficulty}`} &type=multiple` );
  setQuestion(data.result)
  };
  return (
 
    <div className='app'>
 
        <Header/>
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion}/>} > </Route>
          <Route path="/quiz" element={<Quiz
          name={name}
         question={question}
         score={score}  
         setScore={setScore}
         setQuestion={setQuestion} />} > </Route>
          <Route path="/result" element={<Result/>} > </Route>
        </Routes>
      </div>
  );
}

export default App;
