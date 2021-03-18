var exitDoorClicked = false;
var acidFound = false;

function onLoad() {
  let ambienceAudio = getElementById('ambienceAudio');

  ambienceAudio.play();

  if (sessionStorage.getItem('acidFound')) {
    acidFound = true;
    document.getElementById('windowButton').disabled = true;
    document.getElementById('sideRoomButton').disabled = true;

  }

  var para = document.createElement("p");
  var text = document.createTextNode("[System] You've entered a dark hallway and can see a door at the other end, maybe you should look around for an exit before you are caught and dragged back to your cell");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);
  lineBreak();
}


function windowClick() {

  var para = document.createElement("p");
  var text = document.createTextNode('A small window leading outside, try and escape through the window? y for yes, no for no');
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);
  lineBreak();

  document.body.addEventListener("keydown", function(event) {
    if (event.keyCode == 89) {
      var para = document.createElement("p");
      var text = document.createTextNode("[System] You attempt to escape through the window but find that the gap is too small and the drop to far, better keep looking");
      para.appendChild(text);
      var element = document.getElementById("col-left");
      element.appendChild(para);
      lineBreak();
    } else {
      var para = document.createElement("p");
      var text = document.createTextNode("[System] Better keep looking for an escape from the doctor");
      para.appendChild(text);
      var element = document.getElementById("col-left");
      element.appendChild(para);

      lineBreak();

    }
  });
  lineBreak();
}

function sideRoomClick() {

  if (exitDoorClicked === true) {

    var para = document.createElement("p");
    var text = document.createTextNode("[System] A dark hallway that leads somewhere, there may be another exit down there, or a tool to break the lock on the steel door I found earlier. Enter the hallway? y for yes");
    para.appendChild(text);
    var element = document.getElementById("col-left");
    element.appendChild(para);
    lineBreak();


    document.addEventListener('keydown', function(e) {
      if (e.keyCode == 89)
        location = 'morgue.html';
    })

  } else {
    var para = document.createElement("p");
    var text = document.createTextNode("[System] A dark hallway that leads somewhere, maybe there is another exit down here? Enter the hallway? y for yes");
    para.appendChild(text);
    var element = document.getElementById("col-left");
    element.appendChild(para);
    lineBreak();

    document.addEventListener('keydown', function(e) {
      if (e.keyCode == 89)
        location = 'morgue.html';
    })
  }

}

function exitClick() {


  if (acidFound) {

    var para = document.createElement("p");
    var text = document.createTextNode("You pour the acid over the lock on the door, it corrodes it and makes it weak enough for you to pull open. Better get out of here! Press y to leave");
    para.appendChild(text);
    var element = document.getElementById("col-left");
    element.appendChild(para);
    lineBreak();


    document.addEventListener('keydown', function(e) {
      if (e.keyCode == 89)
        location = 'security.html';
    })

  } else {


    exitDoorClicked = true;
    var para = document.createElement("p");
    var text = document.createTextNode("A exit but it is barred by a locked steel gate, it looks old, i may be able to break the lock with the right tool");
    para.appendChild(text);
    var element = document.getElementById("col-left");
    element.appendChild(para);

    lineBreak();
  }
}


function lineBreak() {
  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);

}
