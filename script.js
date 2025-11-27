let score = 0;
let choix = prompt("Voulez-vous tester des 'mots' ou des 'phrases' ?");

while (choix !== "mots" && choix !== "phrases") {
  choix = prompt("Veuillez choisir entre 'mots' ou 'phrases' !");
}
if (choix === "mots") {
for ( let i = 0; i < listMots.length; i++) {
  motUtilisateur = prompt("Entrez le mot : " + listMots[i]);
  if (motUtilisateur === listMots[i]) {
    score++
}
}
console.log("Votre score est de : " + score + " sur " + listMots.length);
} else if (choix === "phrases") {
  for ( let j = 0; j < listePhrases.length; j++) {
    motUtilisateur = prompt("Entrez la phrase : " + listePhrases[j]);
    if (motUtilisateur === listePhrases[j]) {
      score++
  }
}
console.log("Votre score est de : " + score + " sur " + listePhrases.length);
}