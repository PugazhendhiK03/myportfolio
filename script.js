// side bar
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });

    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("open");
    });
});


// contact form
function myFunction() {
    alert("Project is on Progress !");
  }
    
      document.getElementById('contactForm').addEventListener('submit',function (event) {
      event.preventDefault();
      var data = new FormData(event.target);
  
      fetch("https://formspree.io/f/mrgnygog", {
          method: 'POST',
          body: data,
      }).then(response => {
          if(response.ok){
              alert('Success');
          } else{
              alert('Error');
          }
      });
      document.getElementById
      ('contactForm').reset();
  });


// Example: Add a smooth scroll effect for feature section links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
