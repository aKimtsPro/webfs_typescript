// Grâce à typescript les fonctions vont pouvoir typer leurs params, leur retour et
// leur variables locales
// les parametres typés
function add(x, y) {
    return x + y;
}
console.log(add(2, 5));
// console.log(add("salut", " cava?")) // erreur
// le type de retour
function soustraction(x, y) {
    return x - y;
}
// let v : string = soustraction(2,5); // error
// void/never
function saluer(salut) {
    console.log("bonjour, " + salut);
}
saluer("ca va?");
function boucleInf() {
    while (true) {
    }
}
//boucleInf();
// parametre optionel
// si une valeur n'est pas donnée au param optionnel, sa valeur sera undefined
function salutOpt(nom, salut) {
    if (salut == undefined)
        console.log("Bonjour " + nom);
    else
        saluer(salut);
}
// salutOpt(); // erreur
// salutOpt("bob"); // ok
// salutOpt("bob", "ca va?"); // ok
// salutOpt("","",""); //erreur
// parametre par defaut
function creerNom(prenom, nom) {
    if (nom === void 0) { nom = "dubois"; }
    return prenom + " " + nom;
}
console.log(creerNom("alexandre"));
// parametre restant
function addition() {
    var toAdd = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        toAdd[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, toAdd_1 = toAdd; _a < toAdd_1.length; _a++) {
        var element_1 = toAdd_1[_a];
        total += element_1;
    }
    return total;
}
console.log("addition : " + addition(1, 2, 3, 4, 5, 6));
// variable de fonction typée
var vFunc;
vFunc = function (x, y) {
    return x + y;
};
var vFunc2 = function (message) {
    console.log(message);
};
// vFunc2 = vFunc; // erreur
console.log(vFunc(5, 2));
