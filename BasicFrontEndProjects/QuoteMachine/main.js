$(document).ready(function() {
  //Initialization
  var elemForQuote = 0;
  var elemForPeople = 0;
  var arrOfQuotes = ["To me, the extraordinary aspect of martial arts lies in its simplicity. The easy way is also the right way, and martial arts is nothing at all special; the closer to the true way of martial arts, the less wastage of expression there is.", "The important thing is not to stop questioning. Curiosity has its own reason for existing.", "Insanity: doing the same thing over and over again and expecting different results.", "The beginning is the most important part of the work.", "One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.", "Whatever you are, be a good one.", "You cannot escape the responsibility of tomorrow by evading it today.", "Real knowledge is to know the extent of one's ignorance.", "It does not matter how slowly you go so long as you do not stop."];
  var arrOfPeople = ["Bruce Lee", "Albert Einstein", "Albert Einstein", "Plato", "Plato", "Abraham Lincoln", "Abraham Lincoln", "Confucius", "Confucius"];
  $("#bttn").on('click', function() {
    elemForQuote = Math.floor((Math.random() * arrOfQuotes.length)); //generates a random number 0 - length of arrOfQuotes
    elemForPeople = elemForQuote; //set elemForPeople to index of the coresponding quotee
    $(".quote").text(arrOfQuotes[elemForQuote]);
    $(".people").text(arrOfPeople[elemForPeople]);
    $(".people").prepend("--"); //adds the double hyphen before the quotee's name

  });
  
});
