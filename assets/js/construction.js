let chercheur = document.getElementById("search");
let recherche = chercheur.value;

let affiche = document.getElementById("affichage");
let art = document.querySelector("#affiche .artist");
let son = document.querySelector("#affiche .songs");

chercheur.addEventListener("focusout", artson);

function artson() {
    art.innerHTML = recherche;



}