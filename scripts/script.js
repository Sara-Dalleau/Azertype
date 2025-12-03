/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  // Récupération de la zone dans laquelle on va écrire le score
  let spanScore = document.querySelector(".zoneScore span")
  // Ecriture du texte
  let affichageScore = `${score} / ${nbMotsProposes}` 
  // On place le texte à l'intérieur du span. 
  spanScore.innerText = affichageScore
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition")
  zoneProposition.innerText = proposition
}
/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
  location.href = mailto
}
// Cette fonction gère le formulaire de partage de score.
function gererFormulaire (scoreEmail) {

  let inputText = document.getElementsById("nom")
  let nom = inputText.value;

  let inputEmail = document.getElementsById("email")
  let email = inputEmail.value;
  
  afficherEmail(nom, email, scoreEmail)
}

/**
* Cette fonction lance le jeu. 
* Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
*/
function lancerJeu() {
  // Initialisations
  let score = 0
  let i = 0
  let listeProposition = listeMots

  let btnValiderMot = document.getElementById("btnValiderMot")
  let inputEcriture = document.getElementById("inputEcriture")

  afficherProposition(listeProposition[i])

  btnValiderMot.addEventListener("click", () => {
      console.log(inputEcriture.value)
      if (inputEcriture.value === listeProposition[i]) {
          score++
      }
      i++
      afficherResultat(score, i)
      inputEcriture.value = ''
      if (listeProposition[i] === undefined) {
          afficherProposition("Le jeu est fini")
          btnValiderMot.disabled = true
      } else {
          afficherProposition(listeProposition[i])
      }
      
  })

  
  let listeBtnRadio = document.querySelectorAll(".optionSource input")

  for (let index = 0; index < listeBtnRadio.length; index++) {
    listeBtnRadio[index].addEventListener("change", (event) => {
        if (event.target.value === "1") {
            listeProposition = listeMots
        } else {
            listeProposition = listePhrases
        }
        afficherProposition(listeProposition[i])
    })
}
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault();
    let scoreEmail = `${score} / ${i}`
    gererFormulaire(scoreEmail)

})
afficherResultat(score, i)
}

function validerNom (nom) {
nom = nom.trim()
if (nom.length < 2) {
    throw new Error("Le nom est trop court")} 

}
function validerEmail (email) {
  email = email.trim()
  let emailRegExp = new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$")

  if (emailRegExp.test(email)) {
      return true;
    } 
    return false;
}
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputEmail = document.getElementById("email");
  let inputNom = document.getElementById("nom");

  let email = inputEmail.value;
  let nom = inputNom.value;

  let emailOk = validerEmail(email);
  let nomOk = validerNom(nom);

if (nomOk && emailOk) {
  console.log(email)
  } else {
    console.log("Erreur")
  }
})