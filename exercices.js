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