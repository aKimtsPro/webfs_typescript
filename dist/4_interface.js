// a partir d'une personne on peut acceder à tous ses proprietes
function sePresenter(p) {
    console.log("bonjour, je m'appelle " + p.nom + " et j'ai " + p.age + " ans. NUM:" + p.num_nat);
    // p.nom = "marie"; // erreur : readonly
    if (p.manger != undefined)
        p.manger("burger");
}
var vFunc3 = function (x) { console.log("scrounch"); };
var obj = {
    nom: "luc",
    age: 15,
};
var pers = obj;
sePresenter(pers);
// l'objet en tant qu'Object continue à ne pas être en readonly
obj["nom"] = "marie";
sePresenter(pers);
