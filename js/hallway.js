function changeText() {
  document.getElementsById('change').color = 'red';
}


function windowClick() {

  document.getElementById("output").innerHTML = "A steel barred window, far to samll to squeeze through, keep looking!";
}

function sideRoomClick() {
  var window = document.getElementById('output').innerHTML = "";

  var h = document.createElement("p");
  var t = document.createTextNode("Hello World");
  h.appendChild(t);
  document.body.appendChild(h);
}

function ExitClick() {
  var window = document.getElementById('output').innerHTML = "";

  var h = document.createElement("p");
  var t = document.createTextNode("Hello World");
  h.appendChild(t);
  document.body.appendChild(h);
}
