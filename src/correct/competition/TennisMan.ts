import { Sportif } from "./Sportif";

export class TennisMan extends Sportif{

    private _terrainFav : string;
    public get terrainFav() : string {
        return this._terrainFav;
    }
    public set terrainFav(v : string) {
        this._terrainFav = v;
    }
    
    constructor(nom: string, terrainFav: string){
        super(nom);
        this.terrainFav = terrainFav;
    }

}