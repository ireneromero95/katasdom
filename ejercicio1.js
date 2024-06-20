// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const btn = document.querySelector(".showme");
console.log(btn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const pillado = document.querySelector("#pillado");
console.log(pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p
const ps = document.querySelectorAll("p");
for (power of ps){
  console.log(power);
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

const pkmn = document.querySelectorAll(".pokemon");
for (poke of pkmn){
  console.log(poke.innerText);
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

console.log(document.querySelectorAll("[data-function='testMe']"));

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".

console.log(document.querySelector("[data-function]='testMe']")[2])