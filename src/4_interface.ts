interface Personne{
    readonly nom : string, // ne peut plus être modifiée //~= const pour propriete
    age : number,
    num_nat?: number, // propriete optionnelle, par defaut = undefined
    // adress : string = "rue truc", // pas de valeur par defaut

    manger?(nourriture:string): void, // method dans l'interface
    //manger?: (nourriture:string) => void
}

// a partir d'une personne on peut acceder à tous ses proprietes
function sePresenter(p : Personne){
    console.log("bonjour, je m'appelle "+p.nom+" et j'ai "+p.age+" ans. NUM:"+ p.num_nat);
    // p.nom = "marie"; // erreur : readonly

    if( p.manger != undefined)
        p.manger("burger");
}

let vFunc3 = function(x:string){ console.log("scrounch")}

let obj = {
    nom: "luc",
    age: 15,
    // num_nat : 0, // optionnel,

    // manger: vFunc3 // pas de declaration de function dans la declaration d'objet // optionnel
}

let pers : Personne = obj;

sePresenter(pers);

// l'objet en tant qu'Object continue à ne pas être en readonly
obj["nom"] = "marie";

sePresenter(pers);