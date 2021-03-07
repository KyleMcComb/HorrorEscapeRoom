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

function drawerClick(background) {

  // Changes image on click
  image = document.getElementById('background');
  image.src = "img/Lab/drawercloseup.jpg";

  // Removes button after clicked
  var dButton = document.getElementById("drawerButton");
  drawerButton.style.display = "none";

  // Displays text for the user (in left column)
  var para = document.createElement("p");
  var text = document.createTextNode("You discovered a diary of one of Doctor Friedrich's victims");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function arrowClick(background) {

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
