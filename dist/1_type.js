// Les types de typescript
// boolean
var bool = true;
// number/bigint
// number accepte les nbr à virgule, bigint accepte les plus grands nombres
var nbr = 45.5;
// string 
var chaine = "la valeur de mon nombre est de " + nbr + "\n\napres 2 retours à la ligne";
chaine = "la valeur de mon nombre est de " + nbr + ".\n\napres 2 retours \u00E0 la ligne";
console.log(chaine);
// Array
var tableauNbr = [1, 2, 3];
var tab = [1, 2, 3, "hello"];
tab[0] = 5;
console.log(tab[0]);
// Tuple
var personne = ["luc", 50];
// let personne : [string, number] = ["luc", "50"]; // erreur
personne[0] = "marie";
// personne[1] = "marie"; // erreur
var nom = personne[0];
// let nom : string = personne[1]; // erreur
// Enum
var Color;
(function (Color) {
    Color[Color["RED"] = 16711680] = "RED";
    Color[Color["GREEN"] = 65280] = "GREEN";
    Color["BLUE"] = "la couleur bleu";
})(Color || (Color = {}));
// récupére la valeur d'un des éléments de l'énumération:
var couleur = Color.RED;
couleur = Color["RED"];
// récupérer le nom de la clef associée à chaque valeur:
var nomCouleur = Color[0xff0000];
// nomCouleur = Color[Color.BLUE]; // erreur : impossible avec string
for (var element in Color) {
    console.log(element + " - " + Color[element]); // a remarquer: le manque de l'assoc "la couleur bleu" - BLEU
}
console.log(nomCouleur);
// Unknown
// accepte toutes valeurs
var inconnu = 15;
inconnu = true;
inconnu = "ma chaine";
// mais n'est accepté par personne
// let c : string = inconnu; // erreur
// sauf si l'unknown justifie le type de sa valeur
var c = "";
if (typeof inconnu === "string") {
    c = inconnu;
}
console.log(c);
// Any
// accepte toutes les types de valeurs
var vAny = 15;
vAny = true;
vAny = new Object();
vAny = "chaine";
// est accepté par tous les types de varaibles
var vNombre = vAny;
// vNombre = "n'imp"; // erreur 
console.log("vNombre : " + vNombre);
// null / undefined
var n = null;
var u = undefined;
// object 
// tous ce qui n'est pas : number, string, boolean, null, undefined
var o = { nom: "luc", age: 50 };
o = personne;
o = tab;
// o = null; // erreur si la proprete tsconfig.json est à true, pas d'erreur si à false
o = "bonjour"; // string -> String
o = 15; // number -> Number
o = true; // boolean -> 
// Void
// représente l'absence de type
// utile dans les fonctions ne retournant rien
// Never
// représente un type de valeur n'arrivant jamais
// utile dans les fonctions pour indiquer que la fonction n'arrivera 
// jamais à son terme naturel
// Assertion de type
// la variable dont le type n'est pas déclaré devient du type de la première valeur
// assignée.
var v1 = "chaine de caractere"; // grâce à l'assertion, v1 est devenu de type string
// v1 = 15; // erreur
