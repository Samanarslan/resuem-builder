// Select DOM elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const educationContainer = document.getElementById('educationContainer') as HTMLDivElement;
const experienceContainer = document.getElementById('experienceContainer') as HTMLDivElement;
const skillsContainer = document.getElementById('skillsContainer') as HTMLDivElement;

const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const resumeName = document.getElementById('resumeName') as HTMLDivElement;
const resumeContact = document.getElementById('resumeContact') as HTMLDivElement;
const resumeEmail = document.getElementById('resumeEmail') as HTMLDivElement;
const resumeLinkedIn = document.getElementById('resumeLinkedIn') as HTMLDivElement;
const educationOutput = document.getElementById('educationOutput') as HTMLDivElement;
const experienceOutput = document.getElementById('experienceOutput') as HTMLDivElement;
const skillsOutput = document.getElementById('skillsOutput') as HTMLDivElement;
const profileImage = document.getElementById('profileImage') as HTMLImageElement;

// Function to add education
document.getElementById('addEducation')?.addEventListener('click', () => {
    const educationDiv = document.createElement('div');
    educationDiv.innerHTML = `
        <label>Degree: <input type="text" class="degree" placeholder="Degree"></label>
        <label>Institution: <input type="text" class="institution" placeholder="Institution"></label>
        <label>Year: <input type="text" class="year" placeholder="Year"></label>
        <button type="button" class="hideEducation">Hide</button>
    `;
    educationContainer.appendChild(educationDiv);

    // Hide education entry
    educationDiv.querySelector('.hideEducation')?.addEventListener('click', () => {
        educationDiv.style.display = 'none';
    });
});

// Function to add experience
document.getElementById('addExperience')?.addEventListener('click', () => {
    const experienceDiv = document.createElement('div');
    experienceDiv.innerHTML = `
        <label>Job Title: <input type="text" class="jobTitle" placeholder="Job Title"></label>
        <label>Company: <input type="text" class="company" placeholder="Company"></label>
        <label>Year: <input type="text" class="expYear" placeholder="Year"></label>
        <button type="button" class="hideExperience">Hide</button>
    `;
    experienceContainer.appendChild(experienceDiv);

    // Hide experience entry
    experienceDiv.querySelector('.hideExperience')?.addEventListener('click', () => {
        experienceDiv.style.display = 'none';
    });
});

// Function to add skills
document.getElementById('addSkills')?.addEventListener('click', () => {
    const skillsDiv = document.createElement('div');
    skillsDiv.innerHTML = `
        <label>Skill: <input type="text" class="skill" placeholder="Skill"></label>
        <button type="button" class="hideSkill">Hide</button>
    `;
    skillsContainer.appendChild(skillsDiv);

    // Hide skill entry
    skillsDiv.querySelector('.hideSkill')?.addEventListener('click', () => {
        skillsDiv.style.display = 'none';
    });
});

// Function to generate resume
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Populate resume details
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;

    resumeName.innerText = `Name: ${name} ${lastName}`;
    resumeContact.innerText = `Contact: ${contact}`;
    resumeEmail.innerText = `Email: ${email}`;
    resumeLinkedIn.innerText = `LinkedIn: ${linkedin}`;

    // Display education
    educationOutput.innerHTML = '';
    const degrees = document.querySelectorAll('.degree');
    const institutions = document.querySelectorAll('.institution');
    const years = document.querySelectorAll('.year');
    degrees.forEach((degree, index) => {
        const institution = institutions[index] as HTMLInputElement;
        const year = years[index] as HTMLInputElement;
        educationOutput.innerHTML += `<p>${(degree as HTMLInputElement).value} from ${institution.value} (${year.value})</p>`;
    });

    // Display experience
    experienceOutput.innerHTML = '';
    const jobTitles = document.querySelectorAll('.jobTitle');
    const companies = document.querySelectorAll('.company');
    const expYears = document.querySelectorAll('.expYear');
    jobTitles.forEach((jobTitle, index) => {
        const company = companies[index] as HTMLInputElement;
        const expYear = expYears[index] as HTMLInputElement;
        experienceOutput.innerHTML += `<p>${(jobTitle as HTMLInputElement).value} at ${company.value} (${expYear.value})</p>`;
    });

    // Display skills
    skillsOutput.innerHTML = '';
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skillsOutput.innerHTML += `<p>${(skill as HTMLInputElement).value}</p>`;
    });

    // Handle profile image
    const imageInput = document.getElementById('image') as HTMLInputElement;
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profileImage.src = e.target!.result as string;
        };
        reader.readAsDataURL(imageInput.files[0]);
    }

    // Show the resume output
    resumeOutput.style.display = 'block';
});
