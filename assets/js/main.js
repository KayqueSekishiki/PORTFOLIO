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

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
})();
