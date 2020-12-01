import { Sportif } from "./Sportif";

export class Podium<S extends Sportif>{

    private readonly _or : S;
    private readonly _argent : S;
    private readonly _bronze : S;

    constructor( or: S, argent: S, bronze: S){
        this._or = or;
        this._argent = argent;
        this._bronze = bronze;
    }
    
    public get or() : S {
        return this._or;
    }
    public get argent() : S {
        return this._argent;
    }
    public get bronze() : S {
        return this._bronze;
    }
    

}