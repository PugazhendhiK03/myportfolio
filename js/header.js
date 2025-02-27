const menuToggle = document.getElementById("menubar");
        const navList = document.getElementById("nav-list");

        menuToggle.addEventListener("click", () => {
            navList.classList.toggle("active");
        });