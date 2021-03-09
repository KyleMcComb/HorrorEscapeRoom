
//TIMER BUT ANDREW WAY
var timer=60;
var timedEvent;
var timePassed=0;

window.addEventListener('load', function() { timedEvent = setInterval(countdown, 1000); });


function stopTimer(){
    //used to clear timer.
    clearInterval(myTimer);
}

function countdown(){
    timePassed+=1; //used to calc how long a user has spent in room
    timer--; //takes off 60s

    //halfway mark - displayed to user
    if(timer==30 || (timer>29 && timer<30)){
      document.getElementById('gameText').innerHTML+='<p>[System]: You hear a creek of floor boards, Dr Friedrich is getting closer, better hurry up!</p><br><br>';
      document.getElementById('timer').innerHTML = timer;
      //EDIT LATER? - used to display timer to gametext area
    }else if(timer>0 && timer !=30){
        document.getElementById('timer').innerHTML = timer;
    } else {
      //Stops timer, game over - display end screen
        var winGame = "no";
        sessionStorage.setItem("winGame", winGame);

        //LINK TO NEXT PAGE - TIME UP - END SCREEN
        window.location.href = 'endScreen.html';
    }

}
