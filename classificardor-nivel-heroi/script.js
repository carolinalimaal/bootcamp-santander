const heroName = "Carol";
const heroXp = 1000;
let heroLevel = "";

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

if (heroXp <= 1000) {
  heroLevel = "Ferro";
}
else if (heroXp > 1000 && heroXp <= 2000) {
  heroLevel = "Bronze";
}
else if (heroXp > 2000 && heroXp <= 5000) {
  heroLevel = "Prata";
}
else if (heroXp > 5000 && heroXp <= 7000) {
  heroLevel = "Ouro";
}
else if (heroXp > 7000 && heroXp <= 8000) {
  heroLevel = "Platina";
}
else if (heroXp > 8000 && heroXp <= 9000) {
  heroLevel = "Ascendente";
}
else if (heroXp > 9000 && heroXp <= 10000) {
  heroLevel = "Imortal";
}
else {
  heroLevel = "Radiante";
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`)