  var gameDialog = "<p> Seems like this is the room Dr Friedrich used this room to monitor his subjects </p>";
  var cluesFound = 0;
  var cluesText = " <br> -Clues found(" + cluesFound + "/3) Part of the door unlocks-";

  //When the wires are clicked
  function wiresClick(){
    var wiresButton = document.getElementById("wiresbutton");
    wiresButton.style.display = "none";
    cluesFound++;

    //Switch to display diffferent door mechanism unlock message depending on clues found
    switch (cluesFound) {
      case 0:
        cluesText = " <br> -Clues found(" + cluesFound + "/3) 1 of the door's locks have been disabled-";
        writeText('You have reconnected the loose wire',cluesText);
        break;
      case 1:
      case 2:
        cluesText = " <br> -Clues found(" + cluesFound + "/3) You hear another mechanism shifting behind the wall...-";
        writeText('You have reconnected the loose wire',cluesText);
        break;
      case 3:
        cluesText = " <br> -Clues found(" + cluesFound + "/3) The last lock has been disabled-";
        writeText('You have reconnected the loose wire',cluesText);
        break;
      default:
        alert("Error in clues found switch JS WiresClick");
        break;
    }

  }

  //Function to output text in the game speech part
  function writeText(text,cluesText){
    gameDialog += "<p> <br>"+ text + cluesText + "</p>";
    document.getElementById('gameText').innerHTML = (gameDialog);
  }

  //When the exit door is clicked
  function exit(){
    if(cluesFound == 3){
      writeText("You have escaped the security room!","");
    }
    else if(cluesFound == 2){
      writeText("Door still seems to be locked <br> 2/3 Locks are disabled","");
    }
    else if(cluesFound == 1){
      writeText("Door still seems to be locked <br> 1/3 Locks are disabled","");
    }
    else if(cluesFound == 0){
      writeText("The door seems to have a 3 layer lock. <br> 0/3 Locks are disabled","");
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
            cluesText = " <br> -Clues found(" + cluesFound + "/3) 1 of the door's locks have been disabled-";

            //Hide buttons
            document.getElementById("firstbutton").style.display="none";
            document.getElementById("secondbutton").style.display="none";
            document.getElementById("thirdbutton").style.display="none";

            writeText("You hear a mechanism behind the wall shift. ",cluesText)
          }
          else{ //Incorrect order of button press

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
      document.getElementById("wiresModal").style.display = "block";
      document.getElementById("expandedWires").src = "img/Security/Wires.png";
      document.getElementById("captionWires").innerHTML = "The left wire seems to be loose. Maybe I can reconnect them somehow...";
    }
