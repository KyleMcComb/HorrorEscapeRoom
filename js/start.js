function saveData() {
  var nameInput = document.getElementById("subject").value;
  var text = document.getElementById("traits").value;

  sessionStorage.setItem("subject", nameInput);
  sessionStorage.setItem("traits", text);

  window.location.href = 'Cell.html';
}
