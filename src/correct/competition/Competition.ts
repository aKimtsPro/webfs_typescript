import { Podium } from "./Podium";
import { Sportif } from "./Sportif";


export class Competition<S extends Sportif>{

    private _podium : Podium<S>;
    private _participant : Array<S> = [];
    private _finished : boolean = false;

    // Le constructeur par défaut est satisfaisant.

    public get podium() : Podium<S> {
        return this._podium;
    }
    
    public get participant() : Array<S> {
        return this._participant;
    }
    public set value(v : Array<S>) {
        this._participant = v;
    }

    public get isFinished() : boolean {
        return this._finished;
    }
    
    public finish() : void {
        if( this.participant.length >= 3 ){
            this._finished = true;
            this._podium = new Podium(this._participant[0], this._participant[1], this._participant[2])
        }
    }

    public getWinner() : S {
        if( this._finished )
            return this._podium.or;
    }

}