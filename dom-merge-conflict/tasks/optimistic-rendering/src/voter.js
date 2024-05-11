export function Voter(updateVote) {
  const container = document.createElement("div");

  const img = document.createElement("img");
  img.src = "/media/like";
  img.alt = "Like";

  const errorMessage = document.createElement("p");

  container.appendChild(img);

  img.addEventListener("click", () => {
    errorMessage.remove();

    updateVote()
      .then(() => {
        img.src = "/media/liked";
        img.alt = "Liked";
      })
      .catch(() => {
        errorMessage.textContent =
          "We could not process your vote, please try again later.";
        container.appendChild(errorMessage);
      });
  });

  return container;
}
