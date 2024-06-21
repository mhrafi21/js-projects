const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c",
  },
  {
    question: "Who is the President of the United States?",
    a: "Donald Trump",
    b: "Joe Biden",
    c: "Barack Obama",
    d: "George Bush",
    correct: "b",
  },
  {
    question: "What is 2 + 2?",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "b",
  },
  {
    question: "What is the capital of Japan?",
    a: "Beijing",
    b: "Seoul",
    c: "Tokyo",
    d: "Bangkok",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const timer = document.getElementById("time");
const notSelect = document.getElementById("notSelectError");
const currentQ = document.getElementById("current");
const totalQuiz = document.getElementById("total")

let currentQuiz = 0;

let score = 0;

loadQuiz();
QuizCount();
startTimer();

console.log(currentQuiz);

function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function QuizCount() {
    totalQuiz.innerText = quizData.length;
    currentQ.innerText = currentQuiz + 1;
}

function deselectAnswer() {
  answerEls.forEach((ansEl) => (ansEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((ansEl) => {
    if (ansEl.checked) {
      answer = ansEl.id;
      enableSubmitButton();
      notSelect.innerText = "";
    }
  });
  return answer;
}

function startTimer() {
  const timerInterval = setInterval(() => {
    timeLeft--;
    timer.innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      disableSubmitButton();
      submitBtn.click();
      return (notSelect.innerText = "Time is over!");
    }
  }, 1000);

}

function disableSubmitButton() {
    submitBtn.disabled = true;
    submitBtn.style.cursor= "not-allowed"
    submitBtn.style.backgroundColor = '#cccccc'; 
}

function enableSubmitButton() {
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = '#4CAF50'; 
}

function QuizCount() {
    currentQ.innerText = currentQuiz;
    totalQuiz.innerText = quizData.length;
}



submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (!answer) {
    return (notSelect.innerText = "Please Select One of them");
  } else {
    notSelect.innerText = "";
    
  }
  if (answer === quizData[currentQuiz].correct) {
    score++;
  }
  currentQuiz++;
  timeLeft = 10;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>Your answered Score ${score} out of ${quizData.length}</h2>
    <button onclick="location.reload()">Reload</button>
    `;
  }
});

