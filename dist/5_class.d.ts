declare abstract class Employe {
    private _nom;
    private _age;
    private _num_nat;
    private readonly _salaire;
    constructor();
    sePresenter(): void;
    abstract manger(): any;
    get age(): number;
    get num_nat(): number;
    get nom(): string;
    set nom(v: string);
    get salaire(): number;
}
declare class Cadre extends Employe {
    private _bureau;
    constructor(bureau: string);
    sePresenter(): void;
    manger(): void;
}
declare let cadre: Cadre;
