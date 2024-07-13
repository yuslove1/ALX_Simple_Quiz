
function checkAnswer(){
    const correctAnswer = "4";
    const userChoice = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');
    let userAnswer = userChoice? userChoice.value : null;

    if (userAnswer === correctAnswer){
      feedback.textContent = "Correct! Well done.";
    }else{
       feedback.textContent = "That's incorrect. Try again!";
    }
}

const btn = document.getElementById('submit-answer');
btn.addEventListener('click', checkAnswer);