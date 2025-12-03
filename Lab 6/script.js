// Questions Array
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Rome", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "How many elements are in the periodic table?",
    options: ["120", "106", "115", "118"],
    answer: "118"
  },
  {
    question: "What is the chemical element with the symbol Fe",
    options: ["Nitrogen", "Iron", "Oxygen", "Fluorine"],
    answer: "Iron"
  },
  {
    question: "All snakes are venomous.?",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Lightning is seen before it's heard because light travels faster than sound.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "A lion's roar can be heard up to eight kilometres away",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "There are three different blood groups",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "If you sneeze with your eyes open, then your eyes will pop out",
    options: ["True", "False"],
    answer: "False"
  }
];

let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
// Shuffle Questions
function shuffleQuestions() {
  shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}
// Start Timer
function startTimer() {
  timeLeft = 10;
  document.getElementById("time").textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}
// Display Current Question
function displayQuestion() {
  const q = shuffledQuestions[currentIndex];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
}
// Check Answer
function checkAnswer(selected) {
  const correct = shuffledQuestions[currentIndex].answer;
  if (selected === correct) {
    score++;
    document.getElementById("feedback").textContent = "Correct!";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").textContent = "Incorrect!";
    document.getElementById("feedback").style.color = "red";
  }
  clearInterval(timer);
}
// Next Question
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= shuffledQuestions.length) {
    finishQuiz();
    return;
  }
  displayQuestion();
  startTimer();
}
// Finish Quiz
function finishQuiz() {
  clearInterval(timer);
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("score-section").classList.remove("hidden");
  document.getElementById("final-score").textContent =
    `${score} / ${shuffledQuestions.length}`;
}
// GIVE UP 
function giveUp() {
  clearInterval(timer);
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("score-section").classList.remove("hidden");
  document.getElementById("final-score").textContent =
    `${score} / ${shuffledQuestions.length} (Ended Early)`;
}
// Show Popup
function showPopup() {
  clearInterval(timer); // pause timer
  document.getElementById("confirm-popup").classList.remove("hidden");
}
// Confirm Give Up
function confirmGiveUp() {
  document.getElementById("confirm-popup").classList.add("hidden");
  giveUp();
}
// Cancel Give Up
function cancelGiveUp() {
  document.getElementById("confirm-popup").classList.add("hidden");
  startTimer(); // resume timer
}
// Start Quiz
function startQuiz() {
  score = 0;
  currentIndex = 0;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("score-section").classList.add("hidden");
  document.getElementById("quiz-section").classList.remove("hidden");
  shuffleQuestions();
  displayQuestion();
  startTimer();
}
// Back to Start Screen
function goToStart() {
  document.getElementById("score-section").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
}
