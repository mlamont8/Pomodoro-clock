// Uses Jquery-timer to start, pause and increment timer.  found at https://github.com/jchavannes/jquery-timer


var currentTime, count = 0; 


var timer = new (function() {

    var $countdown;
    var $form;
    var incrementTime = 70;
       
    $(function() {

        // Setup the timer
        $countdown = $('#countdown');
        timer.Timer = $.timer(updateTimer, incrementTime, false);

    });

    function updateTimer() {

        // Output timer position
        var timeString = formatTime(currentTime);
        $countdown.html(timeString);

        // If timer is complete, check to see if reset timer has run, if not, reset time and run again.  If so, send alert.
        if (currentTime === 0) {
            
            console.log(count);
            if (count === 1){
            timer.Timer.stop();
            alert('Pomodoro Clock Complete!');
            //timer.Timer.resetCountdown();
                $("#spinner, .pauseButton, .resumeButton, .status, stopButton").hide();
                $('.mainButton').show();
            return;
            }
            currentTime = $('#reset').text() * 60000;
            count += 1;
            $('.status').html('RESET TIMER');
        }

        // Increment timer position
        currentTime -= incrementTime;
        if (currentTime < 0) currentTime = 0;

    }


});

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    time = time / 10;
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60);
    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2);
}


$(document).ready(function () {
$("#spinner, .pauseButton, .resumeButton, .stopButton").hide();
   
    var display = document.querySelector('.timer');
    $('button').addClass('disabled');

    // Updates time
    $("#glyphPlusTime").click(function () {
        $('#ttime').html(function (i, val) {
            return +val + 1;
        });
    });
    $("#glyphMinusTime").click(function () {
        $('#ttime').html(function (i, val) {
            return +val - 1;
        });
    });
    $("#glyphPlusReset").click(function () {
        $('#reset').html(function (i, val) {
            return +val + 1;
        });
        //Updates Reset Time
    });
    $("#glyphMinusReset").click(function () {
        $('#reset').html(function (i, val) {
            return +val - 1;
        });
    });

 

    $(".clicker").click(function () {
        $('.status').empty();
        var ttime = $('#ttime').text();
        currentTime = ttime * 60000;
        $(".mainButton, .adjustButton").hide();
        $(".pauseButton, .stopButton, #spinner").show();
        $('.status').append('SESSION TIMER');
       
            timer.Timer.play();

// When Pause button is selected, timer is paused, spinner is removed, resume button is shown, pause button is removed.
    });
    $(".pauseButton").click(function(){
        $(".pauseButton, #spinner, .stopButton").hide();
        $(".resumeButton").show();
        timer.Timer.pause();
    });
    // When resumed, pause and spinners are shown, resume is removed, timer is continued.
    $(".resumeButton").click(function(){
     $(".pauseButton, #spinner, .stopButton").show();
        $(".resumeButton, .adjustButton").hide();
        timer.Timer.play();
    });
    // Stop button resets timer
    $(".stopButton").click(function(){
        $(".pauseButton, #spinner, .stopButton").hide();
        $('.adjustButton, .mainButton').show();
        $('.status').empty();
        $('.status').append('TIMER STOPPED');
        timer.Timer.stop();
    });

});