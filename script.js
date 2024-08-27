document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const closeButton = document.querySelector('.close-button');
    const aside = document.querySelector('.aside');
    const content = document.querySelector('.content');

    toggleButton.addEventListener('click', function() {
        aside.classList.toggle('active');
        content.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
        aside.classList.remove('active');
        content.classList.remove('active');
    });
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleMediaQueryChange(event) {
        if (event.matches) {
            aside.classList.remove('active');
            content.classList.remove('active');
        } else{
            aside.classList.addClass('active');
            content.classList.addClass('active');
        }
    }
    
    mediaQuery.addListener(handleMediaQueryChange);
    
    handleMediaQueryChange(mediaQuery);
});

// img-dropdown

document.addEventListener('DOMContentLoaded', function() {
    var toggleImg = document.getElementById('imgtoggleDropdown');
    var imgdropdownMenu = document.getElementById('imgdropdownMenu');

    toggleImg.addEventListener('click', function() {
        // Toggle visibility of the dropdown menu
        if (imgdropdownMenu.style.display === 'block') {
            imgdropdownMenu.style.display = 'none';
        } else {
            imgdropdownMenu.style.display = 'block';
        }
    });

    // Hide dropdown if clicked outside of it
    document.addEventListener('click', function(event) {
        if (!toggleImg.contains(event.target) && !imgdropdownMenu.contains(event.target)) {
            imgdropdownMenu.style.display = 'none';
        }
    });
});

