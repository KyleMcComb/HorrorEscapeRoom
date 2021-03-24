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
  sessionStorage.setItem("timePassed", 0);

  if(winGame=="win"){
    document.getElementById("doctor").src = "img/EndScreen/Surgeon-Win.jpg";
    roomName.innerHTML = 'You Won!';
  }else{
    document.getElementById("doctor").src="img/EndScreen/Surgeon-Lose.jpg";
      roomName.innerHTML = 'You Lost!';
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
    var row = tbl.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Cell Time";
    cell2.innerHTML = cellTime;
  }
  rows = tbl.rows.length;
  if(labTime!=0 && labTime!=null){
    var row = tbl.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Lab Time";
    cell2.innerHTML = labTime;
  }
  rows = tbl.rows.length;
  if(hallwayTime!=0 && hallwayTime!=null){
    var row = tbl.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Hallway/Morgue Time";
    cell2.innerHTML = hallwayTime;
  }
  rows = tbl.rows.length;
  if(securityTime!=0 && securityTime!=null){
    var row = tbl.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Security Time";
    cell2.innerHTML = securityTime;
  }
  rows = tbl.rows.length;
  if(exitTime!=0 && exitTime!=null){
    var row = tbl.insertRow(rows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Exit Time";
    cell2.innerHTML = exitTime;
  }
}
