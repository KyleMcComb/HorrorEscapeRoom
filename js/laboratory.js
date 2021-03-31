var keyFound = 0;

document.addEventListener('click', musicPlay);
function musicPlay() {
    var amb = new Audio('audio/Lab/Ambience.mp3');
    amb.play();
    document.removeEventListener('click', musicPlay);
}

function drawerClick(background) {

  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/drawercloseup.jpg";
  // Removes button after clicked
  var dButton = document.getElementById("drawerButton");
  drawerButton.style.display = "none";
  // Adds note button after clicked
  var nButton = document.getElementById("noteButton");
  noteButton.style.display = "block";
  // Adds compartmentButton after clicked
  var cButton = document.getElementById("compartmentButton");
  compartmentButton.style.display = "block";
  // Adds compartmentButton2 after clicked
  var cButton2 = document.getElementById("compartment2Button");
  compartment2Button.style.display = "block";
  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("Doctor Friedrich's drawer, I would search for some clues " + playerName + ".");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function noteClick(background) {

  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/lab_note.jpg";
  // Adds note modal button after clicked
  var nModal = document.getElementById("noteModal");
  noteModal.style.display = "block";
  // Adds button after clicked
  var bButton = document.getElementById("backButton");
  backButton.style.display = "block";
  // Adds button after clicked
  var fButton = document.getElementById("forwardButton");
  forwardButton.style.display = "block";
  // Removes button after clicked
  var nButton = document.getElementById("noteButton");
  noteButton.style.display = "none";
  // Removes compartment buttons after clicked
  var cButton = document.getElementById("compartmentButton");
  compartmentButton.style.display = "none";
  var cButton2 = document.getElementById("compartment2Button");
  compartment2Button.style.display = "none";
  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode(playerName + ", you have found some important documents.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

//Expand the note image
function expand(){

  // create pageTurn audio object and play it
  var pageTurn = new Audio('audio/Lab/pageTurn.mp3');
  pageTurn.play();

  document.getElementById("myModal").style.display = "block";
  document.getElementById("expandedNote").src = "img/Lab/ClassifiedLore.jpg";
  document.getElementById("caption").innerHTML = "Dr Friedlich's Lore";
}


// When the user clicks on <span> (x), close the note
function closeNote() {

  // create bookClose audio object and play it
  var bookClose = new Audio('audio/Lab/bookClose.mp3');
  bookClose.play();

  document.getElementById("myModal").style.display = "none";

}

function compartmentClick() {

  // Removes button after clicked
  var cButton = document.getElementById("compartmentButton");
  compartmentButton.style.display = "none";
  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("That compartment just contains experiment diagrams.. look elsewhere.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function compartment2Click() {

  // create keyPickup audio object and play it
  var keyPickup = new Audio('audio/Lab/keyPickup.mp3');
  keyPickup.play();

  // Removes button after clicked
  var cButton2 = document.getElementById("compartment2Button");
  compartment2Button.style.display = "none";
  // Adds key
  keyFound=1;
  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode(playerName + ", you have found a rusty key.. this could be useful.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function forwardClick() {
  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/lab2.jpg";
  // Removes button after clicked
  var bButton = document.getElementById("backButton");
  backButton.style.display = "none";
  // Removes note modal button after clicked
  var nModal = document.getElementById("noteModal");
  noteModal.style.display = "none";
  // Removes button after clicked
  var fButton = document.getElementById("forwardButton");
  forwardButton.style.display = "none";
  // Adds button after clicked
  var nbButton = document.getElementById("noteBackButton");
  noteBackButton.style.display = "block";
  // Adds button after clicked
  var bsButton = document.getElementById("bookshelfButton");
  bookshelfButton.style.display = "block";
  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You turn around and see no way out... or so you think.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function backClick() {
  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/drawercloseup.jpg";
  // Removes button after clicked
  var fButton = document.getElementById("forwardButton");
  forwardButton.style.display = "none";
  // Removes button after clicked
  var bButton = document.getElementById("backButton");
  backButton.style.display = "none";
  // Removes note modal button after clicked
  var nModal = document.getElementById("noteModal");
  noteModal.style.display = "none";
  // Adds note button after clicked
  var nButton = document.getElementById("noteButton");
  noteButton.style.display = "block";
  // Adds compartmentButton after clicked
  var cButton = document.getElementById("compartmentButton");
  compartmentButton.style.display = "block";
  // Adds compartmentButton2 after clicked
  var cButton2 = document.getElementById("compartment2Button");
  compartment2Button.style.display = "block";
  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You go back to the drawers incase you missed something.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function noteBackClick() {
  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/lab_note.jpg";
  // Adds note modal button after clicked
  var nModal = document.getElementById("noteModal");
  noteModal.style.display = "block";
  // Adds button after clicked
  var bButton = document.getElementById("backButton");
  backButton.style.display = "block";
  // Adds button after clicked
  var fButton = document.getElementById("forwardButton");
  forwardButton.style.display = "block";
  // Removes button after clicked
  var nbButton = document.getElementById("noteBackButton");
  noteBackButton.style.display = "none";
  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You go back to the Notes.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function bookshelfClick() {
  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/closeup_bookshelf.jpg";
  // Removes button when clicked
  var bsButton = document.getElementById("bookshelfButton");
  bookshelfButton.style.display = "none";

  // Removes button after clicked
  var nbButton = document.getElementById("noteBackButton");
  noteBackButton.style.display = "none";

  // Adds button after clicked
  var osButton = document.getElementById("openshelfButton");
  openshelfButton.style.display = "block";

  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode(playerName + ", you stumble across the bookshelf.. A book appears to be loose.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function openshelfClick(){

  // create bookshelfMove audio object and play it
  var bookshelfMove = new Audio('audio/Lab/bookshelfMove.mp3');
  bookshelfMove.play();

  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/HallwayDoor.jpg";

  // Removes button after clicked
  var osButton = document.getElementById("openshelfButton");
  openshelfButton.style.display = "none";

  // Adds button after clicked
  var doButton = document.getElementById("cellDoorButton");
  cellDoorButton.style.display = "block";

  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("The bookshelf shifts open and you are faced with a locked door leading to a hallway.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}


function doorUnlockClick() {
  if(keyFound == 0){
    // Displays text for the user (in left column)
    var para = document.createElement("p");
    var text = document.createTextNode("It seems you are missing the key for this door!");
    para.appendChild(text);
    var element = document.getElementById("col-left");
    element.appendChild(para);

    var lineBreak = document.createElement("br");
    var element = document.getElementById("col-left");
    element.appendChild(lineBreak);
  }
  else if(keyFound == 1) {
    if(timePassed>60){
      sessionStorage.setItem("timeleft", 0);
    } else{
      sessionStorage.setItem("timeleft", 60-timePassed);
    }
    sessionStorage.setItem("labTime", timePassed);
    window.location.href = 'hallway.html';
  }
}
