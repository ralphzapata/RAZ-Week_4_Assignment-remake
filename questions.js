

var score = 0;
var currentQuestion = 0;
var questions = [
    {
        title: "Who is the main Character of Solo Levelling Manga?",
        answer: ['Cha Hae-In', "Choi Jong-In", "Sung Jin-Woo", "Baek Yoon-Ho"],
        correct: 2
    },

    {
        title: "What is the rank of the main charcter in the start of the anime series?",
        answer: ['C', "D", "E", "F"],
        correct: 2
    },

    {
        title: "Who is the character with the Nickname Ultimate Soldier?",
        answer: ['Go Gun-Hee', " Yoo Jin-Ho", "Hwang Dong-Su", "Choi Jong-In"],
        correct: 3
    },

    {
        title: "What is the highest Rank in the series",
        answer: ['S', "A", "B", "A+"],
        correct: 0
    },

    {
        title: "What is the special passive skill of the main character",
        answer: ['Fire Power', "Kandiaru’s Blessing", "Vital Strike", "Reanimation"],
        correct: 1
    },
]



//Event Listener

$(document).ready(function(){

$('.start a').click(function(e) {                   // to toggle start quiz button
e.preventDefault();                                
$('.start').hide();
$('.quiz').show();
showQuestion();
   });


$('.quiz ul').on('click', 'li',function() {
$('.selected').removeClass('selected');             // make it clickable and remove once selected
$(this).toggleClass('selected');                    // select the cursor
    });


$('.quiz a').click(function(e) {
e.preventDefault();                                 // e.preventDefault - will prevent the default action
   
    if($('li.selected').length) {                   // if else condition to alert player that they didnt provided an answer and click submit answer
    
    var playersAnswer = parseInt($('li.selected').attr('id'));          // ParseInt - to make integer
    console.log(playersAnswer);
    
    checkAnswer(playersAnswer)

    } else {
    alert('No answer was selected, Please provide your answer first!!')
    }
    });

    $('.summary a').click(function(e){                       
    e.preventDefault();     
    restartQuiz();
    });
});




// Functions
function showQuestion(){
var question = questions[currentQuestion];
$('.quiz h2').text(question.title); 
$('.quiz ul').html('');
for(var i=0; i<question.answer.length; i++)                // append the question on HTML

    {
    $('.quiz ul').append(`<li id="${i}">${question.answer[i]} </li>`);   // append the question choices in HTML
    }
}



function checkAnswer(playersAnswer){
    var question = questions[currentQuestion]; 
    if(question.correct === playersAnswer) {
    score++;
    }

    currentQuestion++;                                    // to show the next question
    if(currentQuestion>= questions.length) {
    showSummary();                                        // if else to navigate all Questions
    } else {
    showQuestion();
    }
}


function showSummary(){
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("Congratulation you scored "+score+" out of "+questions.length+" correct!");
}

function restartQuiz() {
$('.summary').hide();
$('.quiz').show();
score = 0;
currentQuestion = 0;
showQuestion();
}



var timeAl = document.querySelector(".TimeLeft");


var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeAl.textContent = secondsLeft + " seconds left Game";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Please choose an answer");
    } 

  }, 1250);
}
    setTime();


    