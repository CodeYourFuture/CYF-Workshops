const MenuItem = ({ component }, path) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a href="${path}${component}">${component} docs</a>`;
  return listItem;
};

export default MenuItem;
