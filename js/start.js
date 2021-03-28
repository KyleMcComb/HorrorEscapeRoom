function saveData() {
  var nameInput = document.getElementById("subject").value;
  var text = document.getElementById("cTrait").value;

  sessionStorage.setItem("subject", nameInput);
  sessionStorage.setItem("cTrait", text);
  /* Used for testing */
  alert("The trait is: " + text);

  window.location.href = 'Cell.html';
}
