import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = ({ setQuizState }) => {
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState('intermediate');
  const [category, setCategory] = useState('general');

  const handleStartQuiz = () => {
    setQuizState({
      category,
      difficulty,
      score: 0,
      currentQuestion: 0,
      answers: [],
    });
    navigate('/quiz');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="home-container">
      <motion.div
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="home-title" variants={itemVariants}>
          ⚗️ Chemistry Quiz
        </motion.h1>

        <motion.p className="home-subtitle" variants={itemVariants}>
          Test your chemistry knowledge and see how you score!
        </motion.p>

        <motion.div className="difficulty-section" variants={itemVariants}>
          <label htmlFor="difficulty">Select Difficulty Level</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="select-input"
          >
            <option value="easy">Easy</option>
            <option value="intermediate">Intermediate</option>
            <option value="hard">Hard</option>
          </select>
        </motion.div>

        <motion.div className="category-section" variants={itemVariants}>
          <label htmlFor="category">Select Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-input"
          >
            <option value="general">General Chemistry</option>
            <option value="organic">Organic Chemistry</option>
            <option value="inorganic">Inorganic Chemistry</option>
            <option value="physical">Physical Chemistry</option>
            <option value="biochemistry">Biochemistry</option>
          </select>
        </motion.div>

        <motion.button
          className="start-button"
          onClick={handleStartQuiz}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Quiz
        </motion.button>

        <motion.div className="features" variants={itemVariants}>
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <p>10 Questions</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <p>Instant Feedback</p>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <p>Detailed Results</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
