import { Route,Routes } from'react-router-dom';
import './App.css';
import Header from './components/headers/header';
import './index.css';
import Footer from './components/footer/footer';
import axios from "axios";
// import Footer from './components/footer/footer';
import Home from './page/homepage';
import Quiz from './page/Quizpage';
import Result from './page/Resultpage';
import { useEffect, useState } from 'react';
function App() {
  const [name,setName]= useState("");
  const [question,setQuestion]=useState();
  const [score,setScore]=useState(0);
  const fetchQuestion=async(category="",difficulty="")=>{
   const {data}=await axios.get(`https://opentdb.com/api.php?amount=10${
    category && `&category=${category}`
  }${difficulty && `&difficulty=${difficulty}`}&type=multiple` );
  console.log(data);
  setQuestion(data.results)
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
          <Route path="/result" element={<Result name={name} score={score}/>} >  </Route>
          
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
