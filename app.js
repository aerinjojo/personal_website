// Highlight the current page in the navigation bar
document.addEventListener('DOMContentLoaded', function() {
  var path = window.location.pathname;
  var page = path.split("/").pop();
  var navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(function(item) {
    var link = item.querySelector('a').getAttribute('href');
    if (link === page) {
      item.classList.add('active');
    }
  });
});