import { Sportif } from "./Sportif";
export declare class TennisMan extends Sportif {
    private _terrainFav;
    get terrainFav(): string;
    set terrainFav(v: string);
    constructor(nom: string, terrainFav: string);
}
