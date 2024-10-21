$(document).ready(function() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let currentIndex = 0;

    function updateImage() {
        $('#slide').attr('src', images[currentIndex]);
    }

    $('#next').on('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    $('#prev').on('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
});
