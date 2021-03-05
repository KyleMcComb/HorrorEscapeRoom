function changeText(){
  var element = document.getElementById("change");
  element.innerHTML="EXIT ROOM";
}

var code;

function displayCode(){
  var txt;
  var startTime = new Date();

  code = prompt("Enter the code to escape!: ");

  var endTime = new Date();
  var timeSpent = endTime-startTime;
  duration-=timeSpent;


  if(duration<=0){
    window.location.href = 'endScreen.html';   //END SCREEN - YOU LOSE (time out)
    var winGame = "no";
    sessionStorage.setItem("winGame", winGame);
  } else{
    if (code == null || code == "") {
      txt = "User cancelled the prompt.";
    } else if(code=="420" && hasBlueKey==true){
      var winGame = "yes";
      sessionStorage.setItem("winGame", winGame);
      window.location.href = 'endScreen.html';
    } else {
      txt = "<p>That code is incorrect</p>";
    }
  }
  document.getElementById("gameText").innerHTML = txt + ' ' + timeSpent;

  }

    var myTimer2;
    var timePassed=0;
    var myTimer;
    var duration =(10*1000);

    function startTimer(){
      myTimer = setInterval('countdown()',1000);
      timePassed+=1000;
      //myTimer2  = setTimeout('countdown()',5000);
    }

    function stopTimer(){
        clearInterval(myTimer2);
    }

    function countdown(){
        timePassed+=1000;
        duration-=1000;

        if(duration==5000){
          document.getElementById('gameText').innerHTML='<p>5 seconds left</p>';

        }
        if(duration>=0){
            document.getElementById('timer').innerHTML = duration;
        } else{
            stopTimer();
            document.getElementById('gameText').innerHTML='<p>Stop Game!</p>';
        }
    }

    var hasBlueKey = false;

    function keyFound(keyType){
      window.open('img/Exit/goldKey.png');

      var x;
      switch(keyType){
        case 'gold':
          x = document.getElementById("goldKey");
          break;
        case 'blue':
          x = document.getElementById("blueKey");
          hasBlueKey = true;
          break;
        case 'purple':
          x = document.getElementById("purpleKey");
          break;
        default:
          break;
      }
      x.style.display = "none";

    }
