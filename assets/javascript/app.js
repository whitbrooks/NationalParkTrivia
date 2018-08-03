// VARIABLES
    
var questionOne = {
    question: "What is the most visited park in the National Park System?",
    optionA: "Yosemite National Park",
    optionB: "Yellowstone National Park",
    optionC: "Zion National Park",
    optionD: "Great Smoky Mountains National Park",
    correctAnswer: 4
};

var questionTwo = {
    question: "What shape is the emblem of the National Park Service?",
    optionA: "Arrowhead",
    optionB: "Diamond",
    optionC: "Log Cabin",
    optionD: "Redwood tree",
    correctAnswer: 1
};

var questionThree = {
    question: "Which of the following exists within the boundaries of a national park?",
    optionA: "The highest point in North America",
    optionB: "The longest cave system in the world",
    optionC: "The deepest lake in the US",
    optionD: "All of the above",
    correctAnswer: 4
};

var questionFour = {
    question: "Yellowstone National Park's geothermal Morning Glory Pool has changed color over the years. What is responsible for the change?",
    optionA: "Bird droppings",
    optionB: "Trash",
    optionC: "Sulfur evaporation",
    optionD: "Climate change",
    correctAnswer: 2
};

var questionFive = {
    question: "Which of the following presidents more than doubled the acreage of the National Park System?",
    optionA: "Calvin Coolidge",
    optionB: "Richard Nixon",
    optionC: "Jimmy Carter",
    optionD: "George H.W. Bush",
    correctAnswer: 3
};

var questionSet = [questionOne, questionTwo, questionThree, questionFour, questionFive];

// declare variables for correct and incorrect answers
var right = 0;
var wrong = 0;

// declare variables for user responses
var response;
var i = 0;

// declare variables for timer
var number = 15;
var intervalId;



// FUNCTIONS


// display question and answers
function display() {
    $("#question").text(questionSet[i].question);   
    $("#one").text(questionSet[i].optionA);   
    $("#two").text(questionSet[i].optionB);   
    $("#three").text(questionSet[i].optionC);   
    $("#four").text(questionSet[i].optionD); 

    };

// set timer
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

// count down timer
function decrement() {
    number--;
    $("#time").html("<div>" + number + "</div>");
    if (number === 0) {
        wrong++;
        alert("Time's up!");
        reset();
    }
}

// stop timer
function stop() {
    clearInterval(intervalId);
  }

// determine if answer selected is correct
function checkAnswer() {
    if (response == questionSet[i].correctAnswer) {
    right++;
    alert("good job!");
    } else {
        wrong++
        alert("oops, wrong answer...");
    }
}

// reset form
function reset() {
    i++;
    console.log(i);
    if (i>4) {
        endQuiz();
    } else {
        response;
        number=15;
        display();
        run();
    }

}


// end quiz and summarize score
function endQuiz() {
    stop();
    $("#message").text("You got " + right + " question(s) right.");

}


// CALL FUNCTIONS
// load html before running script
$(document).ready(function() {

    // start the clock and quiz

    $("#start").click(function(){
        display();
        run();
    });

    
    // store value for user response
    $(".radio").on("change", function() {
        response = ( $(".radio:checked").val() ); 
        checkAnswer();
        $('input[type="radio"]').prop('checked', false); 
        reset();
        if (i>4) {
            endQuiz();
        }
    });          
        
});
