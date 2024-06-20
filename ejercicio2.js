// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");
document.body.appendChild(div);

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divp = document.createElement("div");
const p = document.createElement("p");

document.body.appendChild(divp);
divp.appendChild(p);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

const divp2 = document.createElement("div");
document.body.appendChild(divp2);

for (let i = 0; i < 6; i++){
  const p2 = document.createElement("p");
  divp2.appendChild(p2);
}

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

const texto = document.createElement("p");
p.innerText = "Soy dinámico";
document.body.append(p);
// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector("h2");
h2.innerText = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
document.body.append(ul);

for (const app of apps){
  const li = document.createElement("li");
  li.textContent = app;
  ul.append(li);
}

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll("p.fn-remove-me");

for (const element of eliminar){
  element.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const div3 = document.querySelectorAll("div");
const p3 = document.createElement("p");
p3.textContent = "voy en medio"

document.body.insertBefore(p3, div3[1]);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const div4 = document.querySelectorAll("div.fn-insert-here")

for (const e of div4){
  const p4 = document.createElement("p");
  p4.textContent = "Voy dentro";
  e.appendChild(p4);
}

//Importante aquí esa e que recorre cada elemento, yo habia puesto div4
// y eso es el array entero y por lo tanto no da error
//pero tampoco funciona