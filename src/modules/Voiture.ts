import { VehiculeARoue } from "./VehiculeARoue";

export { Voiture as Auto };

class Voiture extends VehiculeARoue{

    private _nbrPorte: 3|5;

    public constructor(marque: string, modele: string, puissance: number, anneeConstr: string, nbrPorte: 3|5){
        super(marque, modele, puissance, anneeConstr);
        this.nbrPorte = nbrPorte;
    }
    
    public get nbrPorte() : 3|5 {
        return this._nbrPorte;
    }
    public set nbrPorte(v : 3|5) {
        this._nbrPorte = v;
    }

}