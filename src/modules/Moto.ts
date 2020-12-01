import { VehiculeARoue } from "./VehiculeARoue";

export { Couleur as CouleurMoto };

enum Couleur{
    ROUGE,
    VERT,
    BLEU
}

export class Moto extends VehiculeARoue {

    private _couleur: Couleur;

    constructor(marque: string, modele: string, puissance: number, anneeConstr: string, couleur: Couleur) {
        super(marque, modele, puissance, anneeConstr);
        this.couleur = couleur;
    }
    
    public get couleur() : Couleur {
        return this._couleur;
    }
    public set couleur(v : Couleur) {
        this._couleur = v;
    }

}