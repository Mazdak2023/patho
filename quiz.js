// Quiz Logic
class Quiz {
    constructor(questions) {
        this.questions = shuffleArray(questions).slice(0, 10); // Select 10 random questions
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.init();
    }

    init() {
        this.cacheElements();
        this.bindEvents();
        this.displayQuestion();
        this.updateProgress();
    }

    cacheElements() {
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.feedbackDiv = document.getElementById('feedback');
        this.submitBtn = document.getElementById('submit-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.questionContainer = document.getElementById('question-container');
        this.resultsContainer = document.getElementById('results-container');
        this.scoreDisplay = document.getElementById('score');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.progressBar = document.getElementById('progress');
        this.restartBtn = document.getElementById('restart-btn');
    }

    bindEvents() {
        this.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restart());
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        // Update question text and number
        this.questionText.textContent = question.text;
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        this.totalQuestionsSpan.textContent = this.questions.length;
        
        // Clear previous options and feedback
        this.optionsContainer.innerHTML = '';
        this.feedbackDiv.classList.add('hidden');
        this.selectedAnswer = null;
        
        // Create option buttons
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.dataset.index = index;
            optionDiv.addEventListener('click', () => this.selectOption(optionDiv, index));
            this.optionsContainer.appendChild(optionDiv);
        });

        // Reset button states
        this.submitBtn.classList.remove('hidden');
        this.nextBtn.classList.add('hidden');
    }

    selectOption(optionDiv, index) {
        // Remove previous selection
        const allOptions = this.optionsContainer.querySelectorAll('.option');
        allOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Mark current selection
        optionDiv.classList.add('selected');
        this.selectedAnswer = index;
    }

    submitAnswer() {
        if (this.selectedAnswer === null) {
            this.showFeedback('Please select an answer before submitting.', 'incorrect');
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        const allOptions = this.optionsContainer.querySelectorAll('.option');
        
        // Disable all options
        allOptions.forEach(opt => {
            opt.classList.add('disabled');
            opt.style.cursor = 'not-allowed';
        });

        // Check if answer is correct
        if (this.selectedAnswer === question.correctAnswer) {
            this.score++;
            allOptions[this.selectedAnswer].classList.add('correct');
            this.showFeedback(`Correct! ✓ ${question.explanation}`, 'correct');
        } else {
            allOptions[this.selectedAnswer].classList.add('incorrect');
            allOptions[question.correctAnswer].classList.add('correct');
            this.showFeedback(`Incorrect. ✗ The correct answer is: "${question.options[question.correctAnswer]}". ${question.explanation}`, 'incorrect');
        }

        // Update score display
        this.updateScore();
        
        // Hide submit button, show next button
        this.submitBtn.classList.add('hidden');
        this.nextBtn.classList.remove('hidden');
    }

    showFeedback(message, type) {
        this.feedbackDiv.innerHTML = `<div class="feedback-title">${type === 'correct' ? 'Great job!' : 'Keep learning!'}</div>${message}`;
        this.feedbackDiv.className = `feedback ${type}`;
        this.feedbackDiv.classList.remove('hidden');
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
            this.updateProgress();
        } else {
            this.showResults();
        }
    }

    updateScore() {
        this.scoreDisplay.textContent = `Score: ${this.score}/${this.currentQuestionIndex + 1}`;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    showResults() {
        this.questionContainer.classList.add('hidden');
        this.resultsContainer.classList.remove('hidden');
        
        const finalScore = document.getElementById('final-score');
        const finalTotal = document.getElementById('final-total');
        const percentage = document.getElementById('percentage');
        const performanceMessage = document.getElementById('performance-message');
        
        finalScore.textContent = this.score;
        finalTotal.textContent = this.questions.length;
        
        const percentScore = Math.round((this.score / this.questions.length) * 100);
        percentage.textContent = percentScore;
        
        // Performance message based on score
        let message = '';
        let messageClass = '';
        
        if (percentScore >= 90) {
            message = '🌟 Outstanding! You have excellent knowledge of pathophysiology!';
            messageClass = 'excellent';
        } else if (percentScore >= 75) {
            message = '👍 Good job! You have a solid understanding of the material.';
            messageClass = 'good';
        } else if (percentScore >= 60) {
            message = '📚 Keep studying! Review the explanations to improve your understanding.';
            messageClass = 'good';
        } else {
            message = '💪 Don\'t give up! Consider reviewing your pathophysiology notes and try again.';
            messageClass = 'needs-improvement';
        }
        
        performanceMessage.textContent = message;
        performanceMessage.className = `performance-message ${messageClass}`;
    }

    restart() {
        // Reset quiz state
        this.questions = shuffleArray(questions).slice(0, 10);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;
        
        // Reset display
        this.scoreDisplay.textContent = 'Score: 0/0';
        this.resultsContainer.classList.add('hidden');
        this.questionContainer.classList.remove('hidden');
        
        // Start quiz again
        this.displayQuestion();
        this.updateProgress();
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Quiz(questions);
});
