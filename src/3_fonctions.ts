
// Grâce à typescript les fonctions vont pouvoir typer leurs params, leur retour et
// leur variables locales

// les parametres typés

function add(x,y){
    return x+y;
}

console.log(add(2,5));
console.log(add("salut", " cava?"));

// le type de retour

function soustraction(x:number, y:number) : number {
    return x-y;
} 

// let v : string = soustraction(2,5); // error

// void/never

function saluer(salut : string) : void {
    console.log("bonjour, " + salut);
}

saluer("ca va?");

function boucleInf(bool : boolean) : void | never {
    while(bool);
    console.log("Terme naturel de la fonction");
}

boucleInf(false);

// parametre optionel

// si une valeur n'est pas donnée au param optionnel, sa valeur sera undefined

function salutOpt(nom: string, salut?:string): void{
    if(salut == undefined)
        console.log("Bonjour " + nom)
    else
        saluer(salut);
}

// salutOpt(); // erreur
// salutOpt("bob"); // ok
// salutOpt("bob", "ca va?"); // ok
// salutOpt("","",""); //erreur


// parametre par defaut

function creerNom( prenom:string, nom = "dubois"){
    return prenom + " " + nom;
}

console.log( creerNom("alexandre") );

// parametre restant

function addition(...toAdd:number[]){
    let total = 0;
    for (const element of toAdd) {
        total += element;
    }
    return total;
}

console.log("addition : " + addition(1,2,3,4,5,6));


// variable de fonction typée

let vFunc : (x:number, y:number) => number;

vFunc = function(x,y){
    return x+y;
}

let vFunc2 = function(message:string): void{
    console.log(message);
}

// vFunc2 = vFunc; // erreur

console.log(vFunc(5,2));
