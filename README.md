# 🔬 Pathophysiology Quiz App

An interactive educational quiz web application designed for nursing students studying pathophysiology. This app provides case-based learning with 75 comprehensive questions covering essential pathophysiology topics.

## 🎯 Features

- **75 Comprehensive Questions**: Covering cellular adaptation, inflammation, infection, fluid & electrolyte balance, acid-base disorders, and more
- **Case-Based Learning**: Real-world clinical scenarios to enhance understanding
- **Instant Feedback**: Detailed explanations for each answer to reinforce learning
- **Progress Tracking**: Monitor performance with statistics and progress bars
- **Mobile-Responsive Design**: Study anywhere on any device
- **User-Friendly Interface**: Clean, modern design with intuitive navigation

## 📁 File Structure

```
patho/
├── index.html          # Landing page with instructions
├── quiz.html           # Main quiz application
└── README.md           # This file
```

### File Descriptions

- **index.html**: The landing page that welcomes students and provides instructions on how to use the quiz app
- **quiz.html**: The main quiz application containing all questions, case studies, and interactive functionality
- **README.md**: Documentation for educators and contributors

## 🚀 Getting Started

### For Students

1. Open `index.html` in your web browser
2. Read the welcome message and instructions
3. Click "Start Learning" to begin the quiz
4. Choose a case study topic from the menu
5. Answer questions and receive instant feedback
6. Track your progress and return to the menu anytime

### For Educators

#### Deploying the Quiz

**Option 1: Local Deployment**
1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Share the files with students (they can open locally)

**Option 2: Web Server Deployment**
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Share the URL with students

**Option 3: GitHub Pages**
1. Fork this repository
2. Go to Settings → Pages
3. Select branch to deploy (usually `main`)
4. Your quiz will be available at `https://yourusername.github.io/patho/`

## 🎓 Customizing Questions for Your Course

### Understanding the Question Format

All quiz questions are stored in the `quiz.html` file within the `gameData.cases` JavaScript array. Each case study contains multiple questions.

### Question Structure

```javascript
{
    id: 1,                    // Unique question ID (must be unique across all questions)
    num: "#1",                // Question number display
    question: "Question text?",   // The actual question
    options: [                // Array of answer options
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correct: 0,               // For single answer: index (0-based)
                              // For multiple answers: array like [0, 2]
    multiSelect: true,        // Optional: true if multiple answers can be selected
                              // Omit this property for single-select questions
    explanation: {            // Explanation object shown after answering
        title: "Concept Title",
        points: [             // Array of explanation points
            "Point 1",
            "Point 2",
            "Point 3"
        ],
        keyPoint: "Key takeaway message for students"
    }
}
```

### How to Add or Edit Questions

1. **Open quiz.html** in a text editor (VS Code, Sublime Text, Notepad++, etc.)

2. **Locate the gameData section** (starts around line 88):
```javascript
const gameData = {
    answered: new Set(),
    correct: new Set(),
    cases: [
        // Case studies are here
    ]
};
```

3. **Find the case study** you want to edit or add a new one:
```javascript
{
    id: 1,
    title: "Your Case Study Title",
    icon: "🔬",
    description: "Brief description",
    scenario: "Clinical scenario...",
    questions: [
        // Questions go here
    ]
}
```

4. **Add a new question** to the questions array:
```javascript
{
    id: 100,  // Use a unique ID - check existing questions to avoid duplicates
    num: "#1",
    question: "What is the primary mechanism of cellular injury in ischemia?",
    options: [
        "Reduced oxygen supply to tissues",
        "Increased calcium influx",
        "Free radical formation",
        "All of the above"
    ],
    correct: 3,  // Index 3 means "All of the above"
    explanation: {
        title: "Ischemic Cellular Injury",
        points: [
            "Ischemia = reduced blood flow leading to decreased oxygen",
            "Multiple injury mechanisms work together",
            "Reduced ATP production affects cellular functions",
            "Calcium influx disrupts cellular processes",
            "Reperfusion can cause additional injury via free radicals"
        ],
        keyPoint: "Ischemia causes cellular injury through multiple interconnected mechanisms, not just one pathway."
    }
}
```

5. **For multiple correct answers**, set `multiSelect: true` and use an array for correct indices:
```javascript
{
    id: 101,
    num: "#2",
    question: "Which of the following are signs of inflammation? (Select all that apply)",
    options: [
        "Redness",
        "Fever",
        "Swelling",
        "Hypothermia"
    ],
    correct: [0, 1, 2],  // Multiple correct answers as array
    multiSelect: true,   // Enable checkbox selection
    explanation: {
        title: "Cardinal Signs of Inflammation",
        points: [
            "The five cardinal signs: Redness, Heat, Swelling, Pain, Loss of function",
            "Redness from increased blood flow (vasodilation)",
            "Heat/fever from increased metabolism and blood flow",
            "Swelling from fluid accumulation (edema)",
            "Hypothermia is NOT a sign of inflammation"
        ],
        keyPoint: "Remember the 5 cardinal signs: Rubor (redness), Calor (heat), Tumor (swelling), Dolor (pain), Functio laesa (loss of function)"
    }
}
```

6. **Save the file** and test in your browser

### Tips for Creating Good Questions

- **Use clear, unambiguous language**
- **Ensure unique question IDs** - Each question must have a unique ID across ALL case studies to avoid tracking conflicts. Check existing IDs before adding new questions.
- **Base questions on clinical scenarios** when possible
- **Provide detailed explanations** that teach, not just confirm answers
- **Include key points** to highlight important concepts in the explanation object
- **Test your questions** to ensure they work correctly
- **Mix difficulty levels** to challenge all students

### Updating Case Study Topics

To add a new case study topic:

1. Add a new case object to the `cases` array:
```javascript
{
    id: 10,  // Use next available ID
    title: "Cardiovascular Pathophysiology",
    icon: "❤️",
    description: "Heart failure, shock, and cardiac disorders",
    scenario: "You are working in a cardiac care unit...",
    questions: [
        // Add your questions here
    ]
}
```

2. Update the total question count in the header if needed (line 71):
```html
<p>Interactive Midterm Exam Review - XX Questions</p>
```

## 🎨 Customizing Appearance

### Changing Colors

Colors are defined in the `<style>` section of both HTML files. Key color variables:

- **Primary gradient**: `#00d4ff` to `#7b2cbf`
- **Background**: `#1a1a2e` to `#16213e`
- **Dark elements**: `#2a2a4a`, `#1a1a3a`
- **Text**: `#fff` (white), `#a0a0a0` (gray)

### Modifying Layout

The app uses CSS Grid and Flexbox for responsive layouts. Media queries handle mobile responsiveness:
- Tablets: `@media (max-width: 768px)`
- Phones: `@media (max-width: 600px)`

## 🔧 Technical Requirements

- **Browser**: Any modern web browser (Chrome, Firefox, Safari, Edge)
- **JavaScript**: Enabled (required for quiz functionality)
- **Server**: Not required (can run as static HTML files)

## 📝 Best Practices for Educators

1. **Review all questions** before sharing with students
2. **Test the quiz** thoroughly on different devices
3. **Update content regularly** to match current curriculum
4. **Gather student feedback** to improve questions
5. **Consider adding** new case studies based on course focus
6. **Keep explanations clear** and referenced to course materials

## 🤝 Contributing

Educators and developers are welcome to contribute:

1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a description of changes

## 📄 License

This educational resource is provided for academic use. Feel free to modify and adapt for your courses.

## 💡 Support

For questions or issues:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the customization guide above

## 🙏 Acknowledgments

Created for nursing students to enhance pathophysiology learning through interactive, case-based practice.

---

**Happy Teaching! 📚✨**
