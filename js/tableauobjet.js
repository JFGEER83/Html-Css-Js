/* Tableau d'objet : var qui déclare 1 tableau qui contient des objets.
  ex: const todos = [
    {
      title: "Faire les courses",
      isDone: true
    },
    {
      title: "Aller courir",
      isDone: false
    },
    {
      title: "Faire la vaisselle",
      isDone: false
    }
  ]

  console.log(todos)--> un tableau avec les diff objets.

Afficher 1 objet du tableau :
  console.log(todos[1]) --> {title: "Aller courir", isDone: false}

Afficher 1 propriété d'1 objet du tableau :
  console.log(todos[2].title) --> Faire la vaisselle

Transformer tableau d'objet en JSON : (la façon de présenter 1 tableau d'objet est proche du format JSON)
  console.log(JSON.stingify(todos)) --> transformera le tableau d'objet en une chaine de caractère, en format JSON
                                        (si on envois ce format à un serveur, il reconnaitra que c'est un fichier JSON)

Convertir JSON en objet :
  const chaine = Résultat de la transformation du tableau d'objet en JSON.
  const monObjet = JSON.parse(chaine)
  console.log(monObjet) --> Tableau d'objet.
*/