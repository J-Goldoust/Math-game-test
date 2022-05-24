//variables

let playing = false
let score = 0
let time = 60
let correctAnswer
let wrongAnswer



//hide and show functions

function hide(id) {
    document.getElementById(id).style.display = "none"
}

function show(id) {
    document.getElementById(id).style.display = "block"
}



// start button function

function startGame() {
    if (playing === true || time === 0) {
        location.reload()
    } else {
        playing = true
        
        //set the score
        
         score = 0 
        document.getElementById("score-value").innerHTML = score
        
        //change the button to restart
        
        document.getElementById("start").innerHTML = "Restart"
       
        //start the count down
        
        countDown()
        
        //create new question and new answers
        
        createQuestion()
    }
}



//time countdown function

function countDown() {
    
            //start the timer
    
    const timer = setInterval(function(){
        time -= 1
        document.getElementById("time-remaining").innerHTML = time
         if (time == 0){
             
             //stop the timer and show the final score
             
             clearInterval(timer)
             show("end-game")
             document.getElementById("result").innerHTML = score 
             playing = false
         }
    }, 1000)
}



//create new question function

function createQuestion() {
    let x = Math.floor(Math.random() * 11)
    let y = Math.floor(Math.random() * 11)
    
    correctAnswer = x * y
    
    document.getElementById("question-box").innerHTML = x + "x" + y
    
    //create the correct answer 
    
    let correctBox = Math.floor(Math.random() * 4) + 1 
    document.getElementById("box-" + correctBox).innerHTML = correctAnswer
    
    //create non-repetitive wrong answers
    
    let answers = [correctAnswer]
    
    for(let i = 1; 1 < 5; i++) {
        if(i != correctBox) {   
            do {
                wrongAnswer = Math.floor(Math.random() * 11) * Math.floor(Math.random() * 11)
            } while (answers.indexOf(wrongAnswer) > -1)
                
            document.getElementById("box-" + i).innerHTML = wrongAnswer 
            
            answers.push(wrongAnswer)
       }
     }
  } 



//selecting the answer function

function select(id) {
        if (playing == true) {
            
            //if click on the correct answer
            
            if(document.getElementById(id).innerHTML == correctAnswer) {
                
            score++
            document.getElementById("score-value").innerHTML = score
            show("correct")
            setTimeout(() => {
            hide("correct")        
            }, 1000)
                
            createQuestion()
                
            //if click on the wrong answer
            
        } else {
            
        show("wrong")
        setTimeout(() => {
            hide("wrong")        
        }, 1000)
    }
  } 
}
