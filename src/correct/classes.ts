// import { Vehicule, VehiculeARoue as VAR } from './../modules/AllVehicules';
import { CouleurMoto } from './../modules/Moto';
import Velo, { direBonjour as salut } from './../modules/Velo';
import * as a from './../modules/AllVehicules';


// Bateau
const b: a.Bateau = new a.Bateau("marque", "model", 25644, 56768);
b.seDeplacer();

// Moto
const m: a.Moto = new a.Moto("marque", "model", 25644, "2010", CouleurMoto.BLEU);
console.log(`La moto a parcouru : ${m.kmParcouru}` );
m.seDeplacerDe(5);
console.log(`La moto a parcouru : ${m.kmParcouru}` );

// Voiture
const v: a.Auto = new a.Auto("marque", "model", 25644, "2010", 3);
console.log(`La voiture a parcouru : ${v.kmParcouru}` );
v.seDeplacerDe(10);
console.log(`La voiture a parcouru : ${v.kmParcouru}` );

// module Velo
const velo: Velo = new Velo("","",0);
salut();