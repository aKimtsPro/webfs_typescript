import { VehiculeARoue } from "./VehiculeARoue";
export { Voiture as Auto };
declare class Voiture extends VehiculeARoue {
    private _nbrPorte;
    constructor(marque: string, modele: string, puissance: number, anneeConstr: string, nbrPorte: 3 | 5);
    get nbrPorte(): 3 | 5;
    set nbrPorte(v: 3 | 5);
}
