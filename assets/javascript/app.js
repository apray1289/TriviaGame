
var timeRemaining = 30;
var intervalID;
var timer;
var numberRight = 0;
var numberWrong = 0;
var questionArray = [
    {
        question: "When did Hacksaw Ridge debut?",
        choices: ["2002", "2016","2012","2006"],
        correctAnswer: "2016"
    },
   {
    question: "Who is the main actor in Pirates Of The Carribean?",
    choices: ["Dr. Oz", "Lebron James","Johnny Depp","Donald Trump"],
    correctAnswer: "Johnny Depp" 
   }
]
var questionNumber = 1;

$(".time-remaining").hide();

$("#start-button").on("click", function () {
    $("#start-button").remove();
    renderQuestion();
    timer = setInterval(countDown, 1000);
    

   
    
    
});

function countDown(){
    timeRemaining --;
    $(".time-remaining").show();
    $(".running-time").text(timeRemaining);
    if (timeRemaining === 0){
        clearInterval(timer);
        // remove question and show  wrong
        $(".question-component").empty();
        $(".answer-component").empty();
        $(".question-component").html("<h2>You Got It Wrong!</h2>");
        questionNumber --;
        numberWrong ++;
        setTimeout(function(){ 
            renderQuestion();
        }, 3000);
        
        // mark the question as incorrect
    }
};

function renderQuestion() {
console.log(questionArray);
if (questionNumber < 0){
    $(".question-component").empty();
   var scoreScreen = $(".question-component").html("<h2>Game Over!</h2>");
    $(".answer-component").append("<h3>Number Correct:" + numberRight + "</h3>");
    $(".wrong-component").append("<h3>Number Wrong: " + numberWrong + "</h3>");
    $(".time-remaining").empty();
}

else {
    timeRemaining = 30;
    countDown();
$(".question-component").html("<h2>" + questionArray[questionNumber].question + "</h2>");
for (var i = 0; i < questionArray[questionNumber].choices.length; i ++){
var questionButton = $("<button>").addClass('answer-button btn-secondary my-4 mx-2').attr("data-name", questionArray[questionNumber].choices[i]).html(questionArray[questionNumber].choices[i]);
$(".answer-component").append(questionButton);

}

}
};

$(document).on("click", ".answer-button",function(event){
console.log("testing button click");
console.log(questionNumber);
var userChoice = $(this).attr("data-name");

console.log(questionArray[questionNumber].correctAnswer);
console.log(userChoice);
if (userChoice == questionArray[questionNumber].correctAnswer){
    $(".question-component").empty();
    $(".answer-component").empty();
    $(".question-component").html("<h2>You Got It Right!</h2>");
    questionNumber --;
    numberRight ++;
    setTimeout(function(){ 
        renderQuestion();
    }, 3000);
    
}

else if (userChoice !== questionArray[questionNumber].correctAnswer){
    $(".question-component").empty();
    $(".answer-component").empty();
    $(".question-component").html("<h2>You Got It Wrong!</h2>");
    questionNumber --;
    numberWrong ++;
    setTimeout(function(){ 
        renderQuestion();
    }, 3000);
   
}

});







// hit start button and it will begin the timer and hide
// the start button as well as render the timer
// display question 1 with answer choices
// on answer choice selection determine right or wrong
// depending on right or wrong render result
// after 3 seconds go to next question
// repeat the process of rendering answer choices and result
// at end show number right and number wrong