
//create array of objects {q:---, choice..., a:---}
var questions = [
    { question: "is it hard?", answer: 'Yes', },
    { question: "is snow red?", answer: 'No',},
    { question: "how many weeks in a month?", answer: '4', }
    
]
//we will assign value of this var when user click on radio button
var userChoice;
// '<input type="radio" name="question1" value="yes">
var userChoice2
var userChoice3
// we letting our html load before we do any modification with dom
$(document).ready(function () {

    $("#start").on("click", function () {
        $(this).remove()

        //QUestion one!
        var questionDiv = $('<div>')
        $(".boxButton").append(questionDiv)
        $(questionDiv).html(questions[0].question + '<br>' +
            '<input id="first" type="radio" name="question1" value="Yes"> Yes' +
            '<input id="first" type="radio" name="question1" value="No"> No')

        $("input[id='first']").on("click", function () {
            // when we capture user choice we can get value from radio button.
            userChoice = $(this).attr("value")
            console.log(userChoice)
            // - IF COMPUTER ANSWER AND USER ANSWER MATCH THEN SHOW "ITS CORRECT" 
            if (userChoice == questions[0].answer) {
                console.log("you are right")
            } else {
                console.log("you are wrong")
            }
        })
        //QUestion two!
        var questionDiv1 = $('<div>')
        $(".boxButton").append(questionDiv1)
        $(questionDiv1).html(questions[1].question + '<br>' +
            '<input id="second" type="radio" name="question1" value="Yes"> Yes' +
            '<input id="second" type="radio" name="question1" value="No"> No')
        $("input[id='second']").on("click", function () {
            // when we capture user choice we can get value from radio button.
            userChoice2 = $(this).attr("value")
            console.log(userChoice2)
            // - IF COMPUTER ANSWER AND USER ANSWER MATCH THEN SHOW "ITS CORRECT" 
            if (userChoice2 == questions[1].answer) {
                console.log("you are right")
            } else {
                console.log("you are wrong")
            }
        })
        //Question three!
        var questionDiv2 = $('<div>')
        $(".boxButton").append(questionDiv2)
        $(questionDiv2).html(questions[2].question + '<br>' +
            '<input id="third" type="radio" name="question1" value="4"> 4' +
            '<input id="third" type="radio" name="question1" value="5"> 5' +
            '<input id="third" type="radio" name="question1" value="14"> 15')
        $("input[id='third']").on("click", function () {
            // when we capture user choice we can get value from radio button.
            userChoice3 = $(this).attr("value")
            console.log(userChoice3)
            // - IF COMPUTER ANSWER AND USER ANSWER MATCH THEN SHOW "ITS CORRECT" 
            if (userChoice3 == questions[2].answer) {
                console.log("you are right")
            } else {
                console.log("you are wrong")
            }
        })

    })

})
//        //SECOND QUESTION!
//        var questionDiv2 = $('<div>')
//         $(".boxButton").append(questionDiv2)
//         //target html element and replace it with new html element that shows our questions 
//         // and radio buttons
//         $(questionDiv2).html(questions[1].q +'<br>'+
//         '<input id="button2" type="radio" name="question2" value="bad"> Bad '+
//         '<input id="button2" type="radio" name="question2" value="good"> Good '+
//         '<input id="button2" type="radio" name="question2" value="bad"> Bad '
//        )
//        $("input").on("click", function(){
//            // when we capture user choice we can get value from radio button.
//            userChoice = $(this).attr("value") 
//            console.log(userChoice)
//            // - IF COMPUTER ANSWER AND USER ANSWER MATCH THEN SHOW "ITS CORRECT" 
//            if (userChoice == questions[1].a) {
//                console.log ("you are right")
//            } else {
//                console.log ("you are wrong")
//            }

    // <!-- WHEN START CLICKED:
    //     1. HTML SHOWS QUESTION AND RADIO BUTTON TO ANSWER
    //         - HTML CHANGES WITH LIST OF QUESTIONS
    //                      -create 3 input radio, give them value


    //         - RADIO BUTTON FOR USER INTERACTION
    //         - IF COMPUTER ANSWER AND USER ANSWER MATCH THEN SHOW "ITS CORRECT" 
    //             ELSE - ITS WRONG!
//     2.TIMER COUNTS DOWN 120 SECS
//         SET TIMEOUT FUNCTION TO CHANGE HTML IN 120 SECS.
//             WHEN FUNCTION RUNS IT SHOULD CHECK IF USER GUESS MATCHES COMPUTER,
//              SHOW HTLM WITH QUESTIONS AND BELOW THEM STATEMENTS "RIGHT" "WRONG"
//              SHOW STATEMENT THAT TIME RUN OUT.
//              CLEARTIMEOUT.
//              RESTART BUTTON POPS OUT
//     3.IF "DONE" CLICKED GAMES STOPS
//         CLEARTIMEOUT, RUN FUNCTION CHECK IF USER GUESS MATCHES COMPUTER,
//              SHOW HTLM WITH QUESTIONS AND BELOW THEM STATEMENTS "RIGHT" "WRONG"
//              SHOW STATEMENT LETS SEE YOUR RESULT.
//              RESTART BUTTON POPS OUT
//     4.PRESS RESTART