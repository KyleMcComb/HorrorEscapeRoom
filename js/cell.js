function onLoad() {
  var para = document.createElement("p");
  var text = document.createTextNode("You have just regained consciousness. You find yourself left alone in a cell. You are left badly shaken and confused. You better make an escape soon or become one of Doctor Friedrich's experiments. Make sure to hover your mouse around the room to find items and puzzles.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);


  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    var amb = new Audio('audio/Cell/cellAmbience.mp3');
    amb.play();
    document.removeEventListener('click', musicPlay);
}


var code; //code entered in by user to escape
var unlocked = false; //
var lockPickFound = false;

function LockPickClick(background) {
  lockPickFound = true;

  // create pickupItem audio object and play it
  var pickupItemSound = new Audio('audio/Cell/pickupItem.wav');
  pickupItemSound.play();

  // Adds note modal button after clicked
  var lModal = document.getElementById("lockPickInv");
  lockPickInv.style.display = "block";

  // Removes button after clicked
  var nButton = document.getElementById("lockPickButton");
  lockPickButton.style.display = "none";

  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You discovered a lock pick maybe you could use it to unlock the cell gate");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

//Expand the note image
function expand(){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("expandedNote").src = "img/Cell/victimsDiary.png";
  document.getElementById("caption").innerHTML = "Dr Friedlich's victims diary";

  // create noteClickSound audio object and play it
  var noteClickSound = new Audio('audio/Cell/noteClick.wav');
  noteClickSound.play();
}


// When the user clicks on <span> (x), close the note
function closeNote() {
  document.getElementById("myModal").style.display = "none";

  // create noteCloseSound audio object and play it
  var noteCloseSound = new Audio('audio/Cell/noteClose.wav');
  noteCloseSound.play();

}

function arrowClick(background) {

if (unlocked == false || lockPickFound == false){
  // Displays text for the user (in left column)
  var para = document.createElement("p");
var text = document.createTextNode("Make sure you look around the room fully before turning around.");
para.appendChild(text);
var element = document.getElementById("col-left");
element.appendChild(para);

var lineBreak = document.createElement("br");
var element = document.getElementById("col-left");
element.appendChild(lineBreak);
}
else {

  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Cell/cellDoorOpen.jpg";
  // Removes button after clicked
  var nButton = document.getElementById("arrowButton");
  arrowButton.style.display = "none";

  // Removes drawer button after clicked
  var nButton = document.getElementById("drawerButton");
  drawerButton.style.display = "none";

  // Adds cell door button after clicked
  var nButton = document.getElementById("cellGateButton");
  cellGateButton.style.display = "block";

  // Adds cell lock button after clicked
  var nButton = document.getElementById("gateLockButton");
  gateLockButton.style.display = "block";

  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You turn around to discover you are locked in a cell. The only thing stopping you from getting closer to freedom is a locked cell door (Drag and Drop the lock pick onto the cell gate lock)");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);

    document.getElementById('cellGateButton').style.display = "block";
    document.getElementById('gateLockButton').style.display = "block";
  }
}


function codeClick(background) {

  // Displays text for the user (in left column)
  var para = document.createElement("p");
var text = document.createTextNode("You spot a code on the wall: 7412. Mabye this code could be used to unlock the safe.");
para.appendChild(text);
var element = document.getElementById("col-left");
element.appendChild(para);

var lineBreak = document.createElement("br");
var element = document.getElementById("col-left");
element.appendChild(lineBreak);

}


function gateLockClick(background) {

  // create gateOpening audio object and play it
  var gateOpening = new Audio('audio/Cell/gateOpen.wav');
  gateOpening.play();

  // Removes button after clicked
  var nButton = document.getElementById("arrowButton");
  arrowButton.style.display = "none";

  // Removes gate Lock button after clicked
  var nButton = document.getElementById("gateLockButton");
  gateLockButton.style.display = "none";

  // Removes cell gate button after clicked
  var nButton = document.getElementById("cellGateButton");
  cellGateButton.style.display = "none";

  // Removes lock pick inventory button after clicked
  var nButton = document.getElementById("lockPickInv");
  lockPickInv.style.display = "none";

  // Adds cell door button after clicked
  var nButton = document.getElementById("lockedDoorButton");
  lockedDoorButton.style.display = "block";

  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You have successfully picked the lock on the cell gate! The only thing stopping you from escaping the cell room is a locked door.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function doorContrClick(background) {

  // create metalDoorClick audio object and play it
  var metalDoorClick = new Audio('audio/Cell/doorLockedClick.flac');
  metalDoorClick.play();

  // Remove locked door button
  var nButton = document.getElementById("lockedDoorButton");
  lockedDoorButton.style.display = "none";

  // Adds cell door button after clicked
  var nButton = document.getElementById("doorControButtonTri");
  doorControButtonTri.style.display = "block";

  var nButton = document.getElementById("doorControButtonX");
  doorControButtonX.style.display = "block";

  var nButton = document.getElementById("doorControButtonSqu");
  doorControButtonSqu.style.display = "block";

  var nButton = document.getElementById("doorControButtonCir");
  doorControButtonCir.style.display = "block";


  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("This door appears to be locked! Click on the buttons to the left of this door in the correct order to unlock the door.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function doorOpenClick(background) {

  // Remove open door button
  var nButton = document.getElementById("openDoorButton");
  openDoorButton.style.display = "none";
  sessionStorage.setItem("cellTime", timePassed);
  if(timePassed>60){
    sessionStorage.setItem("timeleft", 0);
  } else{
    sessionStorage.setItem("timeleft", 60-timePassed);
  }
  alert("You have escaped the Cells Room!");
  window.location.href = "laboratory.html";

}

//When the user clicks on the drawer this method will run which asks for a code then displays the diary
function safeCode(){
  //records when the user activates this function (when user clicks exit door)
  //this is being recorded to find out how long the user is in the Function
  //prompt box stops the java timer, this calculates how long in function and takes it off remaining time
  var startTime = new Date();
  //text to prompt user to enter a code in
  code = prompt("You found a locked safe box - Enter the 4 digit code to open it!: ");
  //records end time user has been in function - used to calc full time user spent entering in a code before closing prompt box
  var endTime = new Date();
  //time spent in function
  var timeSpent = endTime-startTime;

  timeSpent = timeSpent/1000;
  timer-=timeSpent;

  if(timer<=0){
    //If the time is up - brings user to the end screen to show stats
    window.location.href = 'endScreen.html';
    //This variable is use to decide which image of the doctor to display
    var winGame = "lose";
    //sets gamePlay to lose to display correct doctor picture and Stats
    //saves the variable as sessionStorage so the exit page can access it
    sessionStorage.setItem("winGame", winGame);
  } else{
    //checks if the user has entered in a code or not
    if (code == null || code == "") {

      // Displays text for the user (in left column)
      var para = document.createElement("p");
      var text = document.createTextNode("[System]:User cancelled the prompt.");
      para.appendChild(text);
      var element = document.getElementById("col-left");
      element.appendChild(para);

      var lineBreak = document.createElement("br");
      var element = document.getElementById("col-left");
      element.appendChild(lineBreak);

      //checks for correct code which is 7412
    } else if(code=="7412"){

      // create safeopening audio object and play it
      var safeopening = new Audio('audio/Cell/safeOpen.flac');
      safeopening.play();

      // Adds note modal button after clicked
      var nModal = document.getElementById("noteModal");
      noteModal.style.display = "block";

      // Displays text for the user (in left column)
      var para = document.createElement("p");
      var text = document.createTextNode("You have unlocked the safe and found a note and a flash light within it.");
      para.appendChild(text);
      var element = document.getElementById("col-left");
      element.appendChild(para);

      var lineBreak = document.createElement("br");
      var element = document.getElementById("col-left");
      element.appendChild(lineBreak);

      // Removes button after clicked
      var nButton = document.getElementById("drawerButton");
      drawerButton.style.display = "none";

      unlocked = true;
    //else the user is told the code is incorrect
  }
  else {

      // create safeCodeWrong audio object and play it
      var safeCodeWrongSound = new Audio('audio/Cell/safeCodeWrong.mp3');
      safeCodeWrongSound.play();

      // Displays text for the user (in left column)
      var para = document.createElement("p");
      var text = document.createTextNode("[System]:That code is incorrect - Hint: Look around the room.");
      para.appendChild(text);
      var element = document.getElementById("col-left");
      element.appendChild(para);

      var lineBreak = document.createElement("br");
      var element = document.getElementById("col-left");
      element.appendChild(lineBreak);

    }
  }
  }

  function combinationSuccess(background) {

    // create doorOpen audio object and play it
    var doorOpen = new Audio('audio/Cell/doorOpening.wav');
    doorOpen.play();

    // Adds open door button after clicked
    var nButton = document.getElementById("openDoorButton");
    openDoorButton.style.display = "block";

    // Changes image on click
    image = document.getElementById('background');
    image.src = "img/Cell/CellRoomsDoorOpen.png";

    // removes cell door buttons after clicked
    var nButton = document.getElementById("doorControButtonTri");
    doorControButtonTri.style.display = "none";

    var nButton = document.getElementById("doorControButtonX");
    doorControButtonX.style.display = "none";

    var nButton = document.getElementById("doorControButtonSqu");
    doorControButtonSqu.style.display = "none";

    var nButton = document.getElementById("doorControButtonCir");
    doorControButtonCir.style.display = "none";

    // Removes Note
    var nButton = document.getElementById("noteModal");
    noteModal.style.display = "none";


    // Displays text for the user (in left column)
    var para = document.createElement("p");
    var text = document.createTextNode("You have successfully entered the correct combination!");
    para.appendChild(text);
    var element = document.getElementById("col-left");
    element.appendChild(para);

    var lineBreak = document.createElement("br");
    var element = document.getElementById("col-left");
    element.appendChild(lineBreak);
  }

  //Symbol combination lock
  var buttonsPressed = 0;
  var lockCode = "TriangleSquareCircleCross";
  var enteredCode = "";
    function combinationDoorUnlock(symbol){

      // create combinationClickSound audio object and play it
      var combinationClickSound = new Audio('audio/Cell/combinationClick.wav');

      //Make buttons disappear when pressed
      switch(symbol){
        case "Triangle" :
          document.getElementById("doorControButtonTri").style.display="none";
          enteredCode += symbol;
          buttonsPressed++;
          combinationClickSound.play();
          break;
        case "Circle":
          document.getElementById("doorControButtonCir").style.display="none";
          enteredCode += symbol;
          buttonsPressed++;
          combinationClickSound.play();
          break;
        case "Square":
          document.getElementById("doorControButtonSqu").style.display="none";
          enteredCode += symbol;
          buttonsPressed++;
          combinationClickSound.play();
          break;
        case "Cross":
          document.getElementById("doorControButtonX").style.display="none";
          enteredCode += symbol;
          buttonsPressed++;
          combinationClickSound.play();
          break;
        default:
          alert("Error in switch of button locks");
          break;
      }

      // Displays text for the user (in left column)
      var para = document.createElement("p");
      var text = document.createTextNode(symbol + " button pressed...","");
      para.appendChild(text);
      var element = document.getElementById("col-left");
      element.appendChild(para);

      var lineBreak = document.createElement("br");
      var element = document.getElementById("col-left");
      element.appendChild(lineBreak);

      //Reset if its been pressed 4 times
      if(buttonsPressed >= 4){
        //Correct order of button press

        if(enteredCode == lockCode){
          combinationSuccess();

            //Hide buttons
            document.getElementById("doorControButtonTri").style.display="none";
            document.getElementById("doorControButtonSqu").style.display="none";
            document.getElementById("doorControButtonCir").style.display="none";
            document.getElementById("doorControButtonX").style.display="none";

          }
          else{ //Incorrect order of button press

            // create combinationWrongSound audio object and play it
            var combinationWrongSound = new Audio('audio/Cell/combinationWrong.mp3');
            combinationWrongSound.play();

            // Displays text for the user (in left column)
            var para = document.createElement("p");
            var text = document.createTextNode("Buttons were pressed in the wrong order. No locks were disabled");
            para.appendChild(text);
            var element = document.getElementById("col-left");
            element.appendChild(para);

            var lineBreak = document.createElement("br");
            var element = document.getElementById("col-left");
            element.appendChild(lineBreak);


            document.getElementById("doorControButtonTri").style.display="initial";
            document.getElementById("doorControButtonSqu").style.display="initial";
            document.getElementById("doorControButtonCir").style.display="initial";
            document.getElementById("doorControButtonX").style.display="initial";
          }
          enteredCode = "";
          buttonsPressed = 0;
        }
}

// Drag Functions
function onDragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
  event.currentTarget.style.backgroundColor = '#E7E0B6';
}

function onDragOver(event) {
event.preventDefault();
}

function onDrop(event) {
event.preventDefault();
gateLockClick();

const id = event.dataTransfer.getData('text');

const draggableElement = document.getElementById(id);
const dropzone = event.target;

dropzone.appendChild(draggableElement);
draggableElement.style.backgroundColor = "#C2E8BA";

event.dataTransfer.clearData();

document.getElementById('lockPickInv').style.top = '50%';
document.getElementById('lockPickInv').style.right = '50%';
document.getElementById('lockPickInv').style.height = '4vh';
document.getElementById('lockPickInv').style.width = '10vh';
}
