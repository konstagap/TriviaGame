
//create array of objects 
var questions = [
    { question: "Is it hard?", answer: 'Yes', wrong: "No", },
    { question: "Is snow red?", answer: 'No', wrong: "Yes", },
    {
        question: "How many weeks in a month?", answer: '4',
        wrong: "5", wrong2: "14",
    }
]
//we will assign value of this var when user click on radio button
var userChoice;
var userChoice2;
var userChoice3;
//this var made to keep track of user answers
var rightAnswers = 0;
var wrongAnswers = 0;
var noAnswer = 0;
/// Vars for our count down 
var intervalId;
var timeleft = 30;
// we letting our html load before we do any modification with dom
$(document).ready(function () {
    // user click on stat and magic begins
    $("#start").on("click", function () {
        //Submit button pops up on screen
        $(".boxButton").append(submitButton)
        ///TIMER FUNCTION.../////////////////////
        $('.display').html("Seconds left: " + timeleft)
        intervalId = setInterval(count, 1000);
        function count() {
            /// we going to check our var timeleft, -1 every second, show its value on screen every second until its 0! 
            if (timeleft !== 0) {
                timeleft--;
                $('.display').html("Seconds left: " + timeleft)
            } else {
                //if time is up we stop timer and colect stats (function described lower) in submit button section.
                clearInterval(intervalId)
                collectStats(userChoice, 0);
                collectStats(userChoice2, 1);
                ///third question has 3 choices so previous function will give us wrong stats if we run it.
                if (userChoice3 == questions[2].answer) {
                    rightAnswers++;
                } else if ((userChoice3 == questions[2].wrong) || (userChoice3 == questions[2].wrong2)) {
                    wrongAnswers++;
                } else {
                    noAnswer++;
                }
                // we empty screen and showing results, if all right we say U GOT THEM ALL
                $('.boxButton').empty()
                // i should have put this in the function and reuse it again in "else", but I am doing smthing wrong and its not working
                //checking if user got all the right answers to show him WINNER screen
                if ((userChoice == questions[0].answer) && (userChoice2 == questions[1].answer) && (userChoice3 == questions[2].answer)) {
                    var finalScreen = $('<div>')
                    var winner = $("<h1>").text("!!!YOU GOT THEM ALL!!!")
                    finalScreen.append(winner)
                    //adding our stats to "finalScreen" div
                    var stats = $("<div>").html("You have " + rightAnswers + " right answers! " +
                        " You have " + wrongAnswers + " answers! " + " You left " + noAnswer + " with no answer! ")
                    finalScreen.append(stats)
                    //putting our var finalScreen on computer screen.
                    $("#finalscreen").append(finalScreen)
                }
                else {
                    //if user made one mistake he gets loser screen
                    var finalScreen = $('<div>')
                    var loser = $("<h1>").text("!!!TRY AGAIN!!!")
                    finalScreen.append(loser)
                    var stats = $("<div>").html("You have " + rightAnswers + " right answers! " +
                        " You have " + wrongAnswers + " wrong answers! " + " You left " + noAnswer + " with no answer! ")
                    finalScreen.append(stats)
                    //putting our var finalScreen on computer screen.
                    $("#finalscreen").append(finalScreen)
                }

            }
        }

        $(this).hide()
        //QUestion one!
        // putting 1st question on screen, adding class to modify look
        var questionDiv = $('<div>').attr("class", "questionStyle")
        $(".boxButton").append(questionDiv)
        //adding our question and input buttons with some span to modify look and value to get on click and save in var userChoice
        $(questionDiv).html(questions[0].question + '<br>' +
            '<input id="first" type="radio" name="question1" value="Yes"> <span id="answerStyle">Yes</span>    |' +
            ' <span id="answerStyle">No</span>  <input id="first" type="radio" name="question1" value="No">  ')
        //  getin value from radio button on click!
        $("input[id='first']").on("click", function () {
            userChoice = $(this).attr("value")
            console.log(userChoice)

        })
        //QUestion two!
        var questionDiv1 = $('<div>').attr("class", "questionStyle")
        $(".boxButton").append(questionDiv1)
        $(questionDiv1).html(questions[1].question + '<br>' +
            '<input id="second" type="radio" name="question2" value="Yes"> <span id="answerStyle">Yes</span>     |' +
            ' <span id="answerStyle">No</span>  <input id="second" type="radio" name="question2" value="No"> ')
        //  getin value from radio button on click!            
        $("input[id='second']").on("click", function () {
            userChoice2 = $(this).attr("value")
            console.log(userChoice2)
        })
        //Question three!
        var questionDiv2 = $('<div>').attr("class", "questionStyle")
        $(".boxButton").append(questionDiv2)
        $(questionDiv2).html(questions[2].question + '<br>' +
            '<input id="third" type="radio" name="question3" value="4"> <span id="answerStyle">4</span> ' +
            '<input id="third" type="radio" name="question3" value="5"> <span id="answerStyle">5</span> ' +
            '<input id="third" type="radio" name="question3" value="14"><span id="answerStyle">15</span>')
        //  getin value from radio button on click!            
        $("input[id='third']").on("click", function () {
            userChoice3 = $(this).attr("value")
            console.log(userChoice3)
            // console.log("right: "+rightAnswers)
            // console.log("wrong: " + wrongAnswers)
            // console.log("no answer: "+ noAnswer)
        })
    })
    ////////////////////////////SUBMIT BUTTON////////////////////////////////
    //creating submit button,adding text "submit"
    var submitButton = $("<button>").text('Submit')
    //when user click on "submit button"
    $(submitButton).on("click", function () {
        // stop the timer
        clearInterval(intervalId);
        console.log("help")
        //Collect all stats
        collectStats(userChoice, 0);
        collectStats(userChoice2, 1);
        if (userChoice3 == questions[2].answer) {
            rightAnswers++;
        } else if ((userChoice3 == questions[2].wrong) || (userChoice3 == questions[2].wrong2)) {
            wrongAnswers++;
        } else {
            noAnswer++;
        }
        //hide everything that was displayed before
        $('.boxButton').empty()
        //checking if user got all the right answers to show him WINNER screen with stats
        if ((userChoice == questions[0].answer) && (userChoice2 == questions[1].answer) && (userChoice3 == questions[2].answer)) {
            var finalScreen = $('<div>')
            var winner = $("<h1>").text("!!!!!!YOU GOT THEM ALL!!!!!!")
            finalScreen.append(winner)
            var stats = $("<div>").html("You have " + rightAnswers + " right answers! " +
                " You have " + wrongAnswers + " answers! " + " You left " + noAnswer + " with no answer! ")
            finalScreen.append(stats)
            $("#finalscreen").append(finalScreen)
        }
        else {
            // if not then show him Loser Screen wish stats
            var finalScreen = $('<div>')
            var loser = $("<h1>").text("!!!TRY AGAIN!!!!")
            finalScreen.append(loser)
            var stats = $("<div>").html("You have " + rightAnswers + " right answers! " +
                " You have " + wrongAnswers + " wrong answers! " + " You left " + noAnswer + " with no answer! ")
            finalScreen.append(stats)
            $("#finalscreen").append(finalScreen)
        }
    })
    //stats collecting function, it checks input value that we keep in useChoice to question answer that we declared
    //at the begining, if it matches it will add +1 to counters, so we know how many right,wrong,nonswers
    function collectStats(userchoice, i) {
        if (userchoice == questions[i].answer) {
            rightAnswers++;
        }
        else if (userchoice == questions[i].wrong) {
            wrongAnswers++;
        }
        else {
            noAnswer++;
        }
    }
})



