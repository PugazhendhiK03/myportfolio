const projects = [
    {
        title: "Courier Management System",
        tech: "PHP",
        description: "Built a web-based system for tracking deliveries, managing customer data, and optimizing courier operations",
        image: "img/CMS.png",
        deployedLink: "#", 
        githubLink: "https://github.com/PugazhendhiK03/mini-project"
    },
    {
        title: "Enhance the Surveillance System Using Face Recognition and Object Detection",
        tech: "Python",
        description: "Developed a system for identifying individuals and detecting objects in surveillance footage with a searchable timestamp feature.",
        image: "img/Project2.png",
        deployedLink: "#", 
        githubLink: "https://github.com/PugazhendhiK03/final-year-project"
    }
];

let currentPage = 1;
const projectsPerPage = 2;

function displayProjects(page) {
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const displayedProjects = projects.slice(start, end);

    const projectsGrid = document.getElementById("projectsGrid");
    projectsGrid.innerHTML = displayedProjects.map(project => `
        <div class="project-card">
            <div class="project-demo">
                <span class="project-links">
                    <a href="${project.deployedLink}" target="_blank"><i class="fa-solid fa-globe"></i></a>
                    <a href="${project.githubLink}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <span class="tech-label">${project.tech}</span>
                </span>
                <img src="${project.image}" alt="${project.title}">
            </div>
            <span>${project.title}</span>
            <span>${project.description}</span>
        </div>
    `).join("");

    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle("active", index + 1 === page);
    });
}

function changePage(page) {
    currentPage = page;
    displayProjects(page);
}

displayProjects(currentPage);
