import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Results.css';

const Results = ({ quizState, setQuizState }) => {
  const navigate = useNavigate();

  if (!quizState) {
    navigate('/');
    return null;
  }

  const percentage = (quizState.score / 10) * 100;

  const getPerformanceMessage = () => {
    if (percentage === 100) return '🌟 Perfect Score!';
    if (percentage >= 80) return '🎉 Excellent Work!';
    if (percentage >= 60) return '👏 Good Job!';
    if (percentage >= 40) return '💪 Keep Practicing!';
    return '📚 Study More!';
  };

  const getPerformanceColor = () => {
    if (percentage === 100) return 'perfect';
    if (percentage >= 80) return 'excellent';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'fair';
    return 'poor';
  };

  const handleRetry = () => {
    setQuizState(null);
    navigate('/');
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const circleVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15, delay: 0.2 },
    },
  };

  return (
    <div className="results-container">
      <motion.div
        className="results-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={`score-circle ${getPerformanceColor()}`}
          variants={circleVariants}
        >
          <div className="score-display">
            <span className="score-number">{quizState.score}</span>
            <span className="score-total">/10</span>
          </div>
          <div className="percentage-display">{Math.round(percentage)}%</div>
        </motion.div>

        <motion.h1 className="performance-message" variants={itemVariants}>
          {getPerformanceMessage()}
        </motion.h1>

        <motion.p className="results-subtitle" variants={itemVariants}>
          {percentage === 100
            ? 'You achieved a perfect score! Chemistry mastery unlocked!'
            : percentage >= 80
            ? 'Your chemistry knowledge is impressive!'
            : percentage >= 60
            ? 'You have a solid understanding of chemistry.'
            : percentage >= 40
            ? 'Good effort! Review the material and try again.'
            : 'Keep studying the chemistry concepts to improve!'}
        </motion.p>

        <motion.div className="stats-container" variants={itemVariants}>
          <div className="stat-box correct">
            <span className="stat-icon">✓</span>
            <div>
              <p className="stat-label">Correct Answers</p>
              <p className="stat-value">{quizState.score}</p>
            </div>
          </div>
          <div className="stat-box incorrect">
            <span className="stat-icon">✗</span>
            <div>
              <p className="stat-label">Incorrect Answers</p>
              <p className="stat-value">{10 - quizState.score}</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="buttons-container" variants={itemVariants}>
          <motion.button
            className="retry-button"
            onClick={handleRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Retake Quiz
          </motion.button>
        </motion.div>

        <motion.div className="encouragement" variants={itemVariants}>
          <p>
            {percentage < 100
              ? '💡 Tip: Review the questions you missed and try again!'
              : 'Keep up the excellent work and challenge your friends!'}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Results;
