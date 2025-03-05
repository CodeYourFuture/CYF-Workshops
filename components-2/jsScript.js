async function getJoke() {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    }).then((data) => {
      console.log(data.json());
    });
    console.log(response, "<---- should see response");

function random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);
document.getElementById("joke")text.Content=data.joke();
Button.addEventListener("click",getJoke);
  }