
function myFunction() {
  alert("Project is on Progress !");
}

        let tablinks = document.getElementsByClassName("tab-links");
        let tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        let sidemeu = document.getElementById("sidemenu");

        function openmenu(){
            sidemeu.style.right="0";
        }

        function closemenu(){
            sidemeu.style.right="-200px";
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