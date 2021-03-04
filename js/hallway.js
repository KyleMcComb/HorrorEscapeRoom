var exitDoorClicked = false;

function onLoad() {
  var para = document.createElement("p");
  var text = document.createTextNode("[System] You've entered a dark hallway and can see a door at the other end, maybe you should look around for an exit before you are caught and dragged back to your cell");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);



  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function windowClick() {

  var para = document.createElement("p");
  var text = document.createTextNode("[System] A barred window leading to the outside, it was far to small to squeeze though, better keep looking!");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}



function sideRoomClick() {

if(exitDoorClicked === true){

  var para = document.createElement("p");
  var text = document.createTextNode("[System] A dark hallway that leads somewhere, there may be another exit down there, or a tool to break the lock on the steel door I found earlier");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);

}
else{

  var para = document.createElement("p");
  var text = document.createTextNode("[System] A dark hallway that leads somewhere, maybe there is another exit down here?");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

}

function exitClick() {

  exitDoorClicked = true;
  var para = document.createElement("p");
  var text = document.createTextNode("[System] A exit but it is barred by a locked steel gate, it looks old, i may be able to break the lock with the right tool");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}
