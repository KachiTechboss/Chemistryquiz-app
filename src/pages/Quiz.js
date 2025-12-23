import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Quiz.css';

const QUESTIONS = [
  {
    id: 1,
    question: 'What is the chemical symbol for Gold?',
    options: ['Au', 'Gd', 'Go', 'Gl'],
    correct: 0,
    category: 'general',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is the atomic number of Carbon?',
    options: ['4', '6', '8', '12'],
    correct: 1,
    category: 'general',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'What is the chemical formula for table salt?',
    options: ['KCl', 'NaCl', 'CaCl2', 'MgCl2'],
    correct: 1,
    category: 'inorganic',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'What is pH at which a solution is neutral?',
    options: ['0', '7', '14', '10'],
    correct: 1,
    category: 'general',
    difficulty: 'intermediate',
  },
  {
    id: 5,
    question: 'What is the process of breaking down of food in the body called?',
    options: ['Metabolism', 'Digestion', 'Catabolism', 'Anabolism'],
    correct: 2,
    category: 'biochemistry',
    difficulty: 'intermediate',
  },
  {
    id: 6,
    question: 'What is the name of the organic compound with a benzene ring?',
    options: ['Alkane', 'Alkene', 'Aromatic compound', 'Alkyne'],
    correct: 2,
    category: 'organic',
    difficulty: 'hard',
  },
  {
    id: 7,
    question: 'What is the Van der Waals force?',
    options: ['Ionic bond', 'Covalent bond', 'Weak intermolecular force', 'Metallic bond'],
    correct: 2,
    category: 'physical',
    difficulty: 'hard',
  },
  {
    id: 8,
    question: 'What is the most abundant element in the Earth\'s crust?',
    options: ['Iron', 'Silicon', 'Oxygen', 'Magnesium'],
    correct: 2,
    category: 'general',
    difficulty: 'intermediate',
  },
  {
    id: 9,
    question: 'What is the charge of a proton?',
    options: ['Negative', 'Positive', 'Neutral', 'Variable'],
    correct: 1,
    category: 'general',
    difficulty: 'easy',
  },
  {
    id: 10,
    question: 'What is the name of the process where a solid changes directly to a gas?',
    options: ['Melting', 'Evaporation', 'Sublimation', 'Condensation'],
    correct: 2,
    category: 'physical',
    difficulty: 'intermediate',
  },
];

const Quiz = ({ quizState, setQuizState }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  if (!quizState) {
    navigate('/');
    return null;
  }

  const questions = QUESTIONS.filter(
    (q) => q.category === quizState.category || quizState.category === 'general'
  ).slice(0, 10);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswerSelect = (index) => {
    if (!showFeedback) {
      setSelectedAnswer(index);
      setShowFeedback(true);

      const isCorrect = index === currentQuestion.correct;
      setAnsweredQuestions([
        ...answeredQuestions,
        {
          questionId: currentQuestion.id,
          selected: index,
          correct: currentQuestion.correct,
          isCorrect,
        },
      ]);

      if (isCorrect) {
        setQuizState((prev) => ({
          ...prev,
          score: prev.score + 1,
        }));
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizState((prev) => ({
        ...prev,
        answers: answeredQuestions,
      }));
      navigate('/results');
    }
  };

  const isAnswered = showFeedback;
  const isLastQuestion = currentIndex === questions.length - 1;

  const questionVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.5 } },
  };

  const optionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="quiz-container">
      <motion.div
        className="quiz-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="quiz-header">
          <div className="progress-section">
            <p className="progress-text">
              Question {currentIndex + 1} of {questions.length}
            </p>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          <div className="score-section">
            <span className="score-label">Score: </span>
            <span className="score-value">{quizState.score}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="question-section"
            variants={questionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="question-text">{currentQuestion.question}</h2>

            <div className="options-container">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`option-button ${
                    selectedAnswer === index ? 'selected' : ''
                  } ${
                    showFeedback && index === currentQuestion.correct ? 'correct' : ''
                  } ${
                    showFeedback &&
                    selectedAnswer === index &&
                    index !== currentQuestion.correct
                      ? 'incorrect'
                      : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  custom={index}
                  variants={optionVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={!showFeedback ? { scale: 1.02 } : {}}
                  whileTap={!showFeedback ? { scale: 0.98 } : {}}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="option-text">{option}</span>
                  {showFeedback && index === currentQuestion.correct && (
                    <span className="option-icon">✓</span>
                  )}
                  {showFeedback &&
                    selectedAnswer === index &&
                    index !== currentQuestion.correct && (
                      <span className="option-icon">✗</span>
                    )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              className={`feedback ${
                selectedAnswer === currentQuestion.correct ? 'success' : 'error'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span className="feedback-icon">
                {selectedAnswer === currentQuestion.correct ? '🎉' : '❌'}
              </span>
              <span className="feedback-text">
                {selectedAnswer === currentQuestion.correct
                  ? 'Correct Answer!'
                  : 'Incorrect Answer'}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="next-button"
          onClick={handleNext}
          disabled={!isAnswered}
          whileHover={isAnswered ? { scale: 1.05 } : {}}
          whileTap={isAnswered ? { scale: 0.95 } : {}}
        >
          {isLastQuestion ? 'See Results' : 'Next Question'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Quiz;
