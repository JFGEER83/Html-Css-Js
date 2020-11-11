/* Les conditions : logique conditionelle - logique booléene

if-else:
ex:  const age = 35           --> si la condition est vraie - message
                                                      fause - else - message

      if(age >= 18){    --> l'expression du if renvoit vrai ou faux (booléan)
          console.log("la personne est majeure")  -->  selon la valeur de la variable,
                                                      ce message s'affiche ou il passe au else.
      } else {
        console.log("la personne est mineure") --> selon la valeur de la variable, ce message s'affiche ou pas.
      }

if-else if:
ex:  const age = 30         --> si la condition est vraie - message
                                                    fause -> else if - vraie - message
                                                                       fause -> else if - vraie - message
                                                                                          fause -> else - message
     if (age <= 2) {
        console.log("la personne est un bébé")
     } else if (age <= 12) {
        console.log("la personne est un enfant")
     } else if (age <= 17) {
        console.log("la personne est un ado")
     } else {                               --> else est pour toutes les autres conditions.
       console.log("la personne est un adulte")
     }

ou - ||:
ex: const age = 60    --> console.log affiche "gratuit"

     if (age <= 3 || age >= 60) {   --> || permet de simplifier l'écriture du code
        console.log("gratuit")
     } else {
       console.log("payant")
     }

&& :
ex: const age = 60          --> console.log affiche "réduction"
    const nbPlace = 10

    if (age >= 60 && nbPlaces >= 5) {  --> si l'age est plus grand ou égal à 60 et
                                           si le nbr de place est plus grand ou égal à 5 alors = réduction
        console.log("réduction")
    } else {
        console.log("plein tarif")
    }

    const age = 60
    const nbPlace = 2
    const x = 12                                  --> si condition 1 et condition 2 ou condition 3 --> resultat

    if ((age >= 60 && nbPlace >= 5) || x == 12 ) {  --> si l'age est + grand ou = à 60
                                                        et si le nbr place est + grand ou = à 5
                                                        ou si x est = à 12 (comparaison) --> reduction
          console.log("reduction")
    } else {
          console.log("plein tarif")
    }

Switch case :  (même chose que if else)
ex: const dir = "sud"

    switch(dir) {
        case 'sud' :
          console.log("on va vers le sud")
          break  --> ne pas oulier de mettre le break après chaque condition sinon ça ne s'arrete pas et
                      englobe la condition suivante
        case 'nord' :
          console.log("on va vers le nord")
          break
        default :
           console.log("inconus")
           break
      }

Méthode includes:
Pour vérifier si 1 élément est dans 1 tableau.

ex: const fruits = ['pomme, 'banane', 'poire']

    if (fruits.includes('banane')) {  --> la banane est-elle inclue dans fruits?
        console.log("c'est ok")             ok
    }  else {                             ou
        console.log("nope")                 nope
    }

If:
Pour vérifier 1 élément dans 1 objet.
ex:  const person = {
        name = 'Vincent',
        age = 8,
}

if (person.age < 10) {     --> si dans person, l'age est < 10
      console.log("c'est un enfant")          alors c'est un enfant
}

Opérateur ternaire :
raccourcis de syntaxe pour écrire if else.
ex: const age = 25

    if (age <= 18) {
          console.log("mineur")
    } else {
          console.log("majeur")
    }

    const message = age < 18 ? "mineur" : "majeur"  --> même chose que plus haut mais en 1 ligne.
    console.log(message)
    console.log(age < 18 ? "mineur" : "majeur")  --> même résultat
    console.log("Vous êtes " + (age < 18 ? "mineur" : "majeur")) --> même résultat
*/