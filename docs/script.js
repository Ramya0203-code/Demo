// 1️⃣ Preview Uploaded Photo
document.getElementById('photoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('previewImage');
            img.src = e.target.result;
            img.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

// 2️⃣ Auto-Save Form Data
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.value = localStorage.getItem(input.id) || '';
        input.addEventListener('input', () => {
            localStorage.setItem(input.id, input.value);
        });
    });
});

// 3️⃣ Live Preview Feature
document.getElementById('summary').addEventListener('input', function() {
    document.getElementById('livePreview').innerText = this.value;
});

// 4️⃣ Download Resume as PDF
document.getElementById('downloadPDF').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text("Resume", 90, 10);

    doc.setFont("helvetica", "normal");
    doc.text(`Full Name: ${document.getElementById('fullname').value}`, 10, 20);
    doc.text(`Email: ${document.getElementById('email').value}`, 10, 30);
    doc.text(`Phone: ${document.getElementById('phone').value}`, 10, 40);
    doc.text(`Summary: ${document.getElementById('summary').value}`, 10, 50);
    doc.text(`Skills: ${document.getElementById('skills').value}`, 10, 60);
    doc.text(`Experience: ${document.getElementById('experience').value}`, 10, 70);

    doc.save("Resume.pdf");
});
