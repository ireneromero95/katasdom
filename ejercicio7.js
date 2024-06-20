const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];
const div = document.querySelector("div[data-function='printHere']");
const ul = document.createElement("ul");

for (place of places){
  const li = document.createElement("li");
  li.textContent = place;
  ul.append(li);
}

document.body.append(ul);