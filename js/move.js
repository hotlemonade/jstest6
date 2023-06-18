document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('ul li a');
  links.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault(); 
          var targetId = this.getAttribute('href'); 
          var targetElement = document.querySelector(targetId); 
          if (targetElement) {   
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});