const cardComponent = document.querySelector(".main__deck");

const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

//const card = document.createElement("section");

const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;
cardComponent.append(filmTitle);

const director = document.createElement("p");
director.textContent = `Director: ${film.director}`;
cardComponent.append(director);

const duration = document.createElement("time");
duration.textContent = `${film.duration} minutes`;
cardComponent.append(duration);

const certificate = document.createElement("data");
duration.textContent = `Certificate: ${film.certificate}`;
cardComponent.append(certificate);

//cardComponent.append(card);
