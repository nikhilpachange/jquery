$(document).ready(function() {
    let result = '';

    $('.btn').on('click', function() {
        const value = $(this).data('value');

        if (value === 'C') {
            result = '';
        } else if (value === '=') {
            try {
                result = eval(result);
            } catch (e) {
                result = 'Error';
            }
        } else {
            result += value;
        }

        $('#result').val(result);
    });
});
