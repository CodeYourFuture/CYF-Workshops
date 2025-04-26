export function ProfilePreview(profile, options = {}) {
  const { showAdditionalInfo = false, available = true } = options;

  const preview = document.createElement("aside");

  if (!available) {
    const message = document.createElement("p");
    message.textContent = "Profile preview unavailable";
    preview.appendChild(message);
    return preview;
  }

  const picture = document.createElement("img");
  picture.src = profile.pictureSrc;
  picture.alt = "";
  picture.dataset.testid = "profilePicture";

  const name = document.createElement("p");
  name.textContent = profile.name;
  name.dataset.testid = "profileName";

  preview.appendChild(picture);
  preview.appendChild(name);

  if (!shortForm) {
    const bio = document.createElement("p");
    bio.textContent = profile.bio;
    bio.dataset.testid = "profileBio";
    preview.appendChild(bio);
  }

  // TODO: If showAdditionalInfo is true, add a new <p> with "Click to view full profile"

  return preview;
}
