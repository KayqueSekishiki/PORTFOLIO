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

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  console.log(profileData);
})();
