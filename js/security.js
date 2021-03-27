  var gameDialog = "<p> Seems like this is the room Dr Friedrich used this room to monitor his subjects </p>";
  var cluesFound = 1;
  var cluesText = " <br> -Clues found(" + cluesFound + "/3) Part of the door unlocks-";
  var wiresFixed = false;
  var light ="on";
  var torch = false;

//Ambience
  document.addEventListener('click', musicPlay);
  function musicPlay() {
      var amb = new Audio('audio/Lab/Ambience.mp3');
      amb.play();
      document.removeEventListener('click', musicPlay);
      torch = true;
  }
  //When the wires are clicked
  function wiresClick(){
    var wiresButton = document.getElementById("leftWire");
    wiresButton.style.display = "none";
    cluesFound++;
    var electricSound = new Audio('audio/Security/wires.wav');
    electricSound.play();

    //Switch to display diffferent door mechanism unlock message depending on clues found
    switch (cluesFound) {

      case 1:
        cluesText = " <br> -Clues found(" + cluesFound + "/3) 1 of the door's locks have been disabled-";
        break;
      case 2:
        cluesText = " <br> -Clues found(" + cluesFound + "/3) You hear another mechanism shifting behind the wall...-";
        break;
      case 3:
        cluesText = " <br> -Clues found(" + cluesFound + "/3) The last lock has been disabled-";
        break;
      default:
        alert("Error in clues found switch JS WiresClick");
        break;
    }
        wiresFixed = true;
        document.getElementById("captionWires").innerHTML = "<p> You have reconnected the loose wire " + cluesText + "</p>";
        document.getElementById("captionWires").innerHTML += "Is there anything else I can do here?... <br> Is that a keypad?";
        writeText('You have reconnected the loose wire',cluesText);

  }

  //Function to output text in the game speech part
  function writeText(text,cluesText){
    gameDialog += "<p> <br>"+ text + cluesText + "</p>";
    document.getElementById('gameText').innerHTML = (gameDialog);
  }

  //When the exit door is clicked
  function exit(){
    var lockedSound = new Audio('audio/Security/doorLocked.wav');

    if(cluesFound == 3){

      writeText("You have escaped the security room!","");
      sessionStorage.setItem("securityTime", timePassed);
      if(timePassed>60){
        sessionStorage.setItem("timeleft", 0);
      } else{
        sessionStorage.setItem("timeleft", 60-timePassed);
      }
      alert("You have escaped the security room");
      window.location.href = "exit.html";
    }
    else if(cluesFound == 2){
      writeText("Door still seems to be locked <br> 2/3 Locks are disabled","");
      lockedSound.play();
    }
    else if(cluesFound == 1){
      writeText("Door still seems to be locked <br> 1/3 Locks are disabled","");
      lockedSound.play();
    }
    else if(cluesFound == 0){
      writeText("The door seems to have a 3 layer lock. <br> 0/3 Locks are disabled","");
      lockedSound.play();
    }
  }

  //Unlock 3 passcode lock
  var buttonsPressed = 0;
  var lockCode = "132";
  var enteredCode = "";
  var firstTime = true;
    function unlock(number){

      //Prompt for buttons to be pressed in an order
      if((buttonsPressed == 0)&&(firstTime)){
        writeText("There are 3 buttons here. Maybe I need to press them in a certain order...","")
      }
      var buttonSound= new Audio("audio/Security/button.wav");
      buttonSound.play();
      firstTime = false;
      //Make buttons disappear when pressed
      switch(number){
        case 1:
          document.getElementById("firstbutton").style.display="none";
          enteredCode += number;
          buttonsPressed++;
          break;
        case 2:
          document.getElementById("secondbutton").style.display="none";
          enteredCode += number;
          buttonsPressed++;
          break;
        case 3:
          document.getElementById("thirdbutton").style.display="none";
          enteredCode += number;
          buttonsPressed++;
          break;
        default:
          alert("Error in switch of button locks");
          break;
      }




      writeText("Button " + number + " pressed...","");
      //Reset if its been pressed 3 times
      if(buttonsPressed >= 3){
        //Correct order of button press

          if(enteredCode == lockCode){
            cluesFound++;
            var mechSound = new Audio('audio/Security/doorMech.wav');
            mechSound.play();
            //Switch to display diffferent door mechanism unlock message depending on clues found
            switch (cluesFound) {
              case 1:
                cluesText = " <br> -Clues found(" + cluesFound + "/3) 1 of the door's locks have been disabled-";
                break;
              case 2:
                cluesText = " <br> -Clues found(" + cluesFound + "/3) You hear another mechanism shifting behind the wall...-";
                break;
              case 3:
                cluesText = " <br> -Clues found(" + cluesFound + "/3) The last lock has been disabled-";
                break;
              default:
                alert("Error in clues found switch JS WiresClick");
                break;
            }


            //Hide buttons
            document.getElementById("firstbutton").style.display="none";
            document.getElementById("secondbutton").style.display="none";
            document.getElementById("thirdbutton").style.display="none";

            writeText("It seems that the buttons were pressed in the correct order... ",cluesText)
          }
          else{ //Incorrect order of button press
            var errorSound = new Audio('audio/Security/error.wav');
            errorSound.play();

            writeText("Buttons were pressed in the wrong order. No locks were disabled","");
            document.getElementById("firstbutton").style.display="initial";
            document.getElementById("secondbutton").style.display="initial";
            document.getElementById("thirdbutton").style.display="initial";
          }
          enteredCode = "";
          buttonsPressed = 0;
        }

    }

    //Expand the note image
    function expand(){
      var paperSound = new Audio('audio/Security/note.wav');
      paperSound.play();

      document.getElementById("myModal").style.display = "block";
      document.getElementById("expandedNote").src = "img/Security/BloodNoteForTim.jpg";
      document.getElementById("caption").innerHTML = "Dr Friedlich's Notes";
    }


    // When the user clicks on <span> (x), close the note
    function closeNote() {
      document.getElementById("myModal").style.display = "none";
      document.getElementById("wiresModal").style.display = "none";
    }

    //Expand the note image
    function expandWires(){

      var image = document.getElementById("roomImg");
      image.src="img/Security/Wires.png";
      //image.Width = "600px";
      //room = "wires";

      //Hide all bootons
      document.getElementById("wiresbutton").style.display = "none";
      document.getElementById("doorbutton").style.display = "none";
      document.getElementById("firstbutton").style.display = "none";
      document.getElementById("secondbutton").style.display = "none";
      document.getElementById("thirdbutton").style.display = "none";

      //Show Wires Elements
      document.getElementById("backButton").style.display = "block";
      document.getElementById("leftWire").style.display = "block";

      //moveTorch(event);

    }

    // When the user clicks on <span> (x), close the note
    function closeNote() {
      document.getElementById("myModal").style.display = "none";
      document.getElementById("wiresModal").style.display = "none";

    }


    function moveTorch() {
      if(torch){
      document.getElementById("light").style.display="block";


      //Show buttons when torch on
      document.getElementById("wiresbutton").style.display="block";

      var pos = document.documentElement;

      var test = document.getElementById("imageDiv");
      var rect = test.getBoundingClientRect();

      var viewportLeft = rect.left;
      var viewportTop = rect.top;

      var x = event.clientX; // x co-ord of Window
      var y = event.clientY; // y co-ord of Window

      pos.style.setProperty('--x', (x - viewportLeft) + 'px');
      pos.style.setProperty('--y', (y - viewportTop) + 'px');

      if(light == "on"){
        light = "off";

        var fuseSound = new Audio("audio/Security/fuseSound.wav");
        fuseSound.play();

      }
    }
      // var pos = document.documentElement;
      //
      // var test = document.getElementById("wiresImage");
      // var rect = test.getBoundingClientRect();
      //
      //
      // var viewportLeft = rect.left;
      // var viewportTop = rect.top;
      //
      // var x = event.clientX; // x co-ord of Window
      // var y = event.clientY; // y co-ord of Window
      //
      // //Offsets for torch
      // var offsetY = test.clientHeight/1.98;
      // var offsetX = test.clientWidth/1.91;
      //
      // pos.style.setProperty('--x', (x - offsetX) + 'px');
      // pos.style.setProperty('--y', (y - offsetY) + 'px');
    }
