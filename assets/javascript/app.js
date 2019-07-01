// // create mulitple choice questions(should be an array)
// // record score.


// var questions = [why did the chicken cross the road?];

// var score = 0;

// for(var i=0; i< questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response == questions[i].answer){
//         score++;
//         alert("correct")
//     }
//     else{
//         alert("WRONG");
//     }
// }

function check(){
    // alert("FINISHED");


            var question1 = document.trivia.question1.value;
            var question2 = document.trivia.question2.value;
            var question3 = document.trivia.question3.value;
            var question4 = document.trivia.question4.value;
            var question5 = document.trivia.question5.value;
            var correct = 0;

            if (question1 == "Philadelphia"){
                correct++;
            }
            if(question2 == "His Mother"){
                correct++;
            }
            if(question3 == "Bel-Air"){
                correct++;
            }
            if(question4 == "Jazz"){
                correct++;
            }
            if(question5 == "Cousin Carlton"){
                correct++;
            }


    // document.getElementById("afterSubmit").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = "You Got " + correct + "Correct!";

}


