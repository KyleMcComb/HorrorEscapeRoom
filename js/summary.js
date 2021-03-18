function restart(){
  sessionStorage.clear();
}

function gameMode(){
  var winGame = sessionStorage.getItem("winGame");

  if(winGame=="win"){
    document.getElementById("doctor").src = "img/EndScreen/Surgeon-Win.jpg";

    var gameText = document.getElementById('roomTimes');

    var cellTime = sessionStorage.getItem("cellTime");
    gameText.innerHTML = '<li>Time in Cell Room: ' +cellTime + ' seconds</li>';
    var labTime = sessionStorage.getItem("labTime");
    gameText.innerHTML += '<li>Time in Laboratory Room: ' +labTime + ' seconds</li>';
    var hallwayTime = sessionStorage.getItem("hallwayTime");
    gameText.innerHTML += '<li>Time in Hallway Room: ' +hallwayTime + ' seconds</li>';
    var securityTime =   sessionStorage.getItem("securityTime");
    gameText.innerHTML += '<li>Time in Security Room: ' +securityTime + ' seconds</li>';
    var exitTime = sessionStorage.getItem("exitTime");
    gameText.innerHTML += '<li>Time in Final Room: ' +exitTime + ' seconds</li>';

  }else{
    document.getElementById("doctor").src="img/EndScreen/Surgeon-Lose.jpg";
  }
}
