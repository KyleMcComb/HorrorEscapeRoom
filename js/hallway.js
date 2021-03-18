var exitDoorClicked = false;
var acidFound = false;
var expanded = false;
var noteFound = false;
var compound1Isvalid = false;
var compound2Isvalid = false;
var compound3IsValid = false;
function onLoad() {

  //
  // if (sessionStorage.getItem('acidFound')) {
  //   acidFound = true;
  //   document.getElementById('windowButton').disabled = true;
  //   document.getElementById('sideRoomButton').disabled = true;
  //
  // }

  var para = document.createElement("p");
  var text = document.createTextNode("[System] You've entered a dark hallway and can see a door at the other end, maybe you should look around for an exit before you are caught and dragged back to your cell");
  para.appendChild(text);
  var element = document.getElementById("gameText");
  element.appendChild(para);
  lineBreak();
}


function windowClick() {

  var para = document.createElement("p");
  var text = document.createTextNode('A small window leading outside, try and escape through the window? y for yes, no for no');
  para.appendChild(text);
  var element = document.getElementById("gameText");
  element.appendChild(para);
  lineBreak();

  document.body.addEventListener("keydown", function(event) {
    if (event.keyCode == 89) {
      var para = document.createElement("p");
      var text = document.createTextNode("[System] You attempt to escape through the window but find that the gap is too small and the drop to far, better keep looking");
      para.appendChild(text);
      var element = document.getElementById("gameText");
      element.appendChild(para);
      lineBreak();
    } else {
      var para = document.createElement("p");
      var text = document.createTextNode("[System] Better keep looking for an escape from the doctor");
      para.appendChild(text);
      var element = document.getElementById("gameText");
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
    var element = document.getElementById("gameText");
    element.appendChild(para);
    lineBreak();


    document.addEventListener('keydown', function(e) {
    //  if (e.keyCode == 89)
        loadMorgue();
    })

  } else {
    var para = document.createElement("p");
    var text = document.createTextNode("[System] A dark hallway that leads somewhere, maybe there is another exit down here? Enter the hallway? y for yes");
    para.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(para);
    lineBreak();

    document.addEventListener('keydown', function(e) {
    //  if (e.keyCode == 89)
          loadMorgue();
    })
  }

}


function loadMorgue() {
//  document.getElementById('chemicalEvent').style.display = 'block';
  var image = document.getElementById('img');
  image.src = 'img/Morgue/Morgue.png';

  document.getElementById('windowButton').style.display = 'none';
  document.getElementById('sideRoomButton').style.display = 'none';
  document.getElementById('exitDoorButton').style.display = 'none';


  document.getElementById('toolButton1').style.display = 'block';
  document.getElementById('noteButton').style.display = 'block';
}

function exitClick() {

  if (acidFound) {

    var para = document.createElement("p");
    var text = document.createTextNode("You pour the acid over the lock on the door, it corrodes it and makes it weak enough for you to pull open. Better get out of here! Press y to leave");
    para.appendChild(text);
    var element = document.getElementById("chemicalEvent");
    element.appendChild(para);
    lineBreakChemical();


    document.addEventListener('keydown', function(e) {
      if (e.keyCode == 89)
        location = 'security.html';
    })

  } else {


    exitDoorClicked = true;
    var para = document.createElement("p");
    var text = document.createTextNode("A exit but it is barred by a locked steel gate, it looks old, i may be able to break the lock with the right tool");
    para.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(para);

    lineBreak();
  }
}


function lineBreak() {
  var lineBreak = document.createElement("br");
  var element = document.getElementById("gameText");
  element.appendChild(lineBreak);

}



function morgueIntro(){

  var para = document.createElement("p");
  var text = document.createTextNode('The hallway lead you to a morgue, this must be where Dr Friedrich disposes of his subjects. Maybe i should look around for anything to help me unlock the gate in the hallway');
  para.appendChild(text);
  var element = document.getElementById("gameText");

}


function chemicalEvent() {
  showSelection();
}

function showSelection() {

  if (noteFound === true) {
    var para = document.createElement("p");
    var text = document.createTextNode('These seem to be the chemicals Dr Friedrich mentioned in his note, each bottle has a letter on it with the word "RIGHT" written on it, strange. I should be able to make something useful to use on the gate in the hallway. Maybe the note I found earlier could help here...');
    para.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(para);
    lineBreak();
    document.getElementById('chemicalEvent').style.display = 'block';


  } else {
    var para = document.createElement("p");
    var text = document.createTextNode('You find a tray of what seems like chemicals, although they are not labeled in any obvious way that you can see, just a letter or number on the front of each bottle and the word "RIGHT", maybe there is a cluse somehwere.');
    para.appendChild(text);
    var element = document.getElementById("gameText");
    element.appendChild(para);
    lineBreak();
  }
}


function checkRadio() {

  if (document.getElementById('H').selected && document.getElementById('M').selected && document.getElementById('six').selected) {
    acidFound = true;
    var para = document.createElement("p");
    var text = document.createTextNode('Success! This seems to have made some acid that is more than corossive enough, i can use it to break down the lock in the hallway! better get going! Hit Y to go back to the Hallway');
    para.appendChild(text);
    var element = document.getElementById("chemicalEvent");
    element.appendChild(para);
    lineBreakChemical();



    document.addEventListener('keydown', function(e) {
    //  if (e.keyCode == 89)
      var image = document.getElementById('img');
      image.src = 'img/Hall/Hallway.png';

      document.getElementById('chemicalEvent').display = 'none';
      document.getElementById('exitDoorButton').style.display = 'block';
      document.getElementById('toolButton1').style.display = 'none';
      document.getElementById('noteButton').style.display = 'none';
    })

  } else {

    var para = document.createElement("p");
    var text = document.createTextNode("This combonation doesn't seem to be what i need, i should try making something to dissolve the lock in the hallway, maybe some acid would do? I should double check the note i found");
    para.appendChild(text);
    var element = document.getElementById("chemicalEvent");
    element.appendChild(para);
    lineBreak();



  }
}

function lineBreak() {
  var lineBreak = document.createElement("br");
  var element = document.getElementById("gameText");
  element.appendChild(lineBreak);
}

function lineBreakChemical() {
  var lineBreak = document.createElement("br");
  var element = document.getElementById("chemicalEvent");
  element.appendChild(lineBreak);
}

function expandNote() {
  noteFound = true;
  document.getElementById("myModalDiv").style.display = "block";
  document.getElementById("expandedNote").src = "img/Morgue/ChemicalNote.jpg";
  document.getElementById("caption").innerHTML = "An old note belongning to Dr Friedrich, he seems to have mentioned some sort of cipher on it";
}

function closeNote() {
  document.getElementById("myModalDiv").style.display = "none";
  document.getElementById("wiresModal").style.display = "none";
}
