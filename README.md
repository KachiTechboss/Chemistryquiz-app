# 🧪 Chemistry Quiz App

A lightweight, interactive quiz application built with React. The app provides an engaging user experience for testing chemistry knowledge with beautiful animations, smooth transitions, and mobile-friendly design.

## ✨ Features

### 📱 Home Screen
- Start Quiz button
- Category selection (General, Organic, Inorganic, Physical, Biochemistry)
- Difficulty level selection (Easy, Intermediate, Hard)
- Feature highlights with icons

### 🎯 Quiz Interface
- Current question number and total questions displayed
- Multiple-choice answers with clear selection states
- Progress indicator (animated progress bar)
- Smooth animations between questions
- Instant feedback on answer selection
- Keyboard-friendly navigation

### ⚡ Instant Feedback
- Correct answers highlighted in green
- Incorrect answers highlighted in red
- Celebratory emoji for correct answers
- Visual feedback icons (✓ and ✗)

### 🏆 Results Screen
- Final score summary with animated circle display
- Performance message based on score
- Performance percentage
- Stat boxes showing correct/incorrect answers
- Option to retake the quiz
- Encouragement message

### ♿ Accessibility
- High-contrast colors for readability
- Keyboard-friendly navigation
- Readable font sizes
- Semantic HTML structure
- ARIA-friendly labels
- Focus states on interactive elements

### 📱 Mobile-First Layout
- Single-column responsive design
- Large, touch-friendly buttons
- Optimized for all screen sizes
- Smooth animations on mobile devices

### 🎨 Beautiful Animations
- Page transition animations using Framer Motion
- Staggered option animations
- Progress bar animations
- Score circle pulse animation
- Hover and tap effects
- Floating background animations

## 🛠 Prerequisites

Before using or modifying the app, ensure you have:
- Node.js (current LTS recommended)
- npm or yarn package manager
- Basic understanding of React, JSX, and hooks

## 📦 Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd chemistry-quiz-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Running the App

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## 🔨 Building for Production

Create an optimized production build:
```bash
npm run build
```

## 📝 Project Structure

```
chemistry-quiz-app/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Quiz.js
│   │   ├── Quiz.css
│   │   ├── Results.js
│   │   └── Results.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎓 Questions Database

The quiz includes 10 questions covering:
- General Chemistry
- Organic Chemistry
- Inorganic Chemistry
- Physical Chemistry
- Biochemistry

Questions are categorized by:
- **Difficulty**: Easy, Intermediate, Hard
- **Category**: General, Organic, Inorganic, Physical, Biochemistry

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #10b981;
  --danger-color: #ef4444;
}
```

### Adding More Questions
Edit the `QUESTIONS` array in `src/pages/Quiz.js`:
```javascript
{
  id: 11,
  question: 'Your question here?',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correct: 0,
  category: 'general',
  difficulty: 'easy',
}
```

### Adjusting Animations
Modify animation variants in component files to change speeds and effects.

## 📚 Technologies Used

- **React** - UI library
- **React Router** - Navigation between pages
- **Framer Motion** - Beautiful animations
- **CSS3** - Styling with CSS variables
- **JavaScript ES6+** - Modern JavaScript

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork the project and submit pull requests with improvements.

## 💡 Tips for Users

1. Start with Easy difficulty to build confidence
2. Review missed questions for better learning
3. Try different categories to explore various chemistry topics
4. Challenge friends and compare scores
5. Use the quiz as a study tool to prepare for exams

## 🐛 Troubleshooting

### App won't start
- Make sure all dependencies are installed: `npm install`
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### Animations not working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check browser compatibility

### Port 3000 already in use
- Use a different port: `PORT=3001 npm start`

## 📞 Support

For questions or issues, please check the project documentation or create an issue in the repository.

---

Made with ❤️ for chemistry students everywhere!
