// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
document.body.append(ul);

for (country of countries){
  const li = document.createElement("li")
  li.textContent = country;
  ul.append(li);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar = document.querySelector(".fn-remove-me");
eliminar.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulcars = document.createElement("ul");
const divcar = document.querySelectorAll("[data-function='printHere']")
console.log(divcar[0]);
divcar[0].appendChild(ulcars);

for (const car of cars){
  const licar = document.createElement("li");
  licar.textContent = car;
  ulcars.appendChild(licar);
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const paises = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
 ];

 for (pais of paises){
  const divPais = document.createElement("div");
  const h4 = document.createElement("h4");
  divPais.append(h4);
  h4.textContent = pais.title;
  document.body.appendChild(divPais);
  const img = document.createElement('img');
  img.src = pais.imgUrl;
  img.alt = "imagen de país"
  divPais.append(img);
 }

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

const btn = document.createElement("button");
document.body.append(btn);
btn.textContent = "Clicka para eliminar";

function eliminardiv(){
  const alldivs = document.querySelectorAll("div")
  alldivs[alldivs.length - 1].remove();
}

btn.setAttribute("onclick", "eliminardiv()");


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const allDivs2 = document.querySelectorAll("div");

for (const div of allDivs2) {
    const button = document.createElement("button");
    button.textContent = "Elimíname!"
    button.addEventListener("click", (e) => e.target.parentElement.remove())
    div.appendChild(button);
}
