function onLoad() {
  var para = document.createElement("p");
  var text = document.createTextNode("You have just regained consciousness. You find yourself left alone in a cell. You are left badly shaken and confused. You better make an escape soon or become one of Doctor Friedrich's experiments.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);


  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}
var code; //code entered in by user to escape
var unlocked = false; //

function LockPickClick(background) {

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
}


// When the user clicks on <span> (x), close the note
function closeNote() {
  document.getElementById("myModal").style.display = "none";

}

function arrowClick(background) {

if (unlocked == false){
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
  var text = document.createTextNode("You turn around to discover you are locked in a cell. The only thing stopping you from getting closer to freedom is a locked cell door");
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

function gateLockClick(background) {

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

  alert("You have escaped the Cells Room!");
  sessionStorage.setItem("cellTime", timePassed);
  sessionStorage.setItem("timeleft", 60-timePassed);
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
  sessionStorage.setItem("exitTime", timePassed);

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

  //Unlock 3 passcode lock
  var buttonsPressed = 0;
  var lockCode = "1234";
  var enteredCode = "";
    function unlock(number){

      //Make buttons disappear when pressed
      switch(number){
        case 1:
          document.getElementById("doorControButtonTri").style.display="none";
          enteredCode += number;
          buttonsPressed++;
          break;
        case 2:
          document.getElementById("doorControButtonSqu").style.display="none";
          enteredCode += number;
          buttonsPressed++;
          break;
        case 3:
          document.getElementById("doorControButtonCir").style.display="none";
          enteredCode += number;
          buttonsPressed++;
          break;
        case 4:
          document.getElementById("doorControButtonX").style.display="none";
          enteredCode += number;
          buttonsPressed++;
          break;
        default:
          alert("Error in switch of button locks");
          break;
      }

      // Displays text for the user (in left column)
      var para = document.createElement("p");
      var text = document.createTextNode("Button " + number + " pressed...","");
      para.appendChild(text);
      var element = document.getElementById("col-left");
      element.appendChild(para);

      var lineBreak = document.createElement("br");
      var element = document.getElementById("col-left");
      element.appendChild(lineBreak);

      //Reset if its been pressed 3 times
      if(buttonsPressed >= 4){
        //Correct order of button press

        if(enteredCode == lockCode){
          combinationSuccess();


            //Hide buttons
            document.getElementById("doorControButtonTri").style.display="none";
            document.getElementById("doorControButtonSqu").style.display="none";
            document.getElementById("doorControButtonCir").style.display="none";
            document.getElementById("doorControButtonX").style.display="none";

            // Displays text for the user (in left column)
            var para = document.createElement("p");
            var text = document.createTextNode("It seems that the buttons were pressed in the correct order...");
            para.appendChild(text);
            var element = document.getElementById("col-left");
            element.appendChild(para);

            var lineBreak = document.createElement("br");
            var element = document.getElementById("col-left");
            element.appendChild(lineBreak);


          }
          else{ //Incorrect order of button press

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

// dhasudihasiudh iuhsdiu hasdh ahsdiu hasiud shd iuhfiuadhsfiuhasdg asdg a
const fill = document.getElementById("lockPickInv");
const empties = document.getElementById("cellGateButton");

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
