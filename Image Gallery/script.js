$(document).ready(function() {
    $('.gallery-item').on('click', function() {
        let src = $(this).attr('src');
        $('body').append(`<div class="lightbox">
            <img src="${src}" class="lightbox-img">
            <span class="close">&times;</span>
        </div>`);
    });

    $(document).on('click', '.close', function() {
        $('.lightbox').remove();
    });
});
