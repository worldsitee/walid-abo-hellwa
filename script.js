// JavaScript to toggle the visibility of the nav list and change the button icon
document.getElementById('toggle-btn').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    var toggleBtn = document.getElementById('toggle-btn');
    
    // Toggle the 'show' class to open/close the nav list
    navList.classList.toggle('show');
    
    // Toggle the 'open' class to change the icon to "X"
    toggleBtn.classList.toggle('open');
});
