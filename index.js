var _a, _b, _c;
// Select DOM elements
var resumeForm = document.getElementById('resumeForm');
var educationContainer = document.getElementById('educationContainer');
var experienceContainer = document.getElementById('experienceContainer');
var skillsContainer = document.getElementById('skillsContainer');
var resumeOutput = document.getElementById('resumeOutput');
var resumeName = document.getElementById('resumeName');
var resumeContact = document.getElementById('resumeContact');
var resumeEmail = document.getElementById('resumeEmail');
var resumeLinkedIn = document.getElementById('resumeLinkedIn');
var educationOutput = document.getElementById('educationOutput');
var experienceOutput = document.getElementById('experienceOutput');
var skillsOutput = document.getElementById('skillsOutput');
var profileImage = document.getElementById('profileImage');
// Function to add education
(_a = document.getElementById('addEducation')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a;
    var educationDiv = document.createElement('div');
    educationDiv.innerHTML = "\n        <label>Degree: <input type=\"text\" class=\"degree\" placeholder=\"Degree\"></label>\n        <label>Institution: <input type=\"text\" class=\"institution\" placeholder=\"Institution\"></label>\n        <label>Year: <input type=\"text\" class=\"year\" placeholder=\"Year\"></label>\n        <button type=\"button\" class=\"hideEducation\">Hide</button>\n    ";
    educationContainer.appendChild(educationDiv);
    // Hide education entry
    (_a = educationDiv.querySelector('.hideEducation')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        educationDiv.style.display = 'none';
    });
});
// Function to add experience
(_b = document.getElementById('addExperience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    var experienceDiv = document.createElement('div');
    experienceDiv.innerHTML = "\n        <label>Job Title: <input type=\"text\" class=\"jobTitle\" placeholder=\"Job Title\"></label>\n        <label>Company: <input type=\"text\" class=\"company\" placeholder=\"Company\"></label>\n        <label>Year: <input type=\"text\" class=\"expYear\" placeholder=\"Year\"></label>\n        <button type=\"button\" class=\"hideExperience\">Hide</button>\n    ";
    experienceContainer.appendChild(experienceDiv);
    // Hide experience entry
    (_a = experienceDiv.querySelector('.hideExperience')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        experienceDiv.style.display = 'none';
    });
});
// Function to add skills
(_c = document.getElementById('addSkills')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a;
    var skillsDiv = document.createElement('div');
    skillsDiv.innerHTML = "\n        <label>Skill: <input type=\"text\" class=\"skill\" placeholder=\"Skill\"></label>\n        <button type=\"button\" class=\"hideSkill\">Hide</button>\n    ";
    skillsContainer.appendChild(skillsDiv);
    // Hide skill entry
    (_a = skillsDiv.querySelector('.hideSkill')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        skillsDiv.style.display = 'none';
    });
});
// Function to generate resume
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Populate resume details
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    resumeName.innerText = "Name: ".concat(name, " ").concat(lastName);
    resumeContact.innerText = "Contact: ".concat(contact);
    resumeEmail.innerText = "Email: ".concat(email);
    resumeLinkedIn.innerText = "LinkedIn: ".concat(linkedin);
    // Display education
    educationOutput.innerHTML = '';
    var degrees = document.querySelectorAll('.degree');
    var institutions = document.querySelectorAll('.institution');
    var years = document.querySelectorAll('.year');
    degrees.forEach(function (degree, index) {
        var institution = institutions[index];
        var year = years[index];
        educationOutput.innerHTML += "<p>".concat(degree.value, " from ").concat(institution.value, " (").concat(year.value, ")</p>");
    });
    // Display experience
    experienceOutput.innerHTML = '';
    var jobTitles = document.querySelectorAll('.jobTitle');
    var companies = document.querySelectorAll('.company');
    var expYears = document.querySelectorAll('.expYear');
    jobTitles.forEach(function (jobTitle, index) {
        var company = companies[index];
        var expYear = expYears[index];
        experienceOutput.innerHTML += "<p>".concat(jobTitle.value, " at ").concat(company.value, " (").concat(expYear.value, ")</p>");
    });
    // Display skills
    skillsOutput.innerHTML = '';
    var skills = document.querySelectorAll('.skill');
    skills.forEach(function (skill) {
        skillsOutput.innerHTML += "<p>".concat(skill.value, "</p>");
    });
    // Handle profile image
    var imageInput = document.getElementById('image');
    if (imageInput.files && imageInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(imageInput.files[0]);
    }
    // Show the resume output
    resumeOutput.style.display = 'block';
});
