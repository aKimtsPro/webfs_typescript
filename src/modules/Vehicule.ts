export abstract class Vehicule {

    private _marque: string;
    private _modele: string;
    private _puissance: number;

    public abstract seDeplacer();

    public constructor(marque: string, modele: string, puissance: number) {
        this.marque = marque;
        this.modele = modele;
        this.puissance = puissance;
    }
    
    public get marque() : string {
        return this._marque;
    }
    public set marque(v : string) {
        if( v.length >= 5 && v.length <= 20 )
            this._marque = v;
    }

    
    public get modele() : string {
        return this._modele;
    }
    public set modele(v : string) {
        this._modele = v;
    }

    
    public get puissance() : number {
        return this._puissance
    }
    public set puissance(v : number) {
        if( v >= 0 )
            this._puissance = v;
    }

}