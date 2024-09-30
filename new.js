const profile = document.getElementById("profile");
const profileImage = document.getElementById("profileImage");
let isExpanded = false;

profile.addEventListener("click", () => {
  if (isExpanded) {
    profile.style.width = "40px";
    profile.style.height = "40px";
    profileImage.style.width = "100%";
    profileImage.style.height = "100%";
  } else {
    profile.style.width = "200px";
    profile.style.height = "200px";
    profileImage.style.width = "100%";
    profileImage.style.height = "100%";
  }
  isExpanded = !isExpanded;
});
