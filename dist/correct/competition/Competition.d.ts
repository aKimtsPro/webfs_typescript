import { Podium } from "./Podium";
import { Sportif } from "./Sportif";
export declare class Competition<S extends Sportif> {
    private _podium;
    private _participant;
    private _finished;
    get podium(): Podium<S>;
    get participant(): Array<S>;
    set value(v: Array<S>);
    get isFinished(): boolean;
    finish(): void;
    getWinner(): S;
}