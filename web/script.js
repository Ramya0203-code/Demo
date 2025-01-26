function generateResume() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const workExperience = document.getElementById("workExperience").value;
    const education = document.getElementById("education").value;

    // Create the resume output
    const resumeOutput = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Professional Summary</h3>
        <p>${summary}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Work Experience</h3>
        <p>${workExperience}</p>
        <h3>Education</h3>
        <p>${education}</p>
    `;

    // Display the resume
    document.getElementById("resumeOutput").innerHTML = resumeOutput;
}
