$(document).ready(function() {
    function bounceArrow() {
        $('.scroll-icon').animate({
            'top': '20px'
        }, 1000, 'swing').animate({
            'top': '0px'
        }, 1000, 'swing', bounceArrow);  
    }

    bounceArrow();  
});
