import { Vehicule } from "./Vehicule";

// fourni un 2 export de FlotteMachine
export {Bateau as FlotteMachine};

export class Bateau extends Vehicule {

    private _superficie: number;


    constructor(marque: string, modele: string, puissance: number, superficie: number) {
        super(marque, modele, puissance);
        this.superficie = superficie;    
    }

    
    public get superficie() : number {
        return this._superficie;
    }
    public set superficie(v : number) {
        if(v >= 0)
            this._superficie = v;
    }

    // redefinition
    public seDeplacer() : void{
        console.log("ploof");
    }

}