var myTimer; //counts time in room
var timePassed=0; //record how long the user spent in this room
var duration =(60*1000); //in milliseconds - 1min to escape
var code; //code entered in by user to escape

var noKeys = 0; //used to check user has collected keys before escpaing
var txt; //text to output to user


//Displays the code to unlock the final door (code=420)
function displayCode(){
  //records when the user activates this function (when user clicks exit door)
  //this is being recorded to find out how long the user is in the Function
  //prompt box stops the java timer, this calculates how long in function and takes it off remaining time
  var startTime = new Date();
  //text to prompt user to enter a code in
  code = prompt("Enter the code to escape!: ");
  //records end time user has been in function - used to calc full time user spent entering in a code before closing prompt box
  var endTime = new Date();
  //time spent in function
  var timeSpent = endTime-startTime;
  duration-=timeSpent;

  if(duration<=0){
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


  //TIMER FOR 60 Seconds escape!
    function startTimer(){
      //This is used to count up every 1 second (1000 milliseconds)
      myTimer = setInterval('countdown()',1000);
      //adds 1sec to the timePassed variable - used to calc how long spend in room (stats page)
      timePassed+=1000;
    }

    function stopTimer(){
        //used to clear timer.
        clearInterval(myTimer);
    }
    //Checks if game over or 30s left of game - output to user/change html
    function countdown(){
        timePassed+=1000; //used to calc how long a user has spent in room
        duration-=1000; //takes off 60s

        //halfway mark - displayed to user
        if(duration==30000){
          document.getElementById('gameText').innerHTML+='<p>[System]: You hear a creek of floor boards, Dr Friedrich is getting closer, better hurry up!</p><br><br>';
          //EDIT LATER? - used to display timer to gametext area
        }else if(duration>=0 && duration !=30000){
            document.getElementById('timer').innerHTML = duration;
        } else{
          //Stops timer, game over - display end screen
            stopTimer();
            var winGame = "no";
            sessionStorage.setItem("winGame", winGame);
            window.location.href = 'endScreen.html';
        }
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
          hasBlueKey = true;
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
      //depends on which key button has been pressed
      if(colour=='blue'){
        imageToShow = "img/Exit/blueKey.png";
        altTxt = 'Blue Key';
      }else if (colour=='purple'){
        imageToShow = "img/Exit/purpleKey.png";
        altTxt = 'Purple Key';
      }else if (colour=='gold'){
        imageToShow = "img/Exit/goldKey.png";
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
      document.getElementById("caption").innerHTML = "The Key has a number - make sure to remember it!";
    }

    // When the user clicks on <span> (x), close the note
    function closeKey() {
      document.getElementById("myModal").style.display = "none";
    }
