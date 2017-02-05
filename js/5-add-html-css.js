'use strict';
 
var mainHeader = document.getElementById('main-header');
//przypisujemy nagłówek strony do zmiennej 

mainHeader.innerHTML = "Treść nagłówka";

var link = document.getElementsByClassName ('link')[0]; //przypisujemy pierwszy link do zmiennej

link.href = "http://akademia108.pl"; //nadpisujemy atrybut href w link

link.className = "nowa-klasa"; //nadpisujemy nazwe klasy linku

mainHeader.style.color = "red"; //dodajemy style do nagłówka