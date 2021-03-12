var expanded = false;
var noteFound = false;
compound1Isvalid = false;
compound2Isvalid = false;
compound3IsValid = false;

function chemicalEvent() {
  showSelection();
}

function showSelection() {

  if (noteFound === true) {
    var para = document.createElement("p");
    var text = document.createTextNode('These seem to be the chemicals Dr Friedrich mentioned in his note, i should be able to make something useful to use on the dorr in the hall way. The note said something about acid and a key.');
    para.appendChild(text);
    var element = document.getElementById("textDiv");
    element.appendChild(para);
    lineBreak();
    document.getElementById('chemicalEvent').style.visibility = "visible";
  } else {
    var para = document.createElement("p");
    var text = document.createTextNode('You find a tray of what seems like chemicals, although they are not labeled in any obvious way that you can see, just a letter or number on the front of each bottle and the word "RIGHT", maybe there is a cluse somehwere.');
    para.appendChild(text);
    var element = document.getElementById("textDiv");
    element.appendChild(para);
    lineBreak();
  }
}


function checkRadio() {

  if (document.getElementById('H').selected && document.getElementById('M').selected && document.getElementById('six').selected) {

    var para = document.createElement("p");
    var text = document.createTextNode('Success! This seems to have made some acid that is more than corossive enough, i can use it to break down the lock in the hallway! better get going!');
    para.appendChild(text);
    var element = document.getElementById("textDiv2");
    element.appendChild(para);
    lineBreak();

    window.location.href = "hallway.html"

  } else {
    var para = document.createElement("p");
    var text = document.createTextNode("This combonation doesn't seem to be what i need, i should try making something to dissolve the lock in the hallway, maybe some acid would do? I should double check the note i found");
    para.appendChild(text);
    var element = document.getElementById("textDiv2");
    element.appendChild(para);
    lineBreak();

  }

}

function lineBreak() {
  var lineBreak = document.createElement("br");
  var element = document.getElementById("textDiv");
  element.appendChild(lineBreak);
}





/*
function chemicalClick() {

var myDiv = document.getElementById("col-left");

//Create array of options to be added
var array = ["Volvo","Saab","Mercades","Audi"];

//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}
}*/



function expandNote() {
  noteFound = true;
  document.getElementById("myModalDiv").style.display = "block";
  document.getElementById("expandedNote").src = "img/Morgue/ChemicalNote.jpg";
  document.getElementById("caption").innerHTML = "An old note belongning to Dr Friedrich, he seems to have mentioned some sort of cyper on it";
}

function closeNote() {
  document.getElementById("myModalDiv").style.display = "none";
  document.getElementById("wiresModal").style.display = "none";
}
