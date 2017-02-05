'use strict';
 
var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.children[0]);
console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);

var pierwszyChild = pierwszyDiv.childNodes[0];
console.log(pierwszyChild);
console.log(pierwszyDiv.childNodes[5]);

var childNodesDiva = pierwszyDiv.childNodes;

childNodesDiva.forEach (function (element) {
	if (element.nodeType ==1) {
		console.log(element);
	}
});

var childrenDiva = pierwszyDiv.children;
console.log(childrenDiva.length);

for (var i=0; i<childrenDiva.length; i++) {
	console.log(childrenDiva[i]);
}