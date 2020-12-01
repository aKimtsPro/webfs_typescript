import { Vehicule } from "./Vehicule";
export { Bateau as FlotteMachine };
export declare class Bateau extends Vehicule {
    private _superficie;
    constructor(marque: string, modele: string, puissance: number, superficie: number);
    get superficie(): number;
    set superficie(v: number);
    seDeplacer(): void;
}
