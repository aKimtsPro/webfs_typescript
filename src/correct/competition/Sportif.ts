
export class Sportif{

    private _nom : string;

    public get nom() : string {
        return this._nom;
    }
    public set nom(v : string) {
        this._nom = v;
    }

    public constructor(nom : string){
        this.nom = nom;
    }
    

}