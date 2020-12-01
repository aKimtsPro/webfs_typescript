var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employe = /** @class */ (function () {
    function Employe( /*nom:string, age:number, num_nat:number, salaire:number*/) {
        this._age = 4;
        this._num_nat = 0;
        this._salaire = 0;
        // this._nom = nom;
        // this._age = age;
        // this.num_nat = num_nat;
        // this._salaire = salaire;
    }
    Employe.prototype.sePresenter = function () {
        console.log("Bonjour je m'appelle " + this.nom + "(" + this._num_nat + "), j'ai " + this._age + "ans et je gagne " + this.salaire);
    };
    Object.defineProperty(Employe.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employe.prototype, "num_nat", {
        get: function () {
            return this._num_nat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employe.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (v) {
            this._nom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employe.prototype, "salaire", {
        get: function () {
            console.log("par le getter");
            return this._salaire;
        },
        enumerable: false,
        configurable: true
    });
    return Employe;
}());
// let emp : Employe = new Employe(/*"luc",10,0,2000*/); // Employe est abstract = pas d'instanciation
// emp.salaire = 1500; // erreur, pas de set sur salaire
var Cadre = /** @class */ (function (_super) {
    __extends(Cadre, _super);
    function Cadre(bureau) {
        var _this = _super.call(this) || this;
        _this._bureau = bureau;
        return _this;
    }
    // redefinition
    Cadre.prototype.sePresenter = function () {
        _super.prototype.sePresenter.call(this); // utilise le sePresenter de l'Employe et pas celui du Cadre
        console.log("Mon local est le " + this._bureau);
    };
    // redefinition
    Cadre.prototype.manger = function () {
        console.log("miam");
    };
    return Cadre;
}(Employe));
var cadre = new Cadre("localC101");
cadre.sePresenter();
