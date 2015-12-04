//Run Reset
var resetToggle = 0;

function restTimer() {
    var ttime = $('#reset').text();
    var setMinutes = ttime * 60;
    startTimer(setMinutes, display);
    resetToggle = 1;
}
//Runs Timer
function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    console.log(timer);
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            while (resetToggle = 0) {
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

    //Starts Timer on Click

    $(".glass").click(function () {
        var ttime = $('#ttime').text();
        var setMinutes = ttime * 60;
        startTimer(setMinutes, display);

    });
});