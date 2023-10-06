// fetch(
//     "https://quizapi.io/api/v1/questions?apiKey=vpW4zdI1T4LrxzXJZP2r2zmyGngQAieI1Y05yK9S&difficulty=Easy&limit=5"
//   )
//     .then((response) => {
//       if (response.ok) {
//         return response.json(); // Parse the response data as JSON
//       } else {
//         throw new Error("API request failed");
//       }
//     })
//     .then((data) => {
//       // Process the response data here
//       questions = data;
//       console.log(data); // Example: Logging the data to the console
//     })
//     .catch((error) => {
//       // Handle any errors here
//       console.error(error); // Example: Logging the error to the console
//     });


let questions;

// let questions = [
//   {
//     question: "Full form of html",
//     answers: [
//       {text: "herper text markup languge", correct: true},
//       {text: "cascasing style sheet", correct: false},
//       {text: "herper text", correct: false},
//       {text: "herper text language", correct: false}]
//   },
//   {
//     question: "full form of html",
//     answers: [
//       {text: "herper text markup languge", correct: true},
//       {text: "cascasing style sheet", correct: false},
//       {text: "herper text", correct: false},
//       {text: "herper text language", correct: false}]
//   },
//   {
//     question: "full form of html",
//     answers: [
//       {text: "herper text markup languge", correct: true},
//       {text: "cascasing style sheet", correct: false},
//       {text: "herper text", correct: false},
//       {text: "herper text language", correct: false}]
//   }
// ];

const questionElement = document.getElementById("question");

const ansBtn = document.getElementById("ansBtn");

const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

async function startQuiz() {
  const data = await fetch("https://quizapi.io/api/v1/questions?apiKey=vpW4zdI1T4LrxzXJZP2r2zmyGngQAieI1Y05yK9S&difficulty=Easy&limit=5")
  questions = await data.json();
  console.log(questions);
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currQuestion.question}`;

  // currQuestion.correct_answers.forEach(option => {
  //   const button = document.createElement("button");
  //   button.innerHTML = option.text;
  //   button.classList.add("btn");
  //   ansBtn.appendChild(button);
  //   if(option.correct){
  //     button.dataset.correct = option.correct;
  //   }
  //   button.addEventListener("click", selectAnswer)
  // })

  for(key in currQuestion.answers){
    if(currQuestion.answers[key] != null){
      const button = document.createElement("button");
      button.innerHTML = currQuestion.answers[key];
      button.classList.add("btn");
      ansBtn.appendChild(button);
      correctKey = `${key}_correct`;
      console.log(correctKey);
      button.dataset.correct = currQuestion.correct_answers[correctKey];
      button.addEventListener("click", selectAnswer)
    }
  }

}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(ansBtn.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function resetState() {
  nextBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function showScore(){
  resetState();
  questionElement.innerHTML = `YOUR SCORE IS <span>${score}</span>`;
  nextBtn.innerHTML = "Try Again";
  nextBtn.style.display = "block";
}

function handleNextBtn(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

nextBtn.addEventListener("click", (e) => {
  if(currentQuestionIndex < questions.length){
    handleNextBtn();
  }
  else{
    startQuiz();
  }
})


startQuiz();