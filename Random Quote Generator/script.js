$(document).ready(function() {
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Life is what happens when you're busy making other plans.",
        "You only live once, but if you do it right, once is enough.",
        "In the end, we will remember not the words of our enemies, but the silence of our friends."
    ];

    $('#new-quote').on('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        $('#quote').text(quotes[randomIndex]);
    });
});
