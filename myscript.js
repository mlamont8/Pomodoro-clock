var resetToggle = 0;
var display = document.querySelector('.timer');

//Runs Reset after Initial Run
function restTimer() {
    var ttime = $('#reset').text();
    var setMinutes = ttime * 60;
    $('status').empty();
    $('status').html('RESETTING');
    startTimer(setMinutes, display);
    resetToggle = 1;
}
//Runs Timer
function startTimer(duration, display) {
    var timer = duration;
    var minutes = "0";
    var seconds = "0";
    console.log(timer);
    setInterval(function () {
        var display = document.querySelector('.timer');
        console.log(display);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            if (resetToggle === 0) {
                timer = null;
                clearInterval(timer);
                restTimer();
            }
            timer = null;
            clearInterval(timer);

        }
    }, 1000);

}


$(document).ready(function () {
$("#spinner, .pauseButton").hide();
   
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
            return +val + 1;
        });
    });

    //When clicker div is clicked, hourglass is removed, spinner is shown until either another click or timer is expired.

    $(".clicker").click(function () {
        var ttime = $('#ttime').text();
        var setMinutes = ttime * 60;
        $(".mainButton, .adjustButton").hide();
        $(".pauseButton, #spinner").show();
        $('.status').html('TIMER');
        startTimer(setMinutes, display);

    });
});