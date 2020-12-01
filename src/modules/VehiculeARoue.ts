import { Vehicule } from '../modules/Vehicule';

export abstract class VehiculeARoue extends Vehicule {

    private _anneeConstr: string;
    private _kmParcouru: number = 0;

    public constructor(marque: string, modele: string, puissance: number, anneeConstr: string) {
        super(marque, modele, puissance);
        this.anneeConstr = anneeConstr;
    }
    
    public get anneeConstr() : string {
        return this._anneeConstr;
    }
    public set anneeConstr(v : string) {
        this._anneeConstr = v;
    }

    
    public get kmParcouru() : number {
        return this._kmParcouru;
    }
    

    // redefinition
    public seDeplacer() : void {
        console.log("vroom");
    }

    public seDeplacerDe(nbrKm: number) : void {
        this._kmParcouru += nbrKm;
        this.seDeplacer();
    }
    
    
}