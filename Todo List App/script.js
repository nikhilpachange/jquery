$(document).ready(function() {
    $('#add-task').on('click', function() {
        let taskInput = $('#task-input').val();
        if (taskInput) {
            $('#task-list').append(`<li>
                <span>${taskInput}</span>
                <button class="delete-btn"></button>
            </li>`);
            $('#task-input').val('');
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).find('span').toggleClass('completed');
    });

    $('#task-list').on('click', '.delete-btn', function() {
        $(this).parent().remove();
    });
});
