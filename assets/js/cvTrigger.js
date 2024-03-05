const cvTrigger = document.getElementById("profile.cv--trigger");
const cvModal = document.getElementById("profile.cv--modal");

cvTrigger.addEventListener("click", () => {
  cvModal.style.display = "flex";
});
