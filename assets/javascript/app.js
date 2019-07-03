
                                        
                                        
    //  TIMER JS                                   
                                        var counter = 0;
                                        var timeRemain = 60
                                        
                                        function setup() {
                                            noCanvas();

                                            var timer = select("#timer");
                                            timer.html(timeRemain - counter);

                                            function timeIt() {
                                                counter++;
                                                timer.html(counter);

                                            }

                                            setInterval(timeIt, 1000);
    }
    

    // unable to get the check function to work
        
    
    function check(){
            
 
            var question1 = value;
            
            var question2 = value;
            var question3 = value;
            var question4 = value;
            var question5 = value;
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


                
            document.getElementById("afterSubmit").style.visibility = "visible";
            
            document.getElementById("numberCorrect").innerHTML = "You Got " + correct + "Correct!";

        }


