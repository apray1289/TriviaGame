
var timeRemaining = 30;
var questionNumber = 0;
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
    question: "Who is the main actor in Pirates Of The Carribean",
    choices: ["Dr. Oz", "Lebron James","Johnny Depp","Donald Trump"],
    correctAnswer: "Johnny Depp" 
   }
]

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
        // remove question and show you're right or wrong
    }
};

function renderQuestion() {
$(".question-component").html("<p>" + questionArray[questionNumber].question + "</p>");
for (var i = 0; i < questionArray[questionNumber].choices.length; i ++){
var questionButton = $("<button class='answer-button' data-name= "+ questionArray[questionNumber].choices[i] +">").html(questionArray[questionNumber].choices[i]);
$(".question-component").append(questionButton);


}
// $(".question-component").empty();
// $(".question-component").html("<h2>Game Over!</h2>");
// $(".question-component").html("<h2>Game Over!</h2>");

}

$(document).on("click", ".answer-button",function(event){
console.log("testing button click");
var userChoice = $(this).attr("data-name");

if (userChoice === questionArray[questionNumber].correctAnswer){
    $(".question-component").empty();
    $(".question-component").html("<h2>You Got It Right!</h2>");
    questionNumber ++;
    numberRight ++;
    setTimeout(function(){ 
        renderQuestion();
    }, 3000);
}

else if (userChoice !== questionArray[questionNumber].correctAnswer){
    $(".question-component").empty();
    $(".question-component").html("<h2>You Got It Wrong!</h2>");
    questionNumber ++;
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