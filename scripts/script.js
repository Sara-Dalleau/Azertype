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


  afficherResultat(score, i)
}

let btnValider = document.getElementById("btnMode")
btnValider.addEventListener("click", () => {
  let inputValue = document.getElementsByName("mode")
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i].checked === true) {
      console.log("Le mode " + inputValue[i].value +  " est activé")
    }
  }
}
)

// let btnTheme = document.getElementById("btnTheme")
// btnTheme.addEventListener("click", () => {
//   let theme = document.getElementsByName("theme")
//   let valeurcochee = ""
//   for (let i = 0; i < theme.length; i++) {
//     if (theme[i].checked === true) {
//       valeurcochee = theme[i].value
//     }
//   }
//   if (valeurcochee === "light") {
//     document.body.style.backgroundColor = "white"
//   } if (valeurcochee === "dark") {
//     document.body.style.backgroundColor = "black"
//   }
//   if (valeurcochee === "blue") {
//     document.body.style.backgroundColor = "blue"
//   }
// })

// let btnInteret = document.getElementById("btnInteret")
// btnInteret.addEventListener("click", () => {
//   let caseInteret = document.getElementsByName("interet")
//   let tableauInteret = []
//   for (let i = 0; i < caseInteret.length; i++) {
//     if (caseInteret[i].checked === true) {
//       tableauInteret.push(caseInteret[i].value)
//     }
//   }
//   console.log("Tu es intéressée par: "+ tableauInteret .join(", ") )
// })
