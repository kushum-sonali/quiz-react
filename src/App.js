import { Route,Routes } from'react-router-dom';
import './App.css';
import Header from './components/headers/header';
import './index.css';
// import Footer from './components/footer/footer';
import Home from './page/homepage';
import Quiz from './page/Quizpage';
import Result from './page/Resultpage';
function App() {
  return (
 
    <div className='app'>
 
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} > </Route>
          <Route path="/quiz" element={<Quiz/>} > </Route>
          <Route path="/result" element={<Result/>} > </Route>
        </Routes>
      </div>
  );
}

export default App;
