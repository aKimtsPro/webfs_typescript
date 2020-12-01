export declare abstract class Vehicule {
    private _marque;
    private _modele;
    private _puissance;
    abstract seDeplacer(): any;
    constructor(marque: string, modele: string, puissance: number);
    get marque(): string;
    set marque(v: string);
    get modele(): string;
    set modele(v: string);
    get puissance(): number;
    set puissance(v: number);
}
