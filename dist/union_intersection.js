// Type par union/intersection
function lancerDes() {
    return Math.floor(Math.random() * 6 + 1);
}
console.log(lancerDes());
function creerEcran(pixel, nbrPouce) {
    return {
        pixelisation: pixel,
        taille: nbrPouce
    };
}
creerEcran([1920, 1080], 24);
function bateau(age) {
    if (age >= 18) {
        console.log("majeur");
        return "Vous avez " + age + " ans.";
    }
    else {
        console.log("mineur");
    }
}
