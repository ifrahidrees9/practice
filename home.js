 // ***  HEADER & FOOTER  ***

          // Function to dynamically load the CSS
          function loadCSS(href) {
            var link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = href;
            document.head.appendChild(link);
        }

        // Load header and footer dynamically
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                // Create a temporary container to hold the loaded HTML
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = data;

                // Extract the header and footer content
                const headerContent = tempDiv.querySelector('header').outerHTML;
                const footerContent = tempDiv.querySelector('footer').outerHTML;

                // Insert the header and footer content into the respective elements
                document.getElementById('header-placeholder').innerHTML = headerContent;
                document.getElementById('footer-placeholder').innerHTML = footerContent;

                // Load the CSS dynamically
                loadCSS('header.css');

                // Call function to add active class after header content is loaded
                addActiveClassToNavLink();
            });

        // Function to add active class to navigation links
        function addActiveClassToNavLink() {
            var currentUrl = window.location.href;

            // Object to store page URLs and their corresponding navigation link IDs
            var pageLinks = {
                'index.html': 'homeLink',
                'blog.html': 'blogLink',
                'about.html': 'aboutLink',
                'contact.html': 'contactLink',
            };

            // Iterate over the pageLinks object and add the 'active' class to the corresponding navigation link
            for (var pageUrl in pageLinks) {
                if (currentUrl.endsWith(pageUrl)) {
                    document.getElementById(pageLinks[pageUrl]).classList.add('active');
                }
            }
        }
        

         // ***  CAROUSEL SLIDER ***

// Access the Images
let slideImages = document.querySelectorAll('.slider .carousel-image');

// Preload images
slideImages.forEach(img => {
    new Image().src = img.src;
});

// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// Code for next button
next.addEventListener('click', slideNext);
function slideNext() {
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if (counter >= slideImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

// Code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if (counter == 0) {
        counter = slideImages.length - 1;
    } else {
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Auto sliding
function autoSliding() {
    deletInterval = setInterval(timer, 3000);
    function timer() {
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function () {
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

// Add and remove active class from the indicators
function indicators() {
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// Add click event to the indicator
function switchImage(currentImage) {
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter) {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    } else if (imageId == counter) {
        return;
    } else {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}


 // ***  NAV TAB ***
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



    // ***  ACCORDION ***

    const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const qsnBtn = question.querySelector('.question-btn');
    qsnBtn.addEventListener('click', function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle("show-text");
    });
});


