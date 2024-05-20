document.addEventListener("DOMContentLoaded", function() {
    var navContents = [];
    for (var i = 1; i <= 5; i++) {
        navContents.push(document.getElementById("nav-content" + i));
    }

    var navBtns = [];
    for (var i = 1; i <= 5; i++) {
        navBtns.push(document.getElementById("nav-btn" + i));
    }

    function openContent(index) {
        for (var i = 0; i < 5; i++) {
            if (i === index) {
                navContents[i].style.transform = "translateX(0)";
                navBtns[i].classList.add("active");
            } else {
                navContents[i].style.transform = "translateX(100%)";
                navBtns[i].classList.remove("active");
            }
            navContents[i].style.transitionDelay = (i === index) ? "0.3s" : "0s";
        }
    }

    for (var i = 0; i < 5; i++) {
        navBtns[i].addEventListener("click", (function(index) {
            return function() {
                openContent(index);
            };
        })(i));
    }

    openContent(0);
});
