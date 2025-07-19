export function ProfilePreview(profile, options) {
  const preview = document.createElement("aside");
  if (options && options.available === false) {
    const unavailable = document.createElement("p");
    unavailable.textContent = "Profile preview unavailable";
    preview.appendChild(unavailable);
    return preview;
  }

  const picture = document.createElement("img");
  picture.src = profile.pictureSrc;
  picture.alt = "";
  picture.dataset.testid = "profilePicture";

  const name = document.createElement("p");
  name.textContent = profile.name;
  name.dataset.testid = "profileName";

  const bio = document.createElement("p");
  bio.textContent = profile.bio;
  bio.dataset.testid = "profileBio";

  preview.appendChild(picture);
  preview.appendChild(name);
  preview.appendChild(bio);

  return preview;
}
