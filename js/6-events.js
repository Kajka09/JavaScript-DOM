'use strict';
 
var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienna z drugim linkiem

function alarm(e) {
	e.preventDefault(); //zapobiegamy domyslnej akcji
	console.log('kliknięto kolejny link');
	
	console.log(e.type);
}

secondLink.onclick = alarm; //wywołujemy funkcje alarm() na drugim linku po kliknięciu 


var thirdLink = document.getElementsByTagName('a')[2];//tworzymy zmienną z trzecim linkiem

thirdLink.addEventListener('click', alarm); //wywołujemy funkcje alarm() na trzecim linku po kliknięciu, za pomocą eventListener

thirdLink.removeEventListener('click', alarm);


var mainHeader = document.getElementById('main-header');
//
//function resize (e) { //przekazujemy zdarzenia jako parametr funkcji
//	if (e.type =='mouseover') { //sprawdzanie typu zdarzenia
//		mainHeader.style.fontSize = "70px";
//	} else {
//		mainHeader.style.fontSize = "inherit";
//	}
//}
//
//mainHeader.onmouseover = resize;
//mainHeader.onmouseout = resize;


function klikHeader (){
	console.log("kliknąłeś w header");
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikH1 (e) {
	e.stopPropagation();
	console.log("kliknałeś w h1");
}

document.getElementsByTagName('h1')[0].onclick = klikH1;