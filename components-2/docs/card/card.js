const Card = ({ component, emoji, resource }, type, path) => {
  //FIRST, DECLARE VARIABLES

  // first we must create a DOM node - you could also create a Fragment
  const card = document.createElement("li");
  let href = resource;
  let content = "";
  let heading = component;

  // NEXT, RUN LOGIC

  // if a path is passed, we override our resource from the data
  if (path) href = path + component;
  // if we're showing an emoji card, it's just a span
  if (type === "emoji") {
    content = `<span class="card__emoji">${emoji}</span>`;
  } else {
    // but otherwise, we are pulling an object to show the file (a bit weird but roll with it for now)
    heading += ` ${type.toUpperCase()}`;
    content = `<object class="card__code" data="${component}.${type}" type="text/${type}" width="400" height="300"></object>`;
  }
  //now add the html to our created list node
  card.innerHTML = `<a href="${href}" class="card">
      <h3 class="card__heading">${heading}</h3>
      ${content}
    </a>`;

  // LAST, RETURN RESULT

  return card;
};

export default Card;
