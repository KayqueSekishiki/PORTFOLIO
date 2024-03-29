function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  const name = document.getElementById("profile.name");
  const job = document.getElementById("profile.job");
  const location = document.getElementById("profile.location");
  const phone = document.getElementById("profile.phone");
  const email = document.getElementById("profile.email");

  photo.src = profileData.photo;
  photo.alt = profileData.name;
  name.innerHTML = profileData.name;
  job.innerHTML = profileData.job;
  location.innerHTML = profileData.location;
  phone.innerHTML = profileData.phone;
  phone.href = `tel:{profileData.phone}`;
  email.innerHTML = profileData.email;
  email.href = `mailto:{profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");

  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");

  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) => ` 
    <li>
        <img
            src="${skill.logo}"
            alt="${skill.name}"
            title="${skill.name}"
        />
    </li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");

  languages.innerHTML = profileData.languages
    .map(
      (language) => ` 
      <li>
          ${language}
      </li>`
    )
    .join("");
}

function updateEducations(profileData) {
  const dioCourses = document.getElementById("profile.educations.dio");
  const graduations = document.getElementById("profile.educations.graduations");

  dioCourses.innerHTML = profileData.educations.dio
    .map(
      (course) => ` 
      <li>
      <img src="${course.logo}" alt="course.name" />
    </li>`
    )
    .join("");

  graduations.innerHTML = profileData.educations.graduations
    .map(
      (graduation) => ` 
      <li>
      <h3 class="title">${graduation.name} - ${graduation.course} </h3>
      <p class="period">${graduation.period} (${graduation.status})</p>
    </li>
    `
    )
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");

  portfolio.innerHTML = profileData.portfolio
    .map(
      (project) => ` 
      <li>
      <h3  class=${project.github ? "github" : ""}>${project.name}</h3>
      <a target="_blank" href="${project.url}">
      ${project.url}
      </a>
    </li>`
    )
    .join("");
}

function updateProfessionalExperience(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience"
  );

  professionalExperience.innerHTML = profileData.professionalExperience
    .map(
      (experience) =>
        `<li>
            <h3 class="title">
             ${experience.name}
            </h3>
            <p class="period">
            ${experience.period}
            </p>
            <p>
             ${experience.description}
            </p>
        </li>`
    )
    .join("");
}

function updateFooter(profileData) {
  const dio = document.getElementById("dio");

  dio.href = profileData.dio;
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updateEducations(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData);
  updateFooter(profileData);
})();
