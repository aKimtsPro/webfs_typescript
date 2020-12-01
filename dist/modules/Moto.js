"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = exports.CouleurMoto = void 0;
var VehiculeARoue_1 = require("./VehiculeARoue");
var Couleur;
(function (Couleur) {
    Couleur[Couleur["ROUGE"] = 0] = "ROUGE";
    Couleur[Couleur["VERT"] = 1] = "VERT";
    Couleur[Couleur["BLEU"] = 2] = "BLEU";
})(Couleur || (Couleur = {}));
exports.CouleurMoto = Couleur;
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marque, modele, puissance, anneeConstr, couleur) {
        var _this = _super.call(this, marque, modele, puissance, anneeConstr) || this;
        _this.couleur = couleur;
        return _this;
    }
    Object.defineProperty(Moto.prototype, "couleur", {
        get: function () {
            return this._couleur;
        },
        set: function (v) {
            this._couleur = v;
        },
        enumerable: false,
        configurable: true
    });
    return Moto;
}(VehiculeARoue_1.VehiculeARoue));
exports.Moto = Moto;
