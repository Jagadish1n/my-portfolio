// JavaScript to capture and display form data dynamically

// Initialize an array to store project details
let projects = [];

// Function to add project
function addProject() {
    const projectName = document.getElementById("projectNameInput").value;
    const projectDescription = document.getElementById("projectDescriptionInput").value;

    if (projectName && projectDescription) {
        projects.push({ name: projectName, description: projectDescription });
        document.getElementById("projectNameInput").value = "";
        document.getElementById("projectDescriptionInput").value = "";
    } else {
        alert("Please fill in both project name and description.");
    }
}

// Function to generate portfolio from input data
function generatePortfolio() {
    // Get and display About Me text
    const aboutText = document.getElementById("aboutInput").value;
    document.getElementById("aboutText").innerText = aboutText;

    // Display Projects
    const projectsList = document.getElementById("projectsList");
    projectsList.innerHTML = ""; // Clear previous projects
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsList.appendChild(projectDiv);
    });

    // Display Achievements
    const achievementsText = document.getElementById("achievementsInput").value;
    document.getElementById("achievementsText").innerText = achievementsText;

    // Display Contact Details
    const emailText = document.getElementById("emailInput").value;
    const linkedinText = document.getElementById("linkedinInput").value;
    const githubText = document.getElementById("githubInput").value;
    
    document.getElementById("emailText").innerText = `Email: ${emailText}`;
    document.getElementById("linkedinLink").href = linkedinText;
    document.getElementById("linkedinLink").innerText = linkedinText;
    document.getElementById("githubLink").href = githubText;
    document.getElementById("githubLink").innerText = githubText;
}
