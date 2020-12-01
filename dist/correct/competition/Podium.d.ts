import { Sportif } from "./Sportif";
export declare class Podium<S extends Sportif> {
    private readonly _or;
    private readonly _argent;
    private readonly _bronze;
    constructor(or: S, argent: S, bronze: S);
    get or(): S;
    get argent(): S;
    get bronze(): S;
}
