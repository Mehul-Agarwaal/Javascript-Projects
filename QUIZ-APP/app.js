const questions = [
    {
        question:"Which is the largest animal in World?",
        answers:[
            {text:"Shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
        ]
    },

    {
        question:"Which is the smallest continent in World?",
        answers:[
            {text:"Asia", correct:true},
            {text:"Australia", correct:false},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},
        ]
    },

    {
        question:"Which is the largest desert in World?",
        answers:[
            {text:"Thar", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antartica", correct:true},
        ]
    },

    {
        question:"Which is the smallest country in World?",
        answers:[
            {text:"Vatican City", correct:true},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"Sri Lanks", correct:false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTMl = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
    }
else
    selectedBtn.classList.add("incorrect");

Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});

nextButton.style.display = "block";

}

nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButtton();
    }else{
        startQuiz();
    }

});

function handleNextButtton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
};

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} `;
    nextButton.innerHTML="Play Again";
    nextButton.style.display= "block";
}
startQuiz();