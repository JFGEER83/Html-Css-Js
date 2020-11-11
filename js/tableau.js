/* Tableau (aray): donner un ensemble de valeur à une var.
const tableau : ["element1", "element2", "element3", "element4", 4, 6.2, true, null ]
          Pour créer un tableau, on déclare une var et on insert les diff valeurs entre [],
          On peut mettre toutes sortes de valeurs dans un tableau : "string", number, booléan, null.

console.log(tableau) --> affiche le tableau dans la console.
    (on peut voir que les diff éléments sont précéder d'un chiffre, c'est leur ordre dans le tableau (Index))
      (0 : element1, 1: element2, ...)

Acceder à un index particulier dans le tableau :
    console.log(tableau[1]) --> element2.

Ajouter un élément dans tableau :
    tableau.push("element5")

Insérer élément en début de tableau :
    tableau.unshift("element5") --> l'element5 se retrouvera en position 0 du tableau.

Enlever le dernier élément du tableau :
    tableau.pop()

Suprimer élément du tableau :
    tableau.splice(1, 1)  --> (on choisit l'élément à suprimer (position), nombres d'éléménts à suprimer).

Trouver la position d'un élément particulier dans tableau :
    const position = tableau.indexOf("element3")
    console.log(position)--> 2
    const position = tableau.indexOf("elemen3") (si on inscrit un élément qui n'existe pas)
    console.log(position)--> -1
*/