var timePassed=0; //record how long the user spent in this room (seconds)
var code; //code entered in by user to escape

var noKeys = 0; //used to check user has collected keys before escpaing
var txt; //text to output to user

var keyCode=[];
var keyPadCode = 420;


//Displays the code to unlock the final door (code=420)
function displayCode(){
  //records when the user activates this function (when user clicks exit door)
  //this is being recorded to find out how long the user is in the Function
  //prompt box stops the java timer, this calculates how long in function and takes it off remaining time
  var startTime = new Date();
  //text to prompt user to enter a code in
  code = prompt("Enter the code to escape!: " + noKeys);
  //records end time user has been in function - used to calc full time user spent entering in a code before closing prompt box
  var endTime = new Date();
  //time spent in function
  var timeSpent = endTime-startTime;

  timeSpent = timeSpent/1000;
  timer-=timeSpent;
  sessionStorage.setItem("exitTime", timePassed);

  if(timer<=0){
    //If the time is up - brings user to the end screen to show stats
    window.location.href = 'endScreen.html';
    //This variable is use to decide which image of the doctor to display
    var winGame = "lose";
    //sets gamePlay to lose to display correct doctor picture and Stats
    //saves the variable as sessionStorage so the exit page can access it
    sessionStorage.setItem("winGame", winGame);
  } else{
    //checks if the user has entered in a code or not
    if (code == null || code == "") {
      txt = "[System]:User cancelled the prompt.";
      //checks for correct entering in of code AND the user has collected all 3 keys before moving on
    } else if(code=="420" && noKeys==3){
      //saves the gamePlay to win to get Win Doctor picture and correct stats
      var winGame = "win";
      sessionStorage.setItem("winGame", winGame);
      window.location.href = 'endScreen.html';
      //If the user has attempted a code and is incorrect, this checks to see if a user has the 3 Keys
    }else if(noKeys<3){
      txt = "[System]: Hmm.. Looks like theres 3 locks, make sure to collect the keys before escaping!";
    }
    //else the user is told the code is incorrect
    else {
      txt = "<p>[System]:That code is incorrect</p>";
    }
  }
  //REMOVE PART OF LATER
  //Outputs to the user the txt in the 'GameText' area
  //timeSpent - records how long a person was in the prompt box
  document.getElementById("gameText").innerHTML += txt + ' <br><br>' + timeSpent;

  }



    function keyFound(keyType){
      //adds Key - used to check if user has collected keys before entering in a code
      noKeys+=1;
      var x;
      //switches depending which key found
      switch(keyType){
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
      if(noKeys==1){
        txt+=' 1/3 Keys found! Keep Searching! </p><br>';
      }else if(noKeys==2){
        txt+=' 2/3 Keys found! Keep Searching! </p><br>';
      }else{
        txt+='3/3 Keys found! All keys have been found, I can hear Dr Friedrich getting close! Better escape soon! </p><br>';
      }
      //displays output to gameText area
      document.getElementById('gameText').innerHTML += txt;
      //hides button that displayed key
      x.style.display = "none";

    }

    //Expand the key image
    function expand(colour){
      //holds which image to display in modal box
      var imageToShow;
      //holds the alt tag for accessibility
      var altTxt;
      var captionKey="";
      //depends on which key button has been pressed
      if(colour=='blue'){
        imageToShow = "img/Exit/blueKey.png";
        captionKey = "You search the safe and find a blue key! The Key has a number - make sure to remember it!"
        altTxt = 'Blue Key';
      }else if (colour=='purple'){
        imageToShow = "img/Exit/purpleKey.png";
        captionKey = "The Key has a number - make sure to remember it!"
        altTxt = 'Purple Key';
      }else if (colour=='gold'){
        imageToShow = "img/Exit/goldKey.png";
        captionKey = "The Key has a number - make sure to remember it!"
        altTxt = 'Gold Key';
      }
      //displays close up of image to user
      //displays modal div
      document.getElementById("myModal").style.display = "block";
      //changes src of image to correct key
      document.getElementById("expandedKey").src = imageToShow;
      //changes alt of image to correct key
      document.getElementById("expandedKey").alt = altTxt;
      //hint for users to remember code on key
      document.getElementById("caption").innerHTML = captionKey;

    }


        // When the user clicks on <span> (x), close the note
        function closeKey(closeModal) {
          if(closeModal=='key'){
            document.getElementById('myModal').style.display = "none";
          }else if (closeModal=='lockModal'){
            document.getElementById('lockModal').style.display = "none";
            keyCode=[];
          }

        }

    //Expand the note image
    function expandKeypad(){
      document.getElementById("lockModal").style.display = "block";
      document.getElementById("expandedKeypad").src = "img/Exit/keypad.jpg";
      document.getElementById("expandedKeypad").alt = "KeyPad";
      document.getElementById("expandedKeypad").style.height = '50%';
      document.getElementById("captionKeypad").innerHTML = "Enter the 3 Digit Code!";
    }


        //keypad entering in the Code
        function enterKeyCode(btnPressed){
          if(btnPressed == '0' || btnPressed == '1' || btnPressed == '2' || btnPressed == '3' || btnPressed=='4' || btnPressed== '5' || btnPressed == '6' || btnPressed =='7' || btnPressed =='8' || btnPressed== '9'){
            keyCode.push(Number(btnPressed));
          }else if(btnPressed=='submit'){
            // var keyPadCode = 420; - CORRECT CODE
            var userEnter="";
            var lenCodeEnter = keyCode.length;
            for(i=0;i<lenCodeEnter;i++){
                  //document.getElementById('gameText').innerHTML += '<p>'+ keyCode[i]+'</p>';
                  userEnter = (keyCode.pop()).toString() + userEnter;
            }

            if(lenCodeEnter>3 || lenCodeEnter<3){
                    document.getElementById("captionKeypad").innerHTML += "<p>the code should be 3 numbers! Try Again!</p>";
                    keyCode = [];
            }else if (lenCodeEnter==3  && userEnter!=keyPadCode){
              document.getElementById("captionKeypad").innerHTML += "<p>Wrong code! Try again (hint: Look at the walls)</p>";
            }else if (lenCodeEnter==3  && userEnter==keyPadCode){
             document.getElementById('keyPad').style.display="none";
             closeKey('lockModal');
             keyFound('blue');
            }
          }
        }


        //Torch attempt
        function moveTorch(event){
          var torch = document.getElementsByClassName("torch")[0];
          if(event.target.id == "leftWire" ) {
            torch.style.clipPath = `circle(80px at 270px 160px)`;
          }
          else if(event.target.className =="close"){

          }
          else{
          torch.style.clipPath = `circle(80px at ${event.offsetX}px ${event.offsetY}px)`;
        }
        }
