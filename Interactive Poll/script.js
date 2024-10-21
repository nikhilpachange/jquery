$(document).ready(function() {
    let votes = { Red: 0, Blue: 0, Green: 0, Yellow: 0 };

    $('.poll-option').click(function() {
        const selectedOption = $(this).text();
        votes[selectedOption]++;

        $('#poll-options').hide();
        $('#poll-result').html(`<h2>Results:</h2>
            <p>Red: ${votes.Red}</p>
            <p>Blue: ${votes.Blue}</p>
            <p>Green: ${votes.Green}</p>
            <p>Yellow: ${votes.Yellow}</p>`).show();
    });
});
