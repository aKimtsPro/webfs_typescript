abstract class Employe{

    private _nom : string = "-";
    private _age : number = 0;
    private _num_nat : number = 0;
    private readonly _salaire : number = 0;

    public constructor(/*nom:string, age:number, num_nat:number, salaire:number*/){
        // this._nom = nom;
        // this._age = age;
        // this.num_nat = num_nat;
        // this._salaire = salaire;
    }

    public sePresenter() {
        console.log(`Bonjour je m'appelle ${this.nom}(${this._num_nat}), j'ai ${this._age}ans et je gagne ${this.salaire}`)
    }

    public abstract manger();

    public get age() : number{
        return this._age;
    }

    public get num_nat() : number{
        return this._num_nat;
    }
    
    public get nom() : string {
        return "this._nom";
    }
    
    public set nom(v : string) {
        this._nom = v;
    }
    
    public get salaire(){
        console.log("par le getter");
        return this._salaire;
    }
    
    // public set salaire(v : number) {
    //     console.log("par le setter");
    //     this._salaire = v;
    // }
    
}

// let emp : Employe = new Employe(/*"luc",10,0,2000*/); // Employe est abstract = pas d'instanciation
// emp.salaire = 1500; // erreur, pas de set sur salaire


class Cadre extends Employe{

    private _bureau : string;

    constructor(bureau : string) {
        super();
        this._bureau = bureau;
    }

    // redefinition
    public sePresenter() {
        super.sePresenter(); // utilise le sePresenter de l'Employe et pas celui du Cadre
        console.log(`Mon local est le ${this._bureau}`);
    }

    // redefinition
    public manger(){ // l'heritage à Employe me force à implementer cette methode
        console.log("miam");
    }

}

let cadre : Cadre = new Cadre("localC101");
cadre.sePresenter();

