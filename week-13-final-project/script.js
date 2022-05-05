// QUESTIONS

const questions = [
  {
    "question": "What genre of music do you typically to listen to?",
    "answer1": "Pop",
    "answer1Total": "1",
    "answer2": "Rock",
    "answer2Total": "2",
    "answer3": "R&B",
    "answer3Total": "3"
        "answer3": "",
    "answer3Total": "3"
  },
  {
    "question": "Pick a color",
    "answer1": "Blue",
    "answer1Total": "1",
    "answer2": "Green",
    "answer2Total": "2",
    "answer3": "Black",
    "answer3Total": "3"
        "answer3": "Red",
    "answer3Total": "3"
  },
  {
    "question":
      "Pick an emotion",
    "answer1": "Happy",
    "answer1Total": "1",
    "answer2": "Sad",
    "answer2Total": "3",
    "answer3": "Angry",
    "answer3Total": "2"
        "answer3": "Silly",
    "answer3Total": "3"
  },
  {
    "question": "Pick a Sanrio Character",
    "answer1": "Kuromi",
    "answer1Total": "3",
    "answer2": "Hello Kitty",
    "answer2Total": "2",
    "answer3":
      "My Melody",
    "answer3Total": "1"
        "answer3": "Gudetama",
    "answer3Total": "3"
  },
  {
    "question": "Pick a season",
    "answer1": "Spring",
    "answer1Total": "1",
    "answer2": "Summer",
    "answer2Total": "2",
    "answer3": "Fall",
    "answer3Total": "3"
        "answer3": "Winter",
    "answer3Total": "3"
  },
  {
    "question":
      "Pick your favorite iconic 2000s cartoon",
    "answer1":
      "Teen Titans",
    "answer1Total": "3",
    "answer2": "Avatar the last Airbender",
    "answer2Total": "2",
    "answer3": "Fairly OddParents",
    "answer3Total": "1"
        "answer3": "Kim Possible",
    "answer3Total": "3"
  },
  {
    "question": "Pick a favorite desert.",
    "answer1": "Cake",
    "answer1Total": "1",
    "answer2": "Pie",
    "answer2Total": "2",
    "answer3": "Ice Cream",
    "answer3Total": "3"
        "answer3": "R&B",
    "answer3Total": "Pudding"
  }
]


let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

//Function to generate question 
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    //Populate html elements 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    //Check if there is a radio input checked
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    //Get value of selected radio
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    ////Add the answer score to the score array
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    //Finally we incement the current question number ( to be used as the index for each array)
    currentQuestion++;

        //once finished clear checked
        selectedOption.checked = false;
    //If quiz is on the final question
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    //If the quiz is finished then we hide the questions container and show the results 
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p>Possible - Personality Traits, see below for a summary based on your results:</p>
            <p>15 - 21- You Need Help</p>
            <p>10 - 15 - Good Soul</p>
            <p>5 - 10 - Meh </p>
            <p>5 - Are You Even Real</p>
        </div>
        <button class="restart">Restart Quiz</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);