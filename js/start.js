function saveData() {
  var nameInput = document.getElementById("subject").innerHTML;
  var text = document.getElementById("traits").innerHTML;

  sessionStorage.setItem("subject", nameInput);
  sessionStorage.setItem("traits", text);

  window.location.href = 'laboratory.html';
}
