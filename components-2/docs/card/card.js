const Card = ({ component, emoji }, type, path) => {
  const card = document.createElement("li");
  // we have two kinds of cards, one with an emoji and one with types of code
  if (type === "emoji") {
    card.innerHTML = `
  <a href="${path ?? `./`}${component}" class="card">
    <h3 class="card__heading">${component}</h3>
    <span class="card__emoji">${emoji}</span></a>`;
    return card;
  }

  card.innerHTML = `
  <a href="${path ?? `./`}${component}" class="card">
      <h3 class="card__heading">${component} ${type.toUpperCase()}</h3>
      <object class="card__code"
            data="${component}.${type}"
            type="text/${type}"
            width="400"
            height="300">
      </object>
    </a>`;
  return card;
};

export default Card;
