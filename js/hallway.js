var exitDoorClicked = false;
var acidFound = false;
var expanded = false;
var noteFound = false;
var compound1Isvalid = false;
var compound2Isvalid = false;
var compound3IsValid = false;




// runs on page load, prints text to the game text div
function onLoad() {
  var para = document.createElement("p");
  var text = document.createTextNode("[System] You've entered a dark hallway and can see a door at the other end, maybe you should look around for an exit before you are caught and dragged back to your cell " + playerName + "!");
  para.appendChild(text);
  var element = document.getElementById("gameDialog");
  element.appendChild(para);
  lineBreak();
}



// runs whne the window in the hallway is clicked
function windowClick() {

  var windowClick = new Audio('audio/Hallway/window.mp3');
  windowClick.play();
  var para = document.createElement("p");
  var text = document.createTextNode("[System] You attempt to escape through the window and shake the bars loose but find that the gap is too small and the drop to far, better keep looking");
  para.appendChild(text);
  var element = document.getElementById("gameDialog");
  element.appendChild(para);
  document.getElementById('windowButton').style.display = 'none';
  lineBreak();
}



// runs when the side room leading to the morgue is clicked
function sideRoomClick() {

  // if the exit door has already been interacted with run this
  if (exitDoorClicked === true) {
    var para = document.createElement("p");
    var text = document.createTextNode("[System] A dark hallway that leads somewhere, there may be another exit down here " + playerName + "?" + ", or a tool to break the lock on the steel door you found earlier. Enter the hallway? y for yes");
    para.appendChild(text);
    var element = document.getElementById("gameDialog");
    element.appendChild(para);
    lineBreak();

    // listener for user to key press and enter morgue
    document.addEventListener('keydown', function(e) {
      //  if (e.keyCode == 89)
      loadMorgue();
      morgueIntro();
    }, {
      once: true
    })

  }
  // else run this if exit door has not been interacted with
  else {
    var para = document.createElement("p");
    var text = document.createTextNode("[System] A dark hallway that leads somewhere, maybe there you could find another exit down here " + playerName + "?" + " Enter the hallway? y for yes");
    para.appendChild(text);
    var element = document.getElementById("gameDialog");
    element.appendChild(para);
    lineBreak();

    document.addEventListener('keydown', function(e) {
      //  if (e.keyCode == 89)
      loadMorgue();
      morgueIntro();
    }, {
      once: true
    })

  }
}

// method called when the user clicks on the side door and loads morgue
function loadMorgue() {
  // chnages image to morgue
  var image = document.getElementById('img');
  image.src = 'img/Hall/Morgue.png';
  // changes room name
  document.getElementById('roomName').innerHTML = 'Morgue';

  // disables hallway buttons
  document.getElementById('windowButton').style.display = 'none';
  document.getElementById('sideRoomButton').style.display = 'none';
  document.getElementById('exitDoorButton').style.display = 'none';

  // enables morgue buttons
  document.getElementById('chemicalButton').style.display = 'block';
  document.getElementById('noteButton').style.display = 'block';
}


// runs whent he exit door in hallway is clicked
function exitClick() {
  // if the acid has been found in morgue run this
  if (acidFound) {

    // print some text
    var para = document.createElement("p");
    var text = document.createTextNode("[System] You pour the acid over the lock on the door, it corrodes it and makes it weak enough for you to pull open." + "well done " + playerName + ", Better get out of here! Press y to leave");
    para.appendChild(text);
    var element = document.getElementById("chemicalEvent");
    element.appendChild(para);
    lineBreakChemical();

    // create acidLock audio object and play it
    var acidLock = new Audio('audio/Hallway/acidLock.mp3');
    acidLock.play();

    // ask for user input using listener and load next room
    document.addEventListener('keydown', function(e) {
      if (e.keyCode == 89)
      // create gateOpening audio object and play it
      var gateOpening = new Audio('audio/Hallway/gateOpening.wav');
      gateOpening.play();
        if (timePassed > 60) {
          sessionStorage.setItem("timeleft", 0);
        } else {
          sessionStorage.setItem("timeleft", 60 - timePassed);
        }
      sessionStorage.setItem("hallwayTime", timePassed);
      setTimeout(function(){
      location = 'security.html';

    }, 1000);



    })

  } else {

    var gateLocked = new Audio('audio/Hallway/gateLocked.mp3');
    gateLocked.play();

    // if acid has not been gotten print some text
    exitDoorClicked = true;
    var para = document.createElement("p");
    var text = document.createTextNode("A exit but it is barred by a locked steel gate, it looks old, i may be able to break the lock with the right tool");
    para.appendChild(text);
    var element = document.getElementById("gameDialog");
    element.appendChild(para);
    lineBreak();
  }
}






// prints morgue intro text when morgue loads
function morgueIntro() {
  morgueIntro= function(){};
  var para = document.createElement("p");
  var text = document.createTextNode('[System]The hallway lead you to a morgue, this must be where Dr Friedrich disposes of his subjects. Maybe you should look around ' + playerName + ', for anything to help me unlock the gate in the hallway');
  para.appendChild(text);
  var element = document.getElementById("gameDialog");
  element.appendChild(para);
  lineBreak();
}


// function chemicalEvent() {
//   showSelection();
// }

function showSelection() {

  if (noteFound === true) {

    var chemicals = new Audio('audio/Hallway/chemicalFindNoNote.mp3');
    chemicals.play();
    var para = document.createElement("p");
    var text = document.createTextNode('These seem to be the chemicals Dr Friedrich mentioned in his note, each bottle has a letter on it with the word "RIGHT" written on it, strange. I should be able to make something useful to use on the gate in the hallway. Maybe the note I found earlier could help here...');
    para.appendChild(text);
    var element = document.getElementById("gameDialog");
    element.appendChild(para);
    lineBreak();
    document.getElementById('chemicalEvent').style.display = 'block';


  } else {
    var chemicals = new Audio('audio/Hallway/chemicalFindNoNote.mp3');
    chemicals.play();
    var para = document.createElement("p");
    var text = document.createTextNode('You find a tray of what seems like chemicals, although they are not labeled in any obvious way that you can see, just a letter or number on the front of each bottle and the word "RIGHT", maybe there is a clues somehwere.');
    para.appendChild(text);
    var element = document.getElementById("gameDialog");
    element.appendChild(para);
    lineBreak();
  }
}

// checks if the chemical compunds chosen by the player are correct when they hit the submit button
function checkSelections() {

  // if the selection is correct print Success and run code to go back to hallway
  if (document.getElementById('H').selected && document.getElementById('M').selected && document.getElementById('six').selected) {

    // create acidAudio audio object and play it
    var acidAudio = new Audio('audio/Hallway/acidSuccess.wav');
    acidAudio.play();

    acidFound = true;
    var para = document.createElement("p");
    var text = document.createTextNode('[System] Success! This seems to have made some acid that is more than corossive enough, you can use it to break down the lock in the hallway ' + playerName + '! Better get going! Hit Y to go back to the Hallway');
    para.appendChild(text);
    var element = document.getElementById("chemicalEvent");
    element.appendChild(para);

    lineBreakChemical();

    document.addEventListener('keydown', function(e) {
      //  if (e.keyCode == 89)
      var image = document.getElementById('img');
      image.src = 'img/Hall/Hallway.png';
      document.getElementById('roomName').innerHTML = 'Hallway';
      document.getElementById('chemicalEvent').display = 'none';
      document.getElementById('exitDoorButton').style.display = 'block';
      document.getElementById('chemicalButton').style.display = 'none';
      document.getElementById('noteButton').style.display = 'none';
    })

  } else {

    //play puzzle failure sound
    var acidFailure = new Audio('audio/Hallway/acidFailure.mp3');
    acidFailure.play();
    // selection was not correct print some text
    var para = document.createElement("p");
    var text = document.createTextNode("This combonation doesn't seem to be what i need, i should try making something to dissolve the lock in the hallway, maybe some acid would do? I should double check the note i found");
    para.appendChild(text);
    var element = document.getElementById("chemicalEvent");
    element.appendChild(para);
    lineBreakChemical();



  }
}

// method that prints a line break where called to the gameDialog div
function lineBreak() {
  var lineBreak = document.createElement("br");
  var element = document.getElementById("gameDialog");
  element.appendChild(lineBreak);

}

// // method that prints a line break where called to the gameText div
// function lineBreak() {
//   var lineBreak = document.createElement("br");
//   var element = document.getElementById("gameText");
//   element.appendChild(lineBreak);
// }

// method that prints a line break where called to the chemicalEvent div
function lineBreakChemical() {
  var lineBreak = document.createElement("br");
  var element = document.getElementById("chemicalEvent");
  element.appendChild(lineBreak);
}

// code is run when the note buttin in morgue is clicked
function expandNote() {

  var noteOpen = new Audio('audio/Hallway/noteOpen.mp3');
  noteOpen.play();

  noteFound = true;
  document.getElementById("myModalDiv").style.display = "block";
  document.getElementById("expandedNote").src = "img/Hall/ChemicalNote.jpg";
  document.getElementById("caption").innerHTML = "An old note belongning to Dr Friedrich, he seems to have mentioned some sort of cipher on it";

  // closes note using escape key
  document.addEventListener('keydown', function(e) {
    if (e.key == 'Escape')
      var noteOpen = new Audio('audio/Hallway/noteOpen.mp3');
    noteOpen.play();
    document.getElementById("myModalDiv").style.display = "none";
    document.getElementById("wiresModal").style.display = "none";

  })
}

// code to close using x button
function closeNote() {

  var noteOpen = new Audio('audio/Hallway/noteOpen.mp3');
  noteOpen.play();

  document.getElementById("myModalDiv").style.display = "none";
  document.getElementById("wiresModal").style.display = "none";
}


// function toggleColours() {
//     var wrapper = document.getElementById('wrapper');
//     var roomName = document.getElementById('roomName');
//     var colLeft = document.getElementById('col-left');
//     var headBorder = document.getElementById('head');
//     var colLeftBorder = document.getElementById('col-left');
//     var redact = document.getElementById('redact');
//     var gameName = document.getElementById('gameName');
//
//     //decides what color the background is
//     if (wrapper.style.backgroundColor === 'white') {
//
//         wrapper.style.backgroundColor = '#1A1A1D';
//     } else {
//         wrapper.style.backgroundColor = 'white';
//     }
//
//     //decides the color of the room name text
//     if (roomName.style.color === 'black') {
//         roomName.style.color = 'white';
//     } else {
//         roomName.style.color = 'black';
//     }
//
//     //decides the color of the text in the left col
//     if (colLeft.style.color === 'black') {
//         colLeft.style.color = 'white';
//     } else {
//         colLeft.style.color = 'black';
//     }
//       //decides the color of headers border
//     if (headBorder.style.borderColor === 'black') {
//         headBorder.style.borderColor = '#6f2232';
//
//     } else {
//         headBorder.style.borderColor = 'black';
//     }
//
//       //decides the color of left cols border
//     if (colLeftBorder.style.borderColor === 'black') {
//         colLeftBorder.style.borderColor = '#6f2232';
//     } else {
//         colLeftBorder.style.borderColor = 'black';
//     }
//
//     //decides the color of redaction box in the title
//     if(redact.style.backgroundColor === 'black'){
//        redact.style.backgroundColor = '#C3073F';
//        }
//        else{
//        redact.style.backgroundColor = 'black';
//        }
//
//     //decides the color of the tilt text
//     if(gameName.style.color === 'black'){
//         gameName.style.color =  '#C3073F';
//        }
//        else{
//        gameName.style.color = 'black';
//        }
//
//
// }
