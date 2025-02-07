// exercice 01

// Dans une constante récupèré le contenu de la balise h1.
const element_h1 = document.querySelector("h1");
// afficher dans la console le texte de la balise h1 sans les balises span avec la propiété textContent
console.log(element_h1.textContent);



// exercice 02

// Dans une constante récupèré le contenu de la balise span avec son id.
const element_span_h1 = document.querySelector("#blague_de_roger_le_sorcier");
// Supprimer l'objet span
element_span_h1.remove();
// afficher dans la console le texte de la balise h1 sans les balises span avec la propiété textContent
console.log(element_h1.textContent)



// exercice 03

//Dans une constante récupèré le bouton avec l'id #call_archibald
// const element_button = document.querySelector("#call_archibald");
// Placer un écouteur d'événement sur ce bouton
// element_button.addEventListener("click", leSorcierEstPresent);
// Ou tous écrire ensemble 
// document.querySelector("#call_archibald").addEventListener("click", leSorcierEstPresent)
// Définir une fonction pour affiche une fenêtre avec le message défini
// function leSorcierEstPresent(){
//     alert("`🧙‍♂️ J'arrive, j'arrive Aventurier !`");
// };

document.querySelector("#call_archibald").addEventListener("click", function(){alert("`🧙‍♂️ J'arrive, j'arrive Aventurier !`")})



// exercice 04

element_boites = document.querySelectorAll("#boites_magique .boite");
element_button_red = document.querySelector("#btn_change_red");
element_button_blue = document.querySelector("#btn_change_blue");
element_button_green = document.querySelector("#btn_change_green");
element_button_red.addEventListener("click", function(){
    element_boites[0].style.backgroundColor = "#ff0000";
});
element_button_blue.addEventListener("click", function(){
    element_boites[0].style.backgroundColor = "#0d6efd";
    element_boites[1].style.backgroundColor = "#0d6efd";
});
element_button_green.addEventListener("click", function(){
    element_boites[0].style.backgroundColor = "#198754";
    element_boites[1].style.backgroundColor = "#198754";
    element_boites[2].style.backgroundColor = "#198754";
});