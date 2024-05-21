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