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
exports.VehiculeARoue = void 0;
var Vehicule_1 = require("../modules/Vehicule");
var VehiculeARoue = /** @class */ (function (_super) {
    __extends(VehiculeARoue, _super);
    function VehiculeARoue(marque, modele, puissance, anneeConstr) {
        var _this = _super.call(this, marque, modele, puissance) || this;
        _this._kmParcouru = 0;
        _this.anneeConstr = anneeConstr;
        return _this;
    }
    Object.defineProperty(VehiculeARoue.prototype, "anneeConstr", {
        get: function () {
            return this._anneeConstr;
        },
        set: function (v) {
            this._anneeConstr = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VehiculeARoue.prototype, "kmParcouru", {
        get: function () {
            return this._kmParcouru;
        },
        enumerable: false,
        configurable: true
    });
    // redefinition
    VehiculeARoue.prototype.seDeplacer = function () {
        console.log("vroom");
    };
    VehiculeARoue.prototype.seDeplacerDe = function (nbrKm) {
        this._kmParcouru += nbrKm;
        this.seDeplacer();
    };
    return VehiculeARoue;
}(Vehicule_1.Vehicule));
exports.VehiculeARoue = VehiculeARoue;
