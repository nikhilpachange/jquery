$(document).ready(function() {
    const quizData = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        }
    ];

    quizData.forEach((quiz, index) => {
        $('#quiz').append(`<div class="question">${quiz.question}</div>`);
        quiz.options.forEach(option => {
            $('#quiz').append(`
                <label class="option">
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `);
        });
    });

    $('#submit-quiz').on('click', function() {
        let score = 0;
        quizData.forEach((quiz, index) => {
            const selected = $(`input[name="question${index}"]:checked`).val();
            if (selected === quiz.answer) {
                score++;
            }
        });
        $('#result').html(`<h2>Your Score: ${score}/${quizData.length}</h2>`);
    });
});
