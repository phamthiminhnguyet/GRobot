    // Add active class to the current button (highlight it)
    var header = document.getElementById("cardDiv");
    var btns = header.getElementsByClassName("card-explore");
    var audioctrl = document.getElementById("myAudio");
    for (var i = 0; i < btns.length; i++) 
    {
        btns[i].addEventListener("click", 
        function() {
            var current = document.getElementsByClassName("activeexp");
            current[0].className = current[0].className.replace(" activeexp", "");
            this.className += " activeexp";
            console.log(this.slideIndex);
            }
        );
        
    }

    function showDesc(n) {
        var i;
        var dots = document.getElementsByClassName("box-desc-card");
        if (n > dots.length) {n = 1}    
        if (n < 1) {n = dots.length}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" desc-ctrl", "");
        } 
        dots[n-1].className += " desc-ctrl";
    }

    var vd = document.getElementsByClassName("video-howtoplay");
    var info = document.getElementsByClassName("detail-story");
    
    function closeVideo(){
        vd[0].style.display ="none";
        info[0].style.display ="none";
        $('iframe').attr('src', $('iframe').attr('src'));
        if(audioctrl.currentTime != 0){
            audioctrl.play();
        }
    }
    function openvideo(){
        audioctrl.pause();
        vd[0].style.display ="block";
    }
    function openifo(){
        info[0].style.display = "inherit"
    }
    function checkmail(){
        alert("Thank you! Check your mail box for more details.");
    }
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("card");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activee", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " activee";
    }

var btn = document.getElementById("myBtn");

function scrollfn(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
}


window.onscroll = function(){scrollfn()};

function topFunction() {
    window.history.replaceState("", document.title, window.location.pathname);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const cursor = document.querySelector(".cursors");
var timeout;