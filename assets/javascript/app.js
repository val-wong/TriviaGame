//This code will run as soon as the page loads.
window.onload = function(){
	$('#start').click(timer.start);
}

//Our timer object
var timer = {

	time: 50,

	start: function(){
		//Use setInterval to start the count.
		counter = setInterval(timer.count, 1000);

	},

	count: function(){
		//Decrement time by 1
		timer.time--;

		//Create a variable to store our current time that we'll pass to the time converter function so that it will display to user
		var converted = timer.timeConverter(timer.time);

		// Use var converted to show the converted time in the "display" div
		$('#display').html(converted)
	},


		 // If the count down is finished, write some text 

		 // -------- don't know how to timeout when time=0

	timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
