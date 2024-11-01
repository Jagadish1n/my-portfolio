// JavaScript to capture and display form data dynamically

let projects = [];

// Function to add project
function addProject() {
    const projectName = document.getElementById("projectNameInput").value;
    const projectDescription = document.getElementById("projectDescriptionInput").value;

    if (projectName && projectDescription) {
        projects.push({ name: projectName, description: projectDescription });
        console.log("Project Added:", projects); // Debugging line
        document.getElementById("projectNameInput").value = "";
        document.getElementById("projectDescriptionInput").value = "";
    } else {
        alert("Please fill in both project name and description.");
    }
}

// Function to generate portfolio from input data
function generatePortfolio() {
    console.log("Generating portfolio..."); // Debugging line

    // Get and display About Me text
    const aboutText = document.getElementById("aboutInput").value;
    document.getElementById("aboutText").innerText = aboutText;
    console.log("About Me:", aboutText); // Debugging line

    // Display Projects
    const projectsList = document.getElementById("projectsList");
    projectsList.innerHTML = ""; // Clear previous projects
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsList.appendChild(projectDiv);
        console.log("Displaying Project:", project.name); // Debugging line
    });

    // Display Achievements
    const achievementsText = document.getElementById("achievementsInput").value;
    document.getElementById("achievementsText").innerText = achievementsText;
    console.log("Achievements:", achievementsText); // Debugging line

    // Display Contact Details
    const emailText = document.getElementById("emailInput").value;
    const linkedinText = document.getElementById("linkedinInput").value;
    const githubText = document.getElementById("githubInput").value;

    document.getElementById("emailText").innerText = `Email: ${emailText}`;
    document.getElementById("linkedinLink").href = linkedinText;
    document.getElementById("linkedinLink").innerText = linkedinText;
    document.getElementById("githubLink").href = githubText;
    document.getElementById("githubLink").innerText = githubText;

    console.log("Contact Details:", emailText, linkedinText, githubText); // Debugging line
}
