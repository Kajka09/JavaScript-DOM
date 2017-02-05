'use strict';
 
var istniejacyWezel = document.getElementById('parFirst').children[2];
//przypisz do zmiennej istniejacy wezeł

console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element p
var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwórz tekst dla elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

document.getElementById('parFirst').appendChild(newElement);


/* Dodaj znacznik <br> po każdym linku i usuń z nich atrybut klasy */

var wszystkieLinki = document.getElementsByTagName('a');
console.log(wszystkieLinki);

for (var b=0; b<wszystkieLinki.length ; b++) {
	//	console.log(wszystkieLinki [b]);
	
	var br = document.createElement('br');
	wszystkieLinki[b].parentNode.insertBefore(br, wszystkieLinki[b].nextSibling);

	wszystkieLinki[b].removeAttribute('class');

}