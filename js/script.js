// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

// richiesta km
var km= prompt("quanti Km devi fare?");
console.log(km);
document.getElementById("metri").innerHTML= km;
// richiesta età
var età=prompt("quanti anni hai?");
console.log(età);
document.getElementById("anni").innerHTML= età;
// prezzo al km
var prezzoAlKm= 0.21;
console.log(prezzoAlKm);
// calcolo prezzo base
var prezzo= km * prezzoAlKm;
console.log(prezzo)


// calcolo sconto
var sconto;
var prezzoFinale;

if (età < 18) {
  sconto= ((prezzo * 20) / 100);
  console.log(sconto);
  prezzoFinale= prezzo - sconto;
  console.log(prezzoFinale);
}else if (età > 65) {
  sconto= ((prezzo * 40) / 100);
  console.log(sconto);
  prezzoFinale= prezzo - sconto;
  console.log(prezzoFinale);
}else{
  prezzoFinale= prezzo;
  console.log(prezzoFinale);
}
document.getElementById("treno").innerHTML= prezzoFinale;
