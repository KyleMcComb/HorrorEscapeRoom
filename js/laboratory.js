function onLoad() {
  var para = document.createElement("p");
  var text = document.createTextNode("You've entered the domain of Doctor Friedrich. You better find an escape soon or meet the same fate as the rest of the subjects.");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);



  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}

function drawerClick(background) {

  image = document.getElementById('background');
  image.src = "img/Lab/drawercloseup.jpg";

  var dButton = document.getElementById("drawerButton");
  drawerButton.style.display = "none";
  var para = document.createElement("p");
  var text = document.createTextNode("Doctor Friedrich's drawer, could this contain important files?");
  para.appendChild(text);
  var element = document.getElementById("col-left");
  element.appendChild(para);

  var lineBreak = document.createElement("br");
  var element = document.getElementById("col-left");
  element.appendChild(lineBreak);
}
