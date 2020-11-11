/* Les fonctions :

on écrit les fonctions qui effectue un calcul ou autre 1 seule x,
on appelle ensuite la fonction lorsque l'on en a besoin (diff calcul etc..)
Avantage: en cas de changement de donnée, on ne doit que changer notre fonction pour voir les
différents résultat s'updater immédiatement.

exemple de fonction:

-fonction pour écrire un message:

      function direBonjour() {
         console.log("Bonjour")
      }
                                --> toute seule la fonction ne donne aucun résultat,
                                il faut l'appeler pour en avoir un.
      direBonjour()            --> le résultat sera "Bonjour"

On peut appeler une fonction autant de fois que l'on veut, le résultat s'affichera selon les appels.

ajouter un argument:
        function direBonjour(prenom) {        --> vu que dans le console.log on a ajouter un element prenom,
            console.log("Bonjour" + prenom)       on le rajoute entre les parenthèses de la fonction (arugment)
        }

        direBonjour("JF")                       --> le résultat sera "Bonjour JF"
        direBonjour("John")                                          "Bonjour John"

Si l'on change dans la fonction le "Bonjour"  par "Salut", les différents résultats appelés seront immédiatement changé.

-fonction pour savoir si une personne est majeur ou non:

        function isMajeur(age) {
          if(age >= 18) {                 opp ternaire : return age >= 18 ? true : false
            return true                   ou si on renvois true dans l'une des 2 et false dans l'autre,
          } else {                        on se sépare d'une partie du code : return age >= 18
            return false
          }
        }

        isMajeur (30)   --> on appel la fonction mais rien ne s'affiche.
                            Normal, cette fonction n'a pas de console.log, elle fait un calcule et
                            renvois une valeur.

Pour récuperer cette valeur, on créer une variable:

        const isMaj = isMajeur(30)  --> en appelant isMajeur avec 30, il a calculer pour savoir si c'était vrai ou faux.
        console.log(isMaj)           --> le résultat est true.

- fonction pour doubler un nombre:

      function doubler(nombre) {     --> on met en argument nombre (vu qu'on veut calculer des nobmres)
        return nombre * 2                 et on multiplie l'argulment par 2 (ex) 
      }    

      console.log(doubler(12))        --> on appelle la fonction(argument = 12) = 24 (résultat) 

- fonction pour doubler les nombres d'un tableau :

      function doublerTableau(tab) {
        for(let i=0;i<tab.lenght;i++) {    --> parcourir tout les éléments du tableau; i avance selon la longueur du tableau;on incrémente de 1 à chaque passage.
          tab[i] = tab[i]*2                --> tab à l'indice i, on va changer sa valeur : sa valeur actuel * 2 et la remettre à sa place.        
        }
        return tab                          --> renvois le tableau modifié              
      }
      
      const result = doublerTableau([2, 8, 43])     --> créer une var contenant la fonction et le tableau avec ces diff valeurs. 
      consol.log(result)                            --> résultat: [4, 16, 86]

On peut aussi réutiliser une fonction pour cette opération pour le même résultat: 
   (plus on doit changer des choses (textes/nombres...) dans notre code, plus il sera simple de faire des évolutions en réutilisant des fonctions déjà écrite. )     
        -la fonction doubler:  function doublerTableau(tab) {
                                  for (let i= 0; i < tab.lenght; i++) {
                                      tab[i] = doubler(tab[i])
                                    }
                                  }