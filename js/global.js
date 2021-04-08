//TIMER
var timer;
var timedEvent;
var timePassed = 0;
timer = 60 + Number(sessionStorage.getItem("timeleft"));
var playerName = sessionStorage.getItem("subject");

window.addEventListener('load', function() {
  if (!(document.URL.includes("start.html")) && !(document.URL.includes("summary.html"))) {
    timedEvent = setInterval(countdown, 1000);
  }
});

function stopTimer() {
  //used to clear timer.
  clearInterval(timedEvent);
}

function countdown() {
  timePassed += 1; //used to calc how long a user has spent in room
  timer--; //takes off 60s

  //halfway mark - displayed to user
  if (timer == 30 || (timer > 29 && timer < 30)) {
    document.getElementById('gameText').innerHTML += '<p>[System]: You hear a creek of floor boards, Dr Friedrich is getting closer, better hurry up!</p><br><br>';
    document.getElementById('timer').innerHTML = timer;
    //EDIT LATER? - used to display timer to gametext area
  } else if (timer > 0 && timer != 30) {
    document.getElementById('timer').innerHTML = timer;
  } else {
    //Stops timer, game over - display end screen
    var winGame = "no";
    stopTimer();
    sessionStorage.setItem("winGame", winGame);

    //LINK TO NEXT PAGE - TIME UP - END SCREEN
    window.location.href = 'summary.html';
  }
}

// code to toggle colors depending on color theme selected
function toggleColours() {
  var wrapper = document.getElementById('wrapper');
  var roomName = document.getElementById('roomName');
  var colLeft = document.getElementById('col-left');
  var headBorder = document.getElementById('head');
  var colLeftBorder = document.getElementById('col-left');
  var gameName = document.getElementById('gameName');



  //decides what color the background is
  if (wrapper.style.backgroundColor === 'white') {

    wrapper.style.backgroundColor = '#1A1A1D';
  } else {
    wrapper.style.backgroundColor = 'white';
  }

  //decides the color of the elements changed when toggle is clicked
  if (roomName.style.color === 'black') {
    roomName.style.color = 'white';
    colLeft.style.color = 'white';
    headBorder.style.borderColor = '#6f2232';
    colLeftBorder.style.borderColor = '#6f2232';
    document.getElementById("redactID").classList.toggle("redact-black");
    gameName.style.color = '#C3073F';
  } else {
    roomName.style.color = 'black';
    colLeft.style.color = 'black';
    headBorder.style.borderColor = 'black';
    colLeftBorder.style.borderColor = 'black';
    document.getElementById("redactID").classList.toggle("redact-black");
    gameName.style.color = 'black';
  }

  // //decides the color of the text in the left col
  // if (colLeft.style.color === 'black') {
  //   colLeft.style.color = 'white';
  // } else {
  //   colLeft.style.color = 'black';
  // }
  // //decides the color of headers border
  // if (headBorder.style.borderColor === 'black') {
  //   headBorder.style.borderColor = '#6f2232';
  //
  // } else {
  //   headBorder.style.borderColor = 'black';
  // }
  //
  // //decides the color of left cols border
  // if (colLeftBorder.style.borderColor === 'black') {
  //   colLeftBorder.style.borderColor = '#6f2232';
  // } else {
  //   colLeftBorder.style.borderColor = 'black';
  // }

  //decides the color of redaction box in the title and the color of the title text
  // if (gameName.style.color === 'black') {
  //   document.getElementById("redactID").classList.toggle("redact-black");
  //   gameName.style.color = '#C3073F';
  // } else {
  //   document.getElementById("redactID").classList.toggle("redact-black");
  //   gameName.style.color = 'black';
  // }

}
