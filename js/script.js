var slideIndex = 0;

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function startSlideshow() {
        showSlides();
        setInterval(showSlides, 2000);
    }

    document.addEventListener('DOMContentLoaded', startSlideshow);

    function validateForm() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var category = document.getElementById("categories").value;

        if (name === "" || email === "" || category === "") {
            alert("Lengkapi semua kolom");
            return false;
        }

        return true;
    }