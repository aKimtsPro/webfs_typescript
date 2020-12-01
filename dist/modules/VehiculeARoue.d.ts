import { Vehicule } from '../modules/Vehicule';
export declare abstract class VehiculeARoue extends Vehicule {
    private _anneeConstr;
    private _kmParcouru;
    constructor(marque: string, modele: string, puissance: number, anneeConstr: string);
    get anneeConstr(): string;
    set anneeConstr(v: string);
    get kmParcouru(): number;
    seDeplacer(): void;
    seDeplacerDe(nbrKm: number): void;
}
