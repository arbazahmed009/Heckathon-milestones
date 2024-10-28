var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumehtml = "\n\n<h2><b>Resume</b></h2>\n<h3>Personal information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
