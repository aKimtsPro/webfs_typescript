
// Les types de typescript

// boolean

let bool : boolean = true;

// number/bigint

// number accepte les nbr à virgule, bigint accepte les plus grands nombres

let nbr : number = 45.5;

// string 

let chaine : string = "la valeur de mon nombre est de " + nbr + "\n\napres 2 retours à la ligne";
chaine = `la valeur de mon nombre est de ${ nbr }.

apres 2 retours à la ligne`;
console.log(chaine);

// Array

let tableauNbr : number[] = [1,2,3];
let tab : Array<number | string | boolean> = [1,2,3, "hello"];

tab[0] = 5;

console.log(tab[0]);

// Tuple

let personne : [string, number] = ["luc", 50];
// let personne : [string, number] = ["luc", "50"]; // erreur

personne[0] = "marie";
// personne[1] = "marie"; // erreur

let nom : string = personne[0];
// let nom : string = personne[1]; // erreur


// Enum

enum Color {
    RED = 0xff0000,
    GREEN = 0x00ff00,
    BLUE = "la couleur bleu"
}

// récupére la valeur d'un des éléments de l'énumération:
let couleur : Color = Color.RED;
couleur = Color["RED"];

// récupérer le nom de la clef associée à chaque valeur:
let nomCouleur : string = Color[0xff0000];
// nomCouleur = Color[Color.BLUE]; // erreur : impossible avec string

for( var element in Color){
    console.log(`${element} - ${Color[element]}`); // a remarquer: le manque de l'assoc "la couleur bleu" - BLEU
}

console.log(nomCouleur);

// Unknown

// accepte toutes valeurs

let inconnu : unknown = 15;
inconnu = true;
inconnu = "ma chaine";

// mais n'est accepté par personne

// let c : string = inconnu; // erreur

// sauf si l'unknown justifie le type de sa valeur

let c : string = "";

if( typeof inconnu === "string" ){
    c = inconnu;
}

console.log(c);

// Any

// accepte toutes les types de valeurs

let vAny : any = 15;
vAny = true;
vAny = new Object();
vAny = "chaine";

// est accepté par tous les types de varaibles

let vNombre : number = vAny;
// vNombre = "n'imp"; // erreur 

console.log("vNombre : " + vNombre);
    

// null / undefined

let n : null = null;
let u : undefined = undefined;

// object 
// tous ce qui n'est pas : number, string, boolean, null, undefined

let o : Object = {nom : "luc", age: 50};
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

let v1 = "chaine de caractere"; // grâce à l'assertion, v1 est devenu de type string
// v1 = 15; // erreur
