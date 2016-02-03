$(document).ready(function() {
  //Initialization
  //var studyTime = $("#timer1").html();
  //var breakTime = $("#timer2").html();

  var studyTime = 10;
  var breakTime = 5;
  var isStudySession = false;
  var isBreakSession = false;
  var totalStudySeconds;
  var totalBreakSeconds;
  var timerID; //unique ID for the study session
  var timerID2; //unique ID for the break session
  var stillTime; //not used
  var milliSecs, mins, secs;
  
//   function convertTime(totalSeconds){
//     milliSecs = studyTime*60*1000;
//     mins = Math.floor(milliSecs%3600/60);
//     secs = Math.floor(totalSeconds%3600%60);
//     return ();
//   }

  $(".buttons").on('click', function() {
    if ($(this).is('#subtract1')) {
      if (studyTime > 1) { //if studyTime is 1 do not subtract
        studyTime = studyTime - 1;
        $("#timer1").html(studyTime);
      }
    }
    if ($(this).is('#add1')) {
      studyTime = studyTime + 1;
      $("#timer1").html(studyTime);
    }
    if ($(this).is('#subtract2')) {
      if (breakTime > 1) { //if studyTime is 1 do not subtract
        breakTime = breakTime - 1;
        $("#timer2").html(breakTime);
      }
    }
    if ($(this).is('#add2')) {
      breakTime = breakTime + 1;
      $("#timer2").html(breakTime);
    }
  });

  //event listener for start/stop/reset
  $('.buttons2').on('click', function() {
    if ($(this).is('#startBtn')) {
      if (!isStudySession) { //not in study session
        //isStudySession = true; //prevent user from clicking start multiple times
        timerID = setInterval(updateStudyTime, 1000); //when the start button is clicked, start the timer
       }
      //timerID = setInterval(updateStudyTime, 1000); //when the start button is clicked, start the timer
    }
    //----------studyTimer---------------------------------

    //totalStudySeconds = convertTime(studyTime);
    totalStudySeconds = studyTime * 1;

    function updateStudyTime() {
      isStudySession = true; //prevent user from clicking start multiple times
      totalStudySeconds = totalStudySeconds - 1; //subtract one second
      $("#seconds").html(totalStudySeconds);
      if (totalStudySeconds === 0) { //end timer if the timer goes to zero before the user clicks stop
        isStudySession = false; // study session is over
        clearInterval(timerID);
        timerID = null; //reset the unique timerID variable
        alert("zomg study time is up!");
        timerID2 = setInterval(updateBreakTimer, 1000); // call break timer to start
      }
    }
    //---------breakTimer----------------------------
    totalBreakSeconds = 1 * breakTime;

    function updateBreakTimer() {
      isBreakSession = true;
      totalBreakSeconds = totalBreakSeconds - 1; //subtract one second
      $("#seconds").html(totalBreakSeconds);
      if (totalBreakSeconds === 0) { //end timer if the timer goes to zero before the user clicks stop
        isBreakSession = false; //Break session is over
        clearInterval(timerID2);
        timerID2 = null; //reset the unique timerID variable
        alert("zomg break time is up!");
      }
    }
    if ($(this).is('#stopBtn')) {
      
      clearInterval(timerID);
      timerID = null; //reset the unique timerID variable
      isStudySession = false;  //------------------------------------currently having this just allows the timer to restart from the study sessions initial time
      clearInterval(timerID2);
      timerID2 = null; //reset the unique timerID variable
    }
    if ($(this).is('#resetBtn')) {
        
      isStudySession = false;
      isBreakSession = false;
//       if (isStudySession) { //if current session is study session 
        
//       }
      clearInterval(timerID);
      timerID = null; //reset the unique timerID variable
      //isStudySession = false;
      clearInterval(timerID2);
      timerID2 = null; //reset the unique timerID variable
      totalStudySeconds = studyTime * 1; //subtract one second
      $("#seconds").html(totalStudySeconds);
      totalBreakSeconds = 1 * breakTime;
    }
  });

});
