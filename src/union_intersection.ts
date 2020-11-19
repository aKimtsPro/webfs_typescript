// Type par union/intersection

// le mot clef type permet de creer une variable local contenant un type

type valeurDes = 1 | 2 | 3 | 4 | 5 | 6;

function lancerDes() : valeurDes {
    return Math.floor(Math.random()*6 + 1) as valeurDes ;
}

console.log(lancerDes());

function creerEcran(pixel : [1920, 1080] | [3840, 2160], nbrPouce: 24 | 25 | 26){
    return {
        pixelisation : pixel,
        taille : nbrPouce 
    }
}

creerEcran([1920, 1080], 24);
// creerEcran([1920, 80], 24); // erreur


type union = string | void; // string OU void

function bateau(age :number) : union{
    if(age >= 18){
        console.log("majeur");
        return "Vous avez "+age+" ans.";
    }
    else{
        console.log("mineur");
    }
}

type intersec = string & number; // string ET number
