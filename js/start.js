function saveData() {
  var nameInput = document.getElementById("subject").innerHTML;
  sessionStorage.setItem("subject", nameInput);

  var text = document.getElementById("traits").innerHTML;
  sessionStorage.setItem("traits", text);

  window.location.href = 'laboratory.html';
}
