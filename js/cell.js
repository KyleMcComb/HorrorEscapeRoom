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
  document.getElementById("expandedNote").src = "img/Lab/ClassifiedLore.jpg";
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
  }
}

function cellGateClick(background) {

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
  var nButton = document.getElementById("noteButton");
  noteButton.style.display = "block";

  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You turn around to discover you are locked in a cell. The only thing stopping you from getting closer to freedom is a locked cell door");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
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
      txt = "[System]:User cancelled the prompt.";
      //checks for correct entering in of code AND the user has collected all 3 keys before moving on
    } else if(code=="7412"){
      // Adds note modal button after clicked
      var nModal = document.getElementById("noteModal");
      noteModal.style.display = "block";
      txt = "<p>You have unlocked the safe and found a note and a flash light within it</p>";
      // Removes button after clicked
      var nButton = document.getElementById("drawerButton");
      drawerButton.style.display = "none";

      unlocked = true;
    //else the user is told the code is incorrect
  }
  else {
      txt = "<p>[System]:That code is incorrect - Hint: Look around the room</p>";
    }
  }
  //REMOVE PART OF LATER
  //Outputs to the user the txt in the 'GameText' area
  //timeSpent - records how long a person was in the prompt box
  document.getElementById("gameText").innerHTML += txt + ' <br><br>' + timeSpent;

  }
