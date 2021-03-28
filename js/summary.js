function restart(){

  sessionStorage.setItem("cellTime", 0);
  sessionStorage.setItem("labTime", 0);
  sessionStorage.setItem("hallwayTime", 0);
  sessionStorage.setItem("securityTime", 0);
  sessionStorage.setItem("exitTime", 0);

  sessionStorage.setItem("timeleft", 0);
  window.location.href = 'Start.html';
}

function gameMode(){
  var winGame = sessionStorage.getItem("winGame");
  var roomName = document.getElementById('roomName');
  var traitOutput = document.getElementById('trait');
  sessionStorage.setItem("timePassed", 0);
  var playerName = sessionStorage.getItem("subject");
  var trait = sessionStorage.getItem("traits");

  if(winGame=="win"){
    document.getElementById("doctor").src = "img/EndScreen/Surgeon-Win.jpg";
    roomName.innerHTML = 'You Won!';
    traitOutput.innerHTML = 'Well done ' + playerName + '. You won thanks to your incredible display of ';

    switch(trait) {
      case 'Intelligent':
        traitOutput.innerHTML += "intelligence.";
      break;
      case 'Cautious':
        traitOutput.innerHTML += "cautiousness.";
      break;
      case 'Courageous':
        traitOutput.innerHTML += "courage.";
      break;
      default:
      traitOutput.innerHTML +='wit';
    }

  }else{
    document.getElementById("doctor").src="img/EndScreen/Surgeon-Lose.jpg";
    roomName.innerHTML = 'You Lost! Better luck next time ' + playerName + "!";
  }

  var cellTime = sessionStorage.getItem("cellTime");
  var labTime = sessionStorage.getItem("labTime");
  var hallwayTime = sessionStorage.getItem("hallwayTime");
  var securityTime =   sessionStorage.getItem("securityTime");
  var exitTime = sessionStorage.getItem("exitTime");
  var subjectName = sessionStorage.getItem("subject");

  var tbl = document.getElementById('stats');

  var rows = tbl.rows.length;

  if(cellTime!=0 && cellTime!=null){
    tbl.style.display="block";

    var row = tbl.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Cell Time";
    cell2.innerHTML = cellTime;

    rows = tbl.rows.length;
    if(labTime!=0 && labTime!=null){
      var row = tbl.insertRow(rows);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = "Lab Time";
      cell2.innerHTML = labTime;

      rows = tbl.rows.length;
      if(hallwayTime!=0 && hallwayTime!=null){
        var row = tbl.insertRow(rows);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = "Hallway/Morgue Time";
        cell2.innerHTML = hallwayTime;

        rows = tbl.rows.length;
        if(securityTime!=0 && securityTime!=null){
          var row = tbl.insertRow(rows);
          var cell1 = row.insertCell(0);
          var cell2 = row.insertCell(1);
          cell1.innerHTML = "Security Time";
          cell2.innerHTML = securityTime;
          rows = tbl.rows.length;

          if(exitTime!=0 && exitTime!=null){
            var row = tbl.insertRow(rows);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = "Exit Time";
            cell2.innerHTML = exitTime;
          }else{
            document.getElementById('noTimes').innerHTML="You lost in the Final Room!"
          }
        }else{
          document.getElementById('noTimes').innerHTML="You lost in Security (4th Room)!"
        }
      }else{
        document.getElementById('noTimes').innerHTML="You lost in the Hallway (3rd Room)!"
      }
    }else{
      document.getElementById('noTimes').innerHTML="You lost in the Laboratory (2nd Room)!"
    }
  }else{
    document.getElementById('noTimes').innerHTML="You lost in the Cell (1st Room)!"
  }
}

function playSound() {
  let sound;
  var winGame = sessionStorage.getItem("winGame");
  if(winGame=="win"){
sound = document.getElementById('youWin');
  }else{
    sound = document.getElementById('youLose');
  }

  let play = document.getElementById('play')

  sound.play();
}
