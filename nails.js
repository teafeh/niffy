window.addEventListener("load", function(){
    this.setTimeout(function(){
        var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    preloader.style.display = "none";
    content.style.display = "block";

    }, 2000)
    
});

$(document).ready(function(){
    $('#myCarousel').carousel({
        interval: 5000,  // Autoplay with a delay of 2000ms
        ride: 'carousel'
    });
    
    var carousel = document.querySelector('#myCarousel');
    document.querySelector('.carousel-control-prev-icon').addEventListener('click', function(){
        $('#myCarousel').carousel('prev');
    })
    document.querySelector('.carousel-control-next-icon').addEventListener('click', function(){
        $('#myCarousel').carousel('next');
    })
});
