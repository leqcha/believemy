// supprimer
document.querySelector('#a-supprimer').remove();

// créer
let header = document.createElement("header");

let menu = document.createElement("div");

let paragraph = document.createElement("p");

// Personnaliser
header.textContent = "Bienvenue";
header.style.fontSize = "50px";
header.style.backgroundColor = "red";
header.style.textAlign = 'center';

menu.innerHTML = "<a href='#'>Accueil</a> / <a href='#'>Autre</a>";
menu.style.backgroundColor = "green";
menu.style.fontSize = "30px";

paragraph.textContent = "Je suis un paragraphe écris uniquement en javascript";
// Afficher
document.body.append(header, menu, paragraph);