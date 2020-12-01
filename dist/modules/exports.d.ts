export interface Face {
    nbrOreilles: number;
    tailleDeNez: number;
}
export declare class Tete implements Face {
    nbrOreilles: number;
    tailleDeNez: number;
    couleurCheveux: string;
}
export declare function maFunc(): void;
declare const maVar = 5;
declare type monType = 3 | 5;
export { maVar, monType as TroisOuCinq, maFunc as maFonction };
