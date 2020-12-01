import { VehiculeARoue } from "./VehiculeARoue";
export { Couleur as CouleurMoto };
declare enum Couleur {
    ROUGE = 0,
    VERT = 1,
    BLEU = 2
}
export declare class Moto extends VehiculeARoue {
    private _couleur;
    constructor(marque: string, modele: string, puissance: number, anneeConstr: string, couleur: Couleur);
    get couleur(): Couleur;
    set couleur(v: Couleur);
}
