$(document).ready(function() {
    $('#add-note').click(function() {
        const noteText = $('#note-input').val();
        if (noteText.trim() === '') {
            alert('Please enter a note!');
            return;
        }

        const noteItem = $(`
            <li class="note-item">
                <span>${noteText}</span>
                <button class="delete-note">Delete</button>
            </li>
        `);
        $('#notes-list').append(noteItem);
        $('#note-input').val('');

        noteItem.find('.delete-note').click(function() {
            $(this).parent().remove();
        });
    });
});
