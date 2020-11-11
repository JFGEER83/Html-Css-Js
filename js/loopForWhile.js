/* Les boucles - for & while :

Boucle for:

for(let i = 0; i < 5; i++) {    --> déclare une boucle for ( declarer une variable qui sert de compteur : i)
  console.log(i)                       1 condition: on choisit où commencer (ex: i = 0 -> on commence à 0)
}                                      2 condition: vérification, tant qu'elle ne trouve pas le nombre voulu
                                                    elle continue à boucler, jusqu'a trouver le nombre voulu.
                                                    (ex: i < 5 --> tant que le 5 n'est pas touvé, elle continue)
                                       3 condition: instruction à faire à la fin de chaque boucle :
                                                    ajouter 1 à la var i (i++ -> i = i + 1)

--> on aura une suite de nombre qui démare à 0 et s'arrête à 4.

ex: on va parcourir le tableau d'objet 'todos'
    for (let i = 0; i < 3; i++) {
      console.log(todos[i])   --> récupère les différents objets du tableau 'todos'
      console.log(todos[i].title) --> récupère les titres des diff objets du tableau 'todos'
                                        --> Méthode pas dynamique, ça n'affichera pas plus loin que 3 titres
                                            même si on n'en a +.
    }
Méthode dynamique de parcour :
    for (let i = 0; i < todos.lenght; i++) {
      console.log(todos[i].title)  --> récupère tout les titres disponible en temps réel
                                      (cad si on a plus de 3 titres, il les affichera ou le contraire).
    }

Méthode dynamique sans condition :
    for (let todo of todos) {      --> la déclaration est beaucoup plus simple et sans conditions.
      console.log(todos.title) --> même résultat qu'au dessus.
    }

Boucle while :

ex: let i = 0
    while (i < 5) {
      console.log(i) --> Attention : on a une boucle infinie. Pour éviter ça, il faut qu'on ajoute que i++ manuelement.
      i++  --> A partir de là, le comptage se fera normalement.
    }

Boucle do while :

ex: let i = 0         --> on déclare une var avec une valeur de départ.
    do {                  ensuite on fait (do)
      console.log(i)      cherche la valeur de i
      i++                 en ajoutant 1 à i à chaque fois
} while (i <= 5)          sachant que i est plus petit et égal à 5
                      --> ce qui donne une suite de chiffre de 0 à 5.

La différence entre le while et le do while se situe sur la première ittération
                                      (par ex, si l'on met des conditions fauses)
    ex: let i = 130
        while (i < 5){       --> pour cette boucle, on vérifie avant de commencer, cela ne donnera aucun résultat (faux)
          console.log(i)
          i++
        }

        let i = 0
        do {
          console.log(i)      --> ici, on fait une première fois l'opération avant de vérifier.
          i++                     Donc, on aura bien 130 qui s'affichera 1 fois.
        } while (i < 5)
*/