function previewPhoto() {
    const photoInput = document.getElementById("photo");
    const photoPreview = document.getElementById("photoPreview");

    // Check if a file was uploaded
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Set the uploaded photo as the preview
            photoPreview.innerHTML = `<img src="${e.target.result}" alt="Profile Photo">`;
            photoPreview.style.display = "block";
        };
        reader.readAsDataURL(photoInput.files[0]);
    }
}

function generateResume() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const skills = document.getElementById("skills").value;
    const workExperience = document.getElementById("workExperience").value;
    const education = document.getElementById("education").value;
    const photoPreview = document.getElementById("photoPreview").innerHTML;

    // Create the resume output
    const resumeOutput = `
        <div class="resume-container">
            ${photoPreview} <!-- Include the photo preview -->
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
        </div>
    `;

    // Display the resume
    document.getElementById("resumeOutput").innerHTML = resumeOutput;
}
