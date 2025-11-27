function afficherResultat (score, nbMots) {
  console.log("Votre score est de " + score + " sur " + nbMots)
}

let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")

function choisirPhrasesOuMots () {
  // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Choisissez : 'mots' ou 'phrases' ?")
  }
  return choix;
}

function lancerBoucleDeJeu (listePropositions) {
  score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
    }
    return score;
} 

function lancerJeu () {
  let choix = choisirPhrasesOuMots()
  let score = 0
  let nbMots = 0

  if (choix === "mots") {
      nbMots = listMots.length
      score = lancerBoucleDeJeu(listMots)
  } else {
      score = lancerBoucleDeJeu(listePhrases)
      nbMots = listePhrases.length
  }

  afficherResultat(score, nbMots)
}