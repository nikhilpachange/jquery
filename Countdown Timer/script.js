$(document).ready(function() {
    let timer;

    $('#start-timer').on('click', function() {
        clearInterval(timer);
        let minutes = $('#minutes').val();
        let timeInSeconds = minutes * 60;
        $('#timer-display').text(`Time left: ${minutes} minutes`);

        timer = setInterval(function() {
            timeInSeconds--;
            let mins = Math.floor(timeInSeconds / 60);
            let secs = timeInSeconds % 60;

            if (timeInSeconds <= 0) {
                clearInterval(timer);
                $('#timer-display').text("Time's up!");
            } else {
                $('#timer-display').text(`Time left: ${mins} minutes ${secs} seconds`);
            }
        }, 1000);
    });
});
