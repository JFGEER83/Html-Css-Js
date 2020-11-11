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

-personne majeur :

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
