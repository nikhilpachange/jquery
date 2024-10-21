$(document).ready(function() {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    let currentIndex = 0;

    function updateImage() {
        $('#carousel-image').attr('src', images[currentIndex]);
    }

    $('.next').click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    $('.prev').click(function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
});
