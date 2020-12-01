import { Sportif } from "./Sportif";
export declare class CoureurF1 extends Sportif {
    private _marqueVoiture;
    get marqueVoiture(): string;
    set marqueVoiture(v: string);
    constructor(nom: string, marqueVoit: string);
}
