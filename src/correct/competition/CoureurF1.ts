import { Sportif } from "./Sportif";

export class CoureurF1 extends Sportif{

    private _marqueVoiture : string;
    public get marqueVoiture() : string {
        return this._marqueVoiture;
    }
    public set marqueVoiture(v : string) {
        this._marqueVoiture = v;
    }

    constructor(nom: string, marqueVoit: string){
        super(nom);
        this.marqueVoiture = marqueVoit;
    }
    

}