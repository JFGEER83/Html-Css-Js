/* Les objets littéraux : liste de propriétés qu'on va assigner dans une var.

ex: créer un objet qui représente un post pour un blog.

    const post = {                            --> Objet avec :
        titre: "Exemple de titre",                1 propriété String
        tags: ['tag1', 'tag2', 'tag3'],           1 propriété Tableau
        author: {                                 1 propriété Objet
          firstName: "Moi",
          lastName: "Oim"
        }
    }

Récuperer des valeurs:
 Titre : console.log(post.titre) --> "Exemple de titre"
 Tags  : console.log(post.tags) --> Aray (0: tag1, 1: tag2...)
 Author : console.log(post.autor) --> Objet : {
                                  propriétés :`firstName: 'Moi'
                                  lastName: 'Oim'}.

Acceder à des valeurs:
Print 1 élément du tableau tags :
  console.log(post.tags[1]) --> tag2.
Print 1 propriété de l'objet author :
  console.log(post.author.lastName) --> Oim.

Modifier élément dans une propriété:
  post.author.firstName = 'Toto'
  console.log(post) --> author : {
                             firstName: 'Toto'
                             lastName: 'Oim'
                                  }
Ajouter élément à 1 propriété:
  post.tags.push('test')
  console.log(post) --> tags= ['tag1', 'tag2', 'tag3', 'test']

Ajouter 1 propriété:
  post.note = 3.7
  console.log(post) --> On peut voir qu'il y a une nouvelle propriété dans l'objet qui s'appelle note = 3.7.
*/