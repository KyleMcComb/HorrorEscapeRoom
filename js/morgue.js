var noteClicked = false;


function expandNote(){
  noteClicked = true;
  document.getElementById("myModalDiv").style.display = "block";
  document.getElementById("expandedNote").src = "img/Morgue/ChemicalNote.jpg";
  document.getElementById("caption").innerHTML = "An old note belongning to Dr Friedrich, concerning chemical formula";
}

function closeNote() {
  document.getElementById("myModalDiv").style.display = "none";
  document.getElementById("wiresModal").style.display = "none";
}
