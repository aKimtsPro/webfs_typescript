interface Personne {
    readonly nom: string;
    age: number;
    num_nat?: number;
    manger?(nourriture: string): void;
}
declare function sePresenter(p: Personne): void;
declare let vFunc3: (x: string) => void;
declare let obj: {
    nom: string;
    age: number;
};
declare let pers: Personne;
