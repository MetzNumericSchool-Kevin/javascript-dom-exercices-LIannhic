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

document.querySelector("#call_archibald").addEventListener("click", function(){alert("`🧙‍♂️ J'arrive, j'arrive Aventurier !`")});



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

// exercice 05

document.querySelector("#liste_potions>.card").remove();
const element_liste_potions = document.querySelector("#liste_potions");
const element_template_potion = document.querySelector("#template_potion");
const clone_potion_01 = element_template_potion.content.cloneNode(true);
const nom_potion_01 = clone_potion_01.querySelector(".nom_potion");
const prix_potion_01 = clone_potion_01.querySelector(".prix_potion");
const description_potion_01 = clone_potion_01.querySelector(".description_potion");
nom_potion_01.textContent = "Potion de soin";
prix_potion_01.textContent = "10";
description_potion_01.textContent ="Soigne les contusions, les ampoules, et autres blessures mineurs....";
element_liste_potions.appendChild(clone_potion_01);

const clone_potion_02 = element_template_potion.content.cloneNode(true);
const nom_potion_02 = clone_potion_02.querySelector(".nom_potion");
const prix_potion_02 = clone_potion_02.querySelector(".prix_potion");
const description_potion_02 = clone_potion_02.querySelector(".description_potion");
nom_potion_02.textContent = "Potion de mana";
prix_potion_02.textContent = "20";
description_potion_02.textContent ="Soigne les maux de tête, et c'est tout.";
element_liste_potions.appendChild(clone_potion_02);

// exercice 06

function ajouter_une_potion_avec_le_formulaire(event) {
    event.preventDefault();
    const element_form = document.querySelector(".form");
    const FormHtmlElement = element_form
    const formData = new FormData(FormHtmlElement);
    const element_liste = document.querySelector("#liste_potions");
    const element_template = document.querySelector("#template_potion");
    const clone_potion = element_template.content.cloneNode(true);
    const element_form_nom = formData.get("toto");
    const element_form_description = formData.get("tata");
    const element_form_prix = formData.get("titi");
    clone_potion.querySelector(".nom_potion").textContent = element_form_nom;
    clone_potion.querySelector(".prix_potion").textContent = element_form_prix;
    clone_potion.querySelector(".description_potion").textContent = element_form_description;
    element_liste.appendChild(clone_potion);
    element_form.reset();
}

document.querySelector(".form").addEventListener("submit", ajouter_une_potion_avec_le_formulaire);
