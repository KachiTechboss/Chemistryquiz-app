import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

function App() {
  const [quizState, setQuizState] = React.useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home setQuizState={setQuizState} />} />
        <Route path="/quiz" element={<Quiz quizState={quizState} setQuizState={setQuizState} />} />
        <Route path="/results" element={<Results quizState={quizState} setQuizState={setQuizState} />} />
      </Routes>
    </Router>
  );
}

export default App;
