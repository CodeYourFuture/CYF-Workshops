const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};
// const filmTitle = document.createElement("h3");
// filmTitle.textContent = film.title;
// console.log(filmTitle);
// document.body.append(filmTitle);

const card = document.createElement("section");

const filmTitle = document.createElement("h3");
filmTitle.textContent = film.title;
card.append(filmTitle);

const director = document.createElement("p");
director.textContent = `Director: ${film.director}`;
card.append(director);

const duration = document.createElement("time");
duration.textContent = `${film.duration} minutes`;
card.append(duration);

const certificate = document.createElement("data");
duration.textContent = `Certificate: ${film.certificate}`;
card.append(certificate);

document.body.append(card);
