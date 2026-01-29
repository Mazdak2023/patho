# Pathophysiology Quiz - Educational Web App

An interactive, mobile-responsive quiz application designed specifically for pathophysiology nursing students. This educational tool helps students test their knowledge and reinforce learning through immediate feedback and detailed explanations.

## 🎯 Features

- **Interactive Quiz Interface**: Clean, user-friendly design for focused learning
- **Immediate Feedback**: Get instant explanations for both correct and incorrect answers
- **Progress Tracking**: Visual progress bar and score display
- **Mobile-Responsive**: Works seamlessly on desktops, tablets, and smartphones
- **Random Question Selection**: Each quiz session randomly selects 10 questions from the database
- **Detailed Explanations**: Learn from comprehensive explanations for every question
- **Performance Summary**: View your results with personalized feedback

## 📁 Project Structure

```
patho/
├── landing.html          # Landing page with instructions
├── index.html            # Main quiz page
├── style.css             # Responsive CSS styling
├── questions.js          # Question database
├── quiz.js               # Quiz logic and functionality
└── README.md             # This file
```

## 🚀 Getting Started

### For Students

1. Open `landing.html` in your web browser to read the instructions
2. Click "Start Quiz" to begin
3. Answer questions and receive immediate feedback
4. Review your final score and retake as needed

### For Educators

This quiz app is designed to be easily customizable for different educational needs.

#### Quick Start

1. **Download or Clone** this repository to your local machine
2. **Open** `landing.html` in any web browser - no installation required!
3. **Customize** the questions (see below)

## 📝 Customizing Questions

### Adding New Questions

Edit the `questions.js` file to add, remove, or modify questions. Each question follows this structure:

```javascript
{
    text: "Your question here?",
    options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
    ],
    correctAnswer: 1,  // Index of correct option (0-3)
    explanation: "Detailed explanation of the answer..."
}
```

#### Example:

```javascript
{
    text: "What is the primary cause of cellular hypoxia?",
    options: [
        "Excessive protein synthesis",
        "Inadequate oxygen delivery to tissues",
        "Increased cellular metabolism",
        "Enhanced mitochondrial function"
    ],
    correctAnswer: 1,
    explanation: "Cellular hypoxia occurs when there is inadequate oxygen delivery to tissues. This can result from respiratory failure, cardiovascular problems, or anemia."
}
```

### Important Notes:

- The `correctAnswer` field uses **zero-based indexing** (0 = first option, 1 = second option, etc.)
- Each question should have exactly 4 options
- Keep explanations clear and educational
- The quiz automatically selects 10 random questions from your database

### Tips for Writing Questions:

1. **Clear and Concise**: Make questions straightforward and unambiguous
2. **Educational Value**: Include explanations that reinforce learning
3. **Appropriate Difficulty**: Balance easy, medium, and hard questions
4. **Avoid Tricks**: Focus on testing knowledge, not trick questions
5. **Evidence-Based**: Ensure medical accuracy and cite sources if needed

## 🎨 Customizing Appearance

### Changing Colors

Edit the CSS variables in `style.css` to match your institution's branding:

```css
:root {
    --primary-color: #2c3e50;      /* Main text and headers */
    --secondary-color: #3498db;     /* Buttons and accents */
    --success-color: #27ae60;       /* Correct answers */
    --error-color: #e74c3c;         /* Incorrect answers */
    --background-color: #ecf0f1;    /* Page background */
}
```

### Modifying Layout

The quiz is built with standard HTML/CSS/JavaScript:
- **landing.html**: Modify instructions and welcome content
- **index.html**: Adjust quiz interface structure  
- **style.css**: Change layouts, fonts, spacing, and responsive breakpoints

## 📱 Mobile Responsiveness

The app is fully responsive and tested on:
- Desktop computers (1920x1080 and above)
- Tablets (768px - 1024px)
- Mobile phones (320px - 767px)

The design automatically adapts with:
- Flexible layouts using CSS Flexbox
- Mobile-friendly button sizes
- Readable text at all screen sizes
- Touch-friendly interface elements

## 🔧 Technical Requirements

- **Web Browser**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **No Server Required**: Runs entirely in the browser
- **No Installation**: Just open the HTML files
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## 📚 Educational Use

This quiz app is designed for:
- **Self-Study**: Students can test themselves at their own pace
- **Classroom Review**: Use as an interactive review tool
- **Homework Assignments**: Assign as practice exercises
- **Test Preparation**: Help students prepare for exams

## 🎓 Question Topics Included

The default question set covers:
- Cellular injury and adaptation
- Types of necrosis
- Inflammation and healing
- Fluid and electrolyte balance
- Cardiovascular pathophysiology
- Respiratory disorders
- Diabetes and endocrine disorders
- Shock and hemodynamic disorders
- Blood and coagulation disorders

## 🔄 Updating the Quiz

### Changing Number of Questions per Quiz

Edit `quiz.js` and modify this line:

```javascript
this.questions = shuffleArray(questions).slice(0, 10); // Change 10 to your desired number
```

### Disabling Question Randomization

In `quiz.js`, change:

```javascript
this.questions = shuffleArray(questions).slice(0, 10);
```

To:

```javascript
this.questions = questions.slice(0, 10);
```

## 🌐 Deployment Options

### Option 1: Local Use
Simply open `landing.html` in a browser - perfect for offline study

### Option 2: School LMS
Upload all files to your Learning Management System (Canvas, Blackboard, Moodle, etc.)

### Option 3: Web Hosting
Host on any web server:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- Your institution's web server

**For GitHub Pages:**
1. Upload files to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save
4. Your quiz will be available at `https://yourusername.github.io/reponame`

## 🤝 Contributing

To improve the quiz app:
1. Add more questions to `questions.js`
2. Improve explanations for existing questions
3. Enhance styling in `style.css`
4. Add new features in `quiz.js`

## 📄 License

This educational tool is provided for free educational use. Feel free to modify and distribute for educational purposes.

## 💡 Support

For questions or issues:
1. Check that all files are in the same directory
2. Ensure JavaScript is enabled in your browser
3. Try a different web browser
4. Review the browser console for error messages (F12 > Console)

## 🎯 Learning Objectives

This quiz helps students:
- Recall key pathophysiology concepts
- Understand disease mechanisms
- Apply knowledge to clinical scenarios
- Prepare for nursing examinations
- Build confidence in medical terminology

## ✨ Best Practices for Educators

1. **Regular Updates**: Keep questions current with latest medical knowledge
2. **Diverse Topics**: Cover all curriculum areas
3. **Difficulty Balance**: Mix easy, moderate, and challenging questions
4. **Quality Explanations**: Provide educational value in every answer
5. **Student Feedback**: Gather input to improve questions

---

**Made for nursing students, by educators 🏥**

Happy Learning! 📚
