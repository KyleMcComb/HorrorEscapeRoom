//var timePassed = 0; //record how long the user spent in this room (seconds)
var code; //code entered in by user to escape

var noKeys = 0; //used to check user has collected keys before escpaing
var txt; //text to output to user

var keyCode = []; //user enters in keypad to rerieve blue key
var keyPadCode = 420; // correct keypad code
var exitRoomCode = 935;
var codePurpleKey = 872;
const pos = document.documentElement; //document used for torch
var timeOut;


//Displays the code to unlock the final door
function displayCode() {
  //records time spent in function as timer stops when prompt box is open
  var startTime = new Date();
  var textForPrompt = 'Enter the code to escape!:'

  code = prompt(textForPrompt);
  //records end time user has been in function - used to calc full time user spent entering in a code before closing prompt box
  var endTime = new Date();
  var timeSpent = endTime - startTime;

  timeSpent = timeSpent / 1000;
  timer -= timeSpent;
  sessionStorage.setItem("exitTime", timePassed);

  if (timer <= 0) {
    //If the time is up - brings user to the end screen to show stats
    window.location.href = 'endScreen.html';
    //This variable is use to decide which image of the doctor to display
    var winGame = "lose";
    //sets gamePlay to lose to display correct doctor picture and Stats
    sessionStorage.setItem("winGame", winGame);
  } else {
    if (code == null || code == "") {
      playSound('error');
      txt = "[System]:User cancelled the prompt.";
      //checks for correct entering in of code AND the user has collected all 3 keys before moving on
    } else if (code == exitRoomCode && noKeys==3) {
      playSound('openDoor');
      var winGame = "win";
      sessionStorage.setItem("winGame", winGame);
      timeOut = setTimeout(summaryPage, 3000);
      //saves the gamePlay to win to get Win Doctor picture and correct stats

    } else if (noKeys < 3) {
      playSound('error');
      txt = "[System]: Hmm.. Looks like theres 3 locks, make sure to collect the keys before escaping!";
    } else {
      playSound('error');
      txt = "<p>[System]:That code is incorrect</p>";
    }
  }
}

function summaryPage(){
  window.location.href = 'summary.html';
}

//tells user code on wall as hint
function wallCode() {
  //var txt = "[System]: You have found a note - maybe there is a code. <br><br>";
  var txt = "[System]: You have found a code on the wall - 420. <br><br>";
  document.getElementById('gameText').innerHTML += txt;
}

function wallNote() {
  playSound('noteWhisper');
  var txt = "[System]: You have found a note - maybe there is a code. <br><br>";
  document.getElementById('gameText').innerHTML += txt;

  //EDIT LATER - WHAT DO YOU WANT TO DO
  //displays close up of image to user
  //displays modal div
  document.getElementById("noteModal").style.display = "block";
  //hint for users to remember code on key
  document.getElementById("noteCaption").innerHTML = "You have found a note from one of the doctor's victims. Maybe it's a clue";

}

//used to tell the user coloured glass as alt tag for image mapping wasnt resizable
function colouredGlass() {
  var txt = "[System]: You have found coloured glass Gold, Blue, Purple - maybe this is a clue to Dr Friedrich's puzzle.<br>";
  document.getElementById('gameText').innerHTML += txt;
}

function purpleKeyCode() {
  var gameArea = document.getElementById('gameText');
  var txt = "";
  txt = '<p>Please choose a code to retrieve the purple key</p>';
  txt += '<label for= "purpleCode">Code: </label>';
  txt += '<input type= "text" id="purpleCode" name= "purpleCode"></input><input type="submit" value = "Submit" onclick="purpleSubmit();"/>';
  gameArea.innerHTML += txt;

  //keyFound('purple');
}

function purpleSubmit() {
  //document.getElementById('gameText').innerHTML = "Hi Olivia";
  var x = document.getElementById("purpleCode").value;
  document.getElementById('gameText').innerHTML = "";
  if(x==codePurpleKey){
    keyFound('purple');
  }else{
    document.getElementById('gameText').innerHTML += "<p>[System]: Try again - wrong code! Hint: check the walls for notes! </p><br><br>";
    //purpleKeyCode();
  }

}

//Key found - opens modal
function keyFound(keyType) {
  playSound('key');
  //adds Key - used to check if user has collected keys before entering in a code
  noKeys += 1;
  var x;
  switch (keyType) {
    case 'gold':
      //shows image of gold key close up
      expand('gold');
      x = document.getElementById('goldKey');
      txt = '<p>[System]: Well done, gold key found!';
      break;
    case 'blue':
      //shows image of blue key close up
      expand('blue');
      x = document.getElementById('blueKey');
      txt = '<p>[System]: Well done, blue key found!';
      break;
    case 'purple':
      //shows image of purple key close up
      expand('purple');
      x = document.getElementById('purpleKey');
      txt = '<p>[System]: Well done, purple key found!';
      break;
    default:
      break;
  }
  //Tells user how many keys left to find/next steps
  var complete="";
  if (noKeys == 1) {
    txt += ' 1/3 Keys found! Keep Searching! </p><br>';
  } else if (noKeys == 2) {
    txt += ' 2/3 Keys found! Keep Searching! </p><br>';
  } else {
    txt += '3/3 Keys found! All keys have been found, I can hear Dr Friedrich getting close! Better escape soon! </p><br>';
    complete += '<ul><li>The Blue key has the number 3 on it</li><li>The Purple key has the number 5 on it</li><li>The Gold key has the number 9 on it</li></ul>';
  }
  //displays output to gameText area
  document.getElementById('gameText').innerHTML += complete;
  document.getElementById('keys').innerHTML = txt;
  //hides button that displayed key
  x.style.display = "none";

}

//Expand the key image
function expand(colour) {
  //holds which image to display in modal box
  var imageToShow;
  //holds the alt tag for accessibility
  var altTxt;
  var captionKey = "";
  //depends on which key button has been pressed
  if (colour == 'blue') {
    imageToShow = "img/Exit/BlueKey3.png";
    captionKey = "You search the safe and find a blue key! The Key has a number - make sure to remember it!"
    altTxt = 'Blue Key - number 3';
  } else if (colour == 'purple') {
    imageToShow = "img/Exit/PurpleKey5.png";
    captionKey = "The Key has a number - make sure to remember it!"
    altTxt = 'Purple Key - number 5';
  } else if (colour == 'gold') {
    imageToShow = "img/Exit/GoldKey9.png";
    captionKey = "You lift a wooden board and find the Gold Key!"
    altTxt = 'Gold Key - number 9';
  }
  //displays close up of image to user
  //displays modal div
  document.getElementById("keyModal").style.display = "block";
  //changes src of image to correct key
  document.getElementById("expandedKey").src = imageToShow;
  //changes alt of image to correct key
  document.getElementById("expandedKey").alt = altTxt;
  //hint for users to remember code on key
  document.getElementById("captionKey").innerHTML = captionKey;

}

//Expand the keypad image
function expandKeypad() {
  document.getElementById("lockModal").style.display = "block";
  document.getElementById("expandedKeypad").src = "img/Exit/keypad.jpg";
  document.getElementById("expandedKeypad").alt = "KeyPad";
  document.getElementById("expandedKeypad").style.height = '50%';
  document.getElementById("captionKeypad").innerHTML = "Enter the 3 Digit Code!";
}

//keypad entering in the Code
function enterKeyCode(btnPressed) {
  if (btnPressed == '0' || btnPressed == '1' || btnPressed == '2' || btnPressed == '3' || btnPressed == '4' || btnPressed == '5' || btnPressed == '6' || btnPressed == '7' || btnPressed == '8' || btnPressed == '9') {
    document.getElementById('userEntry').innerHTML += btnPressed;
    keyCode.push(Number(btnPressed));
    playSound('keypadClick');
  } else if (btnPressed == 'submit') {
    // var keyPadCode = 420; - CORRECT CODE
    document.getElementById('userEntry').innerHTML = "";
    var userEnter = "";
    var lenCodeEnter = keyCode.length;
    for (i = 0; i < lenCodeEnter; i++) {
      //document.getElementById('gameText').innerHTML += '<p>'+ keyCode[i]+'</p>';
      userEnter = (keyCode.pop()).toString() + userEnter;
    }

    if (lenCodeEnter > 3 || lenCodeEnter < 3) {
      playSound('error');
      document.getElementById("captionKeypad").innerHTML = "Enter the 3 Digit Code!<p>the code should be 3 numbers! Try Again!</p>";
      keyCode = [];
    } else if (lenCodeEnter == 3 && userEnter != keyPadCode) {
      playSound('error');
      document.getElementById("captionKeypad").innerHTML = "Enter the 3 Digit Code!<p>Wrong code! Try again (hint: Look at the walls)</p>";
    } else if (lenCodeEnter == 3 && userEnter == keyPadCode) {

      document.getElementById('keyPad').style.display = "none";
      closeKey('lockModal');
      keyFound('blue');
    }
  }
}

// When the user clicks on <span> (x), close the note
function closeKey(closeModal) {
  if (closeModal == 'key') {
    document.getElementById('keyModal').style.display = "none";
  } else if (closeModal == 'lockModal') {
    document.getElementById('lockModal').style.display = "none";
    keyCode = [];
  } else if (closeModal == 'note') {
    document.getElementById('noteModal').style.display = "none";

  }
}


function moveTorch() {

  var pos = document.documentElement;

  var test = document.getElementById("imageDiv");
  var rect = test.getBoundingClientRect();

  var viewportLeft = rect.left;
  var viewportTop = rect.top;

  var x = event.clientX; // x co-ord of Window
  var y = event.clientY; // y co-ord of Window

  pos.style.setProperty('--x', (x - viewportLeft) + 'px');
  pos.style.setProperty('--y', (y - viewportTop) + 'px');
}

function playSound(soundToPlay) {
  let sound;
  if (soundToPlay == 'error') {
    sound = document.getElementById('keypadError');
  } else if(soundToPlay =='key') {
    sound = document.getElementById('keyFound');
  } else  if(soundToPlay =='openDoor'){
    sound = document.getElementById('openDoor');
  } else if (soundToPlay =='keypadClick'){
    sound = document.getElementById('keypadClick');
  }else if (soundToPlay =='noteWhisper'){
    sound = document.getElementById('noteWhisper');
  }

  let play = document.getElementById('play')

  sound.play();
}

function exitTheme(){
  //var items = document.getElementsByClass('roomItem');
  var btn1 = document.getElementById('exitButton');
  if (btn1.style.borderColor == 'red') {
    btn1.style.border = 'none';
    document.getElementById('light').display="none";
  }else{
    btn1.style.border = 'solid red 2px';
    document.getElementById('light').display="none";
  }
  /*
  document.getElementById('exitButton').style.border = "solid red 2px";
  document.getElementById('goldKey').style.border= "solid red 2px";
  document.getElementById('purpleKey').style.border = "solid red 2px";
/*

  document.getElementById('wallNote').style.border = "solid red 2px";
  document.getElementById('wallCode').style.border = "solid red 2px";
  document.getElementById('light').remove();*/
toggleColours();
}
